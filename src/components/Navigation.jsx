import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <MessageSquare className="w-8 h-8" />
          ChatBot Pro
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/chat" className="hover:text-primary transition">Chat</Link>
          <Link to="/pricing" className="hover:text-primary transition">Pricing</Link>
          <Link to="/login" className="hover:text-primary transition">Sign In</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
