import { useState, useRef, useEffect } from 'react';
import { AtSign, X, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { useStorage, useMutation, useSelf, useOthers } from '../../utils/liveblocks.config';

export default function AiChat() {
  const messages = useStorage((root) => root.messages ?? []);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const addMessage = useMutation(({ storage }, message) => {
    const currentMessages = storage.get('messages') ?? [];
    storage.set('messages', [...currentMessages, message]);
  }, []);

  useEffect(() => {
    console.log('API Key:', process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY);
    console.log('Endpoint:', process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      addMessage(userMessage);
      setInput('');

      try {
        const requestBody = {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: input }
          ],
          max_tokens: 150,
          temperature: 0.7,
        };
        const headers = {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY,
        };

        console.log('Request Body:', requestBody);
        console.log('Headers:', headers);

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
      } catch (error) {
        console.error('Error fetching AI response:', error);
        const errorMessage = { text: `Error fetching AI response: ${error.message}`, sender: 'ai' };
        addMessage(errorMessage);
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50 ai-chat">
      {isOpen ? (
        <div className="bg-light rounded shadow w-100" style={{ maxWidth: '400px', maxHeight: '500px', overflowX: 'scroll' }}>
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h2 className="h5">Chat with AI</h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-link text-dark"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-grow-1 overflow-auto p-3">
            {messages?.map((message, index) => (
              <div key={index} className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`rounded p-2 mb-2 ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-3">
            <div className="input-group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI anything"
                className="form-control"
                aria-label="Ask AI anything"
              />
              <button
                type="submit"
                className="btn btn-outline-secondary"
                aria-label="Submit question"
              >
                <AtSign className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
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
