# Muhammad Affan Portfolio

A modern, animated portfolio website built with React, Vite, Three.js, Tailwind CSS, and Firebase.

## Features

- 🎨 Beautiful animated hero section with photo
- 📱 Responsive design for all devices
- 🌙 Dark/light theme support
- 📝 Contact form with Firebase integration
- 📊 Projects fetched from Firestore with filter tabs
- 📤 File upload to Firebase Storage
- 🔐 Admin dashboard for managing projects
- 📱 Side panel for quick access to projects and contact

## Getting Started

### Background Texture
Place your dark diamond/grid texture image at: `src/assets/bg-texture.jpg`

### Prerequisites

- Node.js (18+
- Firebase account

### Installation

1. Clone the repo
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

4. Start the dev server:
```bash
npm run dev
```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Storage
5. Enable Authentication → Email/Password → Enable
6. Create an admin user in Firebase Console → Authentication → Users → Add User
7. Deploy the rules from `firestore.rules` and `storage.rules`
8. Use the email/password you created to login at `/admin`

## Admin Panel

- Access at `/admin`
- Login with Firebase Auth credentials
- Add, edit, and delete projects
- Upload images and videos

## Deployment

```bash
npm run build
```

## Tech Stack

- React 19
- Vite
- Framer Motion
- Tailwind CSS
- Firebase (Auth, Firestore, Storage)
- Three.js (optional components)

