import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyDYzjPL_HRF2yIKFdPNtpyfbVY1zFI2LNs",
  authDomain: "nuwan-project.firebaseapp.com",
  projectId: "nuwan-project",
  storageBucket: "nuwan-project.firebasestorage.app",
  messagingSenderId: "229093659508",
  appId: "1:229093659508:web:b8555b9dd00dd216835221",
  measurementId: "G-KW5H84V0XE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);