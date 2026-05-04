// Mock Supabase Client for Testing
// This simulates Supabase authentication without needing a real project
// Replace this with real Supabase when ready

class MockSupabaseAuth {
  constructor() {
    this.currentUser = null;
    this.users = {
      'demo@example.com': {
        id: 'demo-user-123',
        email: 'demo@example.com',
        password: 'demo123456',
        user_metadata: {
          full_name: 'Demo User',
          phone: '+233 55 415 9515',
          company: 'Demo Company',
          account_type: 'business'
        }
      }
    };
    this.listeners = [];
  }

  async getSession() {
    return {
      data: {
        session: this.currentUser ? { user: this.currentUser } : null
      }
    };
  }

  async signUp({ email, password, options }) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if user already exists
    if (this.users[email]) {
      throw new Error('User already registered');
    }

    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      email,
      password,
      user_metadata: options?.data || {}
    };

    this.users[email] = newUser;
    this.currentUser = newUser;
    this.notifyListeners('SIGNED_UP', newUser);

    return {
      data: { user: newUser },
      error: null
    };
  }

  async signInWithPassword({ email, password }) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = this.users[email];

    if (!user) {
      throw new Error('Invalid login credentials');
    }

    if (user.password !== password) {
      throw new Error('Invalid login credentials');
    }

    this.currentUser = user;
    this.notifyListeners('SIGNED_IN', user);

    return {
      data: { user },
      error: null
    };
  }

  async signOut() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    this.currentUser = null;
    this.notifyListeners('SIGNED_OUT', null);

    return { error: null };
  }

  onAuthStateChange(callback) {
    this.listeners.push(callback);

    // Return unsubscribe function
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            this.listeners = this.listeners.filter(l => l !== callback);
          }
        }
      }
    };
  }

  notifyListeners(event, user) {
    this.listeners.forEach(listener => {
      listener(event, user ? { user } : null);
    });
  }
}

class MockSupabase {
  constructor() {
    this.auth = new MockSupabaseAuth();
  }
}

// Create mock instance
const mockSupabase = new MockSupabase();

// Export as if it's real Supabase
export const supabase = mockSupabase;

export default mockSupabase;
