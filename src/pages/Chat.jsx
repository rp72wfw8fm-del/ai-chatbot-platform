import { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your AI Sales & HR Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response (in production, this would call your AI API)
    setTimeout(() => {
      const botResponses = [
        'That\'s a great question! Our AI chatbots can help with lead qualification, customer engagement, employee onboarding, and much more.',
        'I can help you with sales automation, HR processes, customer support, and employee engagement. What specific area interests you?',
        'Our platform supports integration with WhatsApp, Facebook, Telegram, and your website. Which platform would you like to use?',
        'You can customize the chatbot with your brand colors, welcome messages, and specific responses for your business needs.',
        'Our pricing starts at $29/month for the Basic plan. Would you like to know more about our Pro or Enterprise plans?',
        'The AI chatbot can handle customer inquiries 24/7, qualify leads, answer FAQs, and collect contact information automatically.',
        'Yes, you can track conversations, analyze customer interactions, and get detailed analytics on chatbot performance.',
        'Setup is quick and easy! You can create and deploy a chatbot in just a few minutes using our builder.'
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Navigation />
      
      <section className="section bg-gray-50 flex-1">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-black mb-8">Chat with AI Assistant</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-96">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg break-words ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                    <Loader className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-4">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">What can I help with?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900">Sales Questions</p>
                <p className="text-sm text-blue-700">Ask about lead qualification, customer engagement, and sales automation</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900">HR Questions</p>
                <p className="text-sm text-green-700">Ask about employee onboarding, benefits, and HR automation</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-900">Pricing & Plans</p>
                <p className="text-sm text-purple-700">Learn about our subscription plans and pricing options</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="font-semibold text-orange-900">Integration & Setup</p>
                <p className="text-sm text-orange-700">Get help with chatbot setup, customization, and integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
