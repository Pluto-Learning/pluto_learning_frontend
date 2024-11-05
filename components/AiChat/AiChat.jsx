import { useState, useRef, useEffect } from 'react';
import { AtSign, X, MessageSquare, Upload, FileText, Check, X as XMark,SendHorizontal } from 'lucide-react';
import { useStorage, useMutation } from '../../utils/liveblocks.config';
import { createShapeId } from '@tldraw/tldraw';
import { Rnd } from 'react-rnd';
import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist/webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function AiChat({editor}) {
  const messages = useStorage((root) => root.messages ?? []);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const [pendingResponse, setPendingResponse] = useState(null);
  const [lastPosition, setLastPosition] = useState({ x: 100, y: 100 });
  const [rnd, setRnd] = useState({ width: 900, height: 900, x: 0, y: 0 });
  const predefinedPrompts = [
    'How To Be Happy In Life?',
    'What is the future of AI?',
    'How AI can Shape the modern world?',
    'Summarize the following document:'
  ];

  const setPosition = (e, { x, y }) => {
    setRnd(prev => ({ ...prev, x, y }));
};
const setSize = (e, direction, ref, delta, position) => {
  setRnd(prev => ({
      ...prev,
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
      ...position,
  }));
};

  const addMessage = useMutation(({ storage }, message) => {
    const currentMessages = storage.get('messages') ?? [];
    storage.set('messages', [...currentMessages, message]);
  }, []);

  const handleFileUpload = async (event) => {
    debugger;
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    try {
      let fileContent = '';

      // Determine file type and extract text content
      switch (file.type) {
        case 'application/pdf':
          fileContent = await extractPdfText(file);
          break;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        case 'application/msword':
          fileContent = await extractDocxText(file);
          break;
        default:
          // For other file types, use the existing text extraction
          fileContent = await readFileAsText(file);
          break;
      }

      // Add file upload message
      addMessage({
        text: `Uploaded document: ${file.name}`,
        sender: 'user',
        fileType: file.type
      });

      // Analyze document using Azure OpenAI
      const response = await fetch(process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY
        },
        body: JSON.stringify({
          messages: [
            { 
              role: 'system', 
              content: 'You are a helpful assistant that analyzes documents. Please analyze the following document and provide a summary of its key points.' 
            },
            { 
              role: 'user', 
              content: `Please analyze this document content: ${fileContent}` 
            }
          ],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      const data = await response.json();

      const aiMessage={
        text: data.choices[0].message.content.trim(),
        sender: 'ai'
      };
      
      // Add AI analysis response
      addMessage(aiMessage);

      // Reset to predefined prompt
      setSelectedPrompt('Summarize the following document:');
      setInput('');
      setShowPrompts(false);
      setPendingResponse(aiMessage);
    } catch (error) {
      console.error('Error analyzing document:', error);
      addMessage({
        text: `Error analyzing document: ${error.message}`,
        sender: 'ai'
      });
      setPendingResponse(false);
    } finally {
      setIsUploading(false);
    }
  };

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const extractPdfText = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        try {
          const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
          let text = '';

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const pageText = await page.getTextContent();
            text += pageText.items.map(item => item.str).join(' ');
          }

          resolve(text);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const extractDocxText = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        try {
          const result = await mammoth.extractRawText({ arrayBuffer });
          resolve(result.value);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handlePromptSelect = async (prompt) => {
    setSelectedPrompt(prompt);
    setInput(prompt === 'Summarize the following document:' ? 'Summarize the following document:' : prompt);
    setShowPrompts(false);

    if (prompt !== 'Summarize the following document:') {
      const userMessage = { text: prompt, sender: 'user' };
      addMessage(userMessage);

      try {
        const requestBody = {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        };
        const headers = {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY,
        };

        const response = await fetch(process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT, {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody),
        });

        if (!response.body) {
          throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let aiResponse = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          aiResponse += decoder.decode(value, { stream: true });
        }

        aiResponse += decoder.decode();
        const parsedResponse = JSON.parse(aiResponse);
        const messageContent = parsedResponse.choices[0].message.content.trim();
        const aiMessage = { text: messageContent, sender: 'ai' };
        addMessage(aiMessage);
        setPendingResponse(aiMessage);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        const errorMessage = { text: `Error fetching AI response: ${error.message}`, sender: 'ai' };
        addMessage(errorMessage);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = input;
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: 'user' };
      addMessage(userMessage);
      setInput('');
      setSelectedPrompt('');
      setShowPrompts(false);

      try {
        const requestBody = {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userInput }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        };
        const headers = {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY,
        };

        const response = await fetch(process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT, {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody),
        });

        if (!response.body) {
          throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let aiResponse = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          aiResponse += decoder.decode(value, { stream: true });
        }

        aiResponse += decoder.decode();
        const parsedResponse = JSON.parse(aiResponse);
        const messageContent = parsedResponse.choices[0].message.content.trim();
        const aiMessage = { text: messageContent, sender: 'ai' };
        addMessage(aiMessage);
        setPendingResponse(aiMessage);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        const errorMessage = { text: `Error fetching AI response: ${error.message}`, sender: 'ai' };
        addMessage(errorMessage);
      }
    }
  };
  const addTextToCanvas = (text, appendToPrevious = false) => {

    if (!editor) return;

    const id = createShapeId();
    editor.createShape({
      id,
      type: 'text',
      x: lastPosition.x,
      y: lastPosition.y,
      props: {
        w: 800,
        text: text,
        size: 's',
        font: 'sans',  // Use a more readable font
        autoSize: false
      }
    });

    setLastPosition(prev => ({
      x: prev.x,
      y: prev.y + 50
    }));
  };

    const handleResponseAction = (accept) => {
      if (accept && pendingResponse) {
        addTextToCanvas(pendingResponse.text, true);
      }
      setPendingResponse(null);
    };
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50 ai-chat" style={{ zIndex: 10000000 }}>
      {isOpen ? (
        <>
          <Rnd
                size={{ width: rnd.width, height: rnd.height }}
                position={{ x: rnd.x, y: rnd.y }}
                onDragStop={setPosition}
                onResizeStop={setSize}
              >
        <div className="bg-light rounded shadow w-100" style={{ maxWidth: '800px', maxHeight: '800px', overflowY: 'auto',marginLeft:'300px' }}>
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h2 className="h5 mb-0">Chat with AI</h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-link text-dark p-0"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', maxHeight: '300px' }}>
          {messages?.map((message, index) => (
              <div key={index} className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`}
                     style={{ maxWidth: '100%', wordBreak: 'break-word' }}>
                  {message.text}
                  {message.sender === 'ai' && message === pendingResponse && (
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button
                        onClick={() => handleResponseAction(true)}
                        className="btn btn-success btn-sm"
                        title="Accept and add to canvas"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => handleResponseAction(false)}
                        className="btn btn-danger btn-sm"
                        title="Reject"
                      >
                        <XMark size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-top p-3">
            {selectedPrompt === 'Summarize the following document:' && (
              <div className="mb-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                  disabled={isUploading}
                >
                  <Upload className="me-2" size={16} />
                  {isUploading ? 'Uploading...' : 'Upload Document'}
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".txt,.doc,.docx"
                  className="d-none"
                />
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div  className="input-group mb-2">
                <input
                  type="text"
                  value={input}
                  onFocus={() => setShowPrompts(true)}
                  onBlur={() => setTimeout(() => setShowPrompts(false), 100)}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask AI anything"
                  className="form-control"
                  aria-label="Ask AI anything"
                />
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  aria-label="Submit question"
                  disabled={isUploading}
                >
                  <SendHorizontal className="w-6 h-6"/>
                </button>
              </div>
              {showPrompts && (
                <div className="list-group">
                  {predefinedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      type="button"
                      className="list-group-item list-group-item-action"
                      onMouseDown={() => handlePromptSelect(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
        </Rnd>
        </>
      ) : (
       <button
          onClick={() => setIsOpen(true)}
          className="btn btn-light rounded-circle p-3 shadow"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
