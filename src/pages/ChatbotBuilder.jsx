import { useState } from 'react';
import { Settings, Save, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ChatbotBuilder() {
  const [botConfig, setBotConfig] = useState({
    name: 'My Chatbot',
    type: 'Sales',
    description: 'AI-powered sales chatbot',
    color: '#0066FF',
    welcomeMessage: 'Hello! How can I help you today?'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBotConfig(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Navigation />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-black mb-8">Chatbot Builder</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6" />
                  Chatbot Configuration
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Chatbot Name</label>
                    <input
                      type="text"
                      name="name"
                      value={botConfig.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Type</label>
                    <select
                      name="type"
                      value={botConfig.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Sales</option>
                      <option>HR</option>
                      <option>Support</option>
                      <option>Lead Generation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Description</label>
                    <textarea
                      name="description"
                      value={botConfig.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Welcome Message</label>
                    <textarea
                      name="welcomeMessage"
                      value={botConfig.welcomeMessage}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Brand Color</label>
                    <div className="flex gap-4">
                      <input
                        type="color"
                        name="color"
                        value={botConfig.color}
                        onChange={handleChange}
                        className="w-20 h-10 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={botConfig.color}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="btn-primary flex items-center gap-2 flex-1">
                      <Save className="w-5 h-5" />
                      Save Configuration
                    </button>
                    <button className="btn-secondary flex items-center gap-2 flex-1">
                      <Eye className="w-5 h-5" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Preview</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-96 flex flex-col">
                  <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                    <div className="bg-blue-100 p-3 rounded-lg text-sm">
                      {botConfig.welcomeMessage}
                    </div>
                    <div className="bg-gray-300 p-3 rounded-lg text-sm ml-auto w-3/4">
                      Hello! I need help with...
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Integration Options */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Integration Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['Website', 'WhatsApp', 'Facebook', 'Telegram'].map((platform, idx) => (
                <button
                  key={idx}
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-blue-50 transition"
                >
                  <p className="font-semibold">{platform}</p>
                  <p className="text-sm text-gray-600">Connect now</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
