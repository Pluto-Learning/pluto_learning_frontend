import { useState, useRef, useEffect } from 'react'
import { AtSign, X, MessageSquare } from 'lucide-react'

export default function AiChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = input.toLowerCase() === 'hello' 
          ? 'Hi there! How can I assist you today?'
          : "I'm an AI assistant. How may I help you?"
        setMessages(msgs => [...msgs, { text: aiResponse, sender: 'ai' }])
      }, 1000)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50 ai-chat">
      {isOpen ? (
        <div className="bg-light rounded shadow w-100" style={{ maxWidth: '400px', height: '500px' }}>
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
            {messages.map((message, index) => (
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
  )
}