# Supabase Setup Guide for AI Chatbot Platform

This guide will help you set up Supabase Authentication for the AI Chatbot Platform.

## Step 1: Create a Supabase Project

1. Go to [Supabase](https://app.supabase.com)
2. Click **"New project"**
3. Enter a project name (e.g., "AI Chatbot Platform")
4. Create a strong database password
5. Select your region
6. Click **"Create new project"**
7. Wait for the project to be created (this takes a few minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase project, go to **"Project Settings"** (bottom left)
2. Click **"API"** tab
3. You'll see:
   - **Project URL** - Copy this
   - **anon public** - Copy this key

Example:
```
URL: https://your-project.supabase.co
Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 3: Enable Email/Password Authentication

1. In your Supabase project, go to **"Authentication"** (left sidebar)
2. Click **"Providers"**
3. Make sure **"Email"** is enabled (it should be by default)
4. You can disable other providers if you want

## Step 4: Set Environment Variables

1. Create a `.env.local` file in the project root (copy from `.env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace with your actual values from Step 2.

## Step 5: Test the Setup

1. Start the development server: `npm run dev`
2. Go to `http://localhost:5173/signup`
3. Create a new account
4. Check your email for a confirmation link (if email verification is enabled)
5. Log in with your account

## Step 6: Verify Users in Supabase

1. Go to **"Authentication"** → **"Users"** in your Supabase project
2. You should see your newly created user
3. Click on the user to see their details

## Troubleshooting

### "Supabase is not initialized"
- Make sure all environment variables are set correctly in `.env.local`
- Restart the development server after adding environment variables
- Check that the URL and key are correct

### "Email already in use"
- The email is already registered in your Supabase project
- Use a different email or delete the user from Supabase Console

### "Invalid login credentials"
- Make sure you're using the correct email and password
- Check that the email is confirmed (if email verification is enabled)

### "Email not confirmed"
- Check your email for a confirmation link
- Click the link to confirm your email
- Then try logging in again

## Next Steps

After setting up Supabase:

1. ✅ Users can now sign up with email/password
2. ✅ Users can log in to their accounts
3. ✅ Chat page is accessible only to logged-in users
4. ✅ Add user profiles and data storage
5. ✅ Implement password reset functionality
6. ✅ Add social login (Google, GitHub, etc.)

## Disable Email Confirmation (Optional)

If you want to allow users to sign up without confirming their email:

1. Go to **"Authentication"** → **"Providers"** → **"Email"**
2. Disable **"Confirm email"** toggle
3. Save changes

**Note:** This is not recommended for production apps.

## Support

For more information:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Supabase Dashboard](https://app.supabase.com)
