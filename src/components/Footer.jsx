import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6" />
              <span className="text-xl font-bold">ChatBot Pro</span>
            </div>
            <p className="text-gray-400">AI chatbots for Sales & HR</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@chatbotpro.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0554159515</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ChatBot Pro. All rights reserved. Owner: Kofi Oti Gyau</p>
        </div>
      </div>
    </footer>
  );
}
