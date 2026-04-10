// Firebase Configuration
// Get your config from: https://console.firebase.google.com/project/YOUR_PROJECT/settings/general

// Replace these with your Firebase project credentials
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const firebaseDB = firebase.database();
const firebaseStorage = firebase.storage();
const firebaseAuth = firebase.auth();

// Get album reference (for sharing between you and your girlfriend)
const ALBUM_ID = 'our-memories'; // Same for both users

console.log('✅ Firebase initialized successfully!');
