// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import.meta.env
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: "n423-comicdocket.firebasestorage.app",
  messagingSenderId: "292009723271",
  appId: import.meta.env.VITE_FB_APP_ID,
};

// console.log("Firebase Config: ", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Variables
export const auth = getAuth(app);
export const db = getFirestore(app); // db - Database
export const storage = getStorage(app);
