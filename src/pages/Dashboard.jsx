import { useState } from 'react';
import { MessageSquare, Plus, BarChart3, Users, DollarSign, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [chatbots] = useState([
    { id: 1, name: 'Sales Bot', type: 'Sales', conversations: 1250, status: 'Active' },
    { id: 2, name: 'HR Assistant', type: 'HR', conversations: 850, status: 'Active' },
    { id: 3, name: 'Support Bot', type: 'Support', conversations: 2100, status: 'Active' }
  ]);

  const stats = [
    { label: 'Total Conversations', value: '4,200', icon: MessageSquare },
    { label: 'Active Chatbots', value: '3', icon: Users },
    { label: 'This Month Revenue', value: '$2,970', icon: DollarSign },
    { label: 'Avg. Rating', value: '4.8★', icon: BarChart3 }
  ];

  return (
    <div>
      <Navigation />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-black">Dashboard</h1>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Chatbot
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    </div>
                    <Icon className="w-12 h-12 text-primary opacity-20" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chatbots List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Your Chatbots</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold">Name</th>
                    <th className="px-6 py-3 text-left font-bold">Type</th>
                    <th className="px-6 py-3 text-left font-bold">Conversations</th>
                    <th className="px-6 py-3 text-left font-bold">Status</th>
                    <th className="px-6 py-3 text-left font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {chatbots.map((bot) => (
                    <tr key={bot.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">{bot.name}</td>
                      <td className="px-6 py-4">{bot.type}</td>
                      <td className="px-6 py-4">{bot.conversations.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {bot.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:text-blue-700 font-semibold mr-4">Edit</button>
                        <button className="text-primary hover:text-blue-700 font-semibold">Analytics</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Create New Chatbot</h3>
              <p className="text-gray-600 mb-6">Set up a new AI chatbot for your business in minutes.</p>
              <button className="btn-primary w-full">Create Chatbot</button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Billing & Subscription</h3>
              <p className="text-gray-600 mb-6">Manage your subscription and view billing history.</p>
              <button className="btn-secondary w-full">Manage Billing</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
