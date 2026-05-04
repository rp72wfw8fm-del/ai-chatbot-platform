# Firebase Setup Guide for AI Chatbot Platform

This guide will help you set up Firebase Authentication for the AI Chatbot Platform.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a project"**
3. Enter a project name (e.g., "AI Chatbot Platform")
4. Click **"Continue"**
5. Disable Google Analytics (optional) and click **"Create project"**
6. Wait for the project to be created

## Step 2: Create a Web App

1. In the Firebase Console, click the **"Web"** icon (</> symbol)
2. Enter an app nickname (e.g., "AI Chatbot Web")
3. Click **"Register app"**
4. Copy the Firebase configuration object

## Step 3: Get Your Firebase Credentials

You'll see a configuration object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDemoKey...",
  authDomain: "ai-chatbot-demo.firebaseapp.com",
  projectId: "ai-chatbot-demo",
  storageBucket: "ai-chatbot-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 4: Enable Email/Password Authentication

1. In the Firebase Console, go to **"Authentication"** (left sidebar)
2. Click the **"Sign-in method"** tab
3. Click **"Email/Password"**
4. Toggle **"Enable"** to ON
5. Click **"Save"**

## Step 5: Set Environment Variables

1. Create a `.env.local` file in the project root (copy from `.env.example`)
2. Add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 6: Test the Setup

1. Start the development server: `npm run dev`
2. Go to `http://localhost:5173/signup`
3. Create a new account
4. You should be able to sign up and log in!

## Troubleshooting

### "Firebase is not initialized"
- Make sure all environment variables are set correctly in `.env.local`
- Restart the development server after adding environment variables

### "Email already in use"
- The email is already registered in your Firebase project
- Use a different email or delete the user from Firebase Console

### "Invalid email"
- Make sure the email format is correct (e.g., user@example.com)

### "Password should be at least 6 characters"
- Firebase requires passwords to be at least 6 characters long

## Next Steps

After setting up Firebase:

1. ✅ Users can now sign up with email/password
2. ✅ Users can log in to their accounts
3. ✅ Chat page is accessible only to logged-in users
4. ✅ Add user profiles and data storage
5. ✅ Implement password reset functionality
6. ✅ Add social login (Google, Facebook)

## Support

For more information:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com)
