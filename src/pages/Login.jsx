import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        setError('Please enter email and password');
        setLoading(false);
        return;
      }

      // Sign in with Supabase mock
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        setError(signInError.message || 'Login failed');
        setLoading(false);
        return;
      }

      console.log('User logged in:', data.user);
      alert('✅ Logged in successfully! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login');
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleLogin();
    }
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your ChatBot Pro account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="name@example.com"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="••••••••"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" disabled={loading} />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign Up
                </a>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-2">🔓 Demo Credentials:</p>
              <p className="text-sm text-blue-700">📧 Email: <code className="font-mono">demo@example.com</code></p>
              <p className="text-sm text-blue-700">🔑 Password: <code className="font-mono">demo123456</code></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
