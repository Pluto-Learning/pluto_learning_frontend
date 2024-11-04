import { useState, useRef, useEffect } from 'react';
import { AtSign, X, MessageSquare, Upload, FileText, Check, X as XMark } from 'lucide-react';
import { useStorage, useMutation } from '../../utils/liveblocks.config';
import { createShapeId } from '@tldraw/tldraw';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AiChat({ editor }) {
  const messages = useStorage((root) => root.messages ?? []);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [pendingResponse, setPendingResponse] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Track the last position where text was added
  const [lastPosition, setLastPosition] = useState({ x: 100, y: 100 });

  const predefinedPrompts = [
    'What is the weather like today?',
    'Tell me a joke.',
    'What are the latest news headlines?',
    'Summarize the following document:'
  ];

  const addMessage = useMutation(({ storage }, message) => {
    const currentMessages = storage.get('messages') ?? [];
    storage.set('messages', [...currentMessages, message]);
  }, []);

  const addTextToCanvas = (text, appendToPrevious = false) => {
    if (!editor) return;

    if (appendToPrevious) {
      const shapes = editor.getShapes();
      const lastTextShape = [...shapes].reverse().find(shape => shape.type === 'text');
      
      if (lastTextShape) {
        editor.updateShape({
          id: lastTextShape.id,
          type: 'text',
          props: {
            ...lastTextShape.props,
            text: lastTextShape.props.text + '\n\n' + text
          }
        });
        return;
      }
    }

    const id = createShapeId();
    editor.createShape({
      id,
      type: 'text',
      x: lastPosition.x,
      y: lastPosition.y,
      props: {
        text: text,
        size: 'md',
        font: 'draw',
        align: 'start',
        autoSize: true
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

  const handlePromptSelect = (prompt) => {
    setInput(prompt);
    setShowPrompts(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const chatStyles = {
    chatContainer: {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: 50,
      maxWidth: '800px',
      width: '100%',
      marginLeft: '300px'
    },
    messageContainer: {
      maxHeight: '300px',
      overflowY: 'auto'
    }
  };

  return (
    <div style={chatStyles.chatContainer} className="ai-chat">
      {isOpen ? (
        <div className="card shadow">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Chat with AI</h5>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-close"
              aria-label="Close chat"
            />
          </div>
          
          <div className="card-body" style={chatStyles.messageContainer}>
            {messages?.map((message, index) => (
              <div key={index} className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-3 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`}
                     style={{ maxWidth: '80%', wordBreak: 'break-word' }}>
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

          <div className="card-footer">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setShowPrompts(true)}
                  onBlur={() => setTimeout(() => setShowPrompts(false), 100)}
                  className="form-control"
                  placeholder="Ask AI anything"
                  aria-label="Ask AI anything"
                />
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  disabled={isUploading}
                >
                  <AtSign size={20} />
                </button>
              </div>

              {showPrompts && (
                <div className="list-group mt-2">
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
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-light rounded-circle shadow p-3"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
