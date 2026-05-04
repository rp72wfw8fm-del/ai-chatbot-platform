import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SignUp() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('business');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);

    try {
      // Validate form
      if (!name || !email || !phone || !password) {
        throw new Error('Please fill in all required fields');
      }

      if (accountType === 'business' && !company) {
        throw new Error('Please enter your company name');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      if (!agreeTerms) {
        throw new Error('Please agree to the Terms of Service');
      }

      // Sign up with Supabase
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone,
            company: company || 'Not specified',
            account_type: accountType
          }
        }
      });

      if (signUpError) throw signUpError;

      console.log('User created:', data.user);
      alert('✅ Account created successfully! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (err) {
      console.error('Sign up error:', err);
      setError(err.message || 'Failed to create account. Please try again.');
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSignUp();
    }
  };

  return (
    <>
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Join ChatBot Pro</h1>
              <p className="text-gray-600">Create your account and start building AI chatbots</p>
            </div>

            {/* Account Type Selection */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setAccountType('business')}
                disabled={loading}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                  accountType === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } disabled:opacity-50`}
              >
                Business
              </button>
              <button
                onClick={() => setAccountType('individual')}
                disabled={loading}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                  accountType === 'individual'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } disabled:opacity-50`}
              >
                Individual
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Sign Up Form */}
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="John Doe"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="john@example.com"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="+233 55 415 9515"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Company (only for business) */}
              {accountType === 'business' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Your Company"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password * (min 6 characters)</label>
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

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Privacy Policy</a>
                </span>
              </label>

              {/* Sign Up Button */}
              <button
                onClick={handleSignUp}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign In
                </a>
              </p>
            </div>

            {/* Demo Info */}
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-2">💡 Try Demo Account:</p>
              <p className="text-sm text-green-700">📧 Email: <code className="font-mono">demo@example.com</code></p>
              <p className="text-sm text-green-700">🔑 Password: <code className="font-mono">demo123456</code></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
