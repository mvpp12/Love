// Firebase Configuration
// Get your config from: https://console.firebase.google.com/project/YOUR_PROJECT/settings/general

// Replace these with your Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyCkQjW1DESEmZVuGkduUcD4eaQzfs6cUU",
    authDomain: "ourlove-3d826.firebaseapp.com",
    databaseURL: "https://ourlove-3d826.firebaseio.com",
    projectId: "ourlove-3d826",
    storageBucket: "ourlove-3d826.firebasestorage.app",
    messagingSenderId: "410428943619",
    appId: "1:410428943619:web:766a4b0ecea089a84e8d36",
    measurementId: "G-2XVW35T9G4"
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
