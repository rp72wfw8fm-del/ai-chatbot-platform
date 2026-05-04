import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import ChatbotBuilder from './pages/ChatbotBuilder';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Payment from './pages/Payment';
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/builder" element={<ChatbotBuilder />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
