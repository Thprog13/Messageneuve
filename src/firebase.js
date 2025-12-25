import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV1mgi11kuBXZ7_BerE9PEYlF9zVwuWXE",
  authDomain: "studentmarketplace-b8eae.firebaseapp.com",
  projectId: "studentmarketplace-b8eae",
  storageBucket: "studentmarketplace-b8eae.appspot.com",
  messagingSenderId: "409292954450",
  appId: "1:409292954450:web:40e27c19adad9c933af88b"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
