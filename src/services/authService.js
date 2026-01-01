import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const googleProvider = new GoogleAuthProvider();

// Login avec Google
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // Créer/mettre à jour user dans Firestore
  await createOrUpdateUser(user);
  
  return user;
};

// Login avec Email/Password
export const loginWithEmail = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

// Signup avec Email/Password
export const signupWithEmail = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const user = result.user;

  // Créer profil dans Firestore
  await createOrUpdateUser(user);
  
  return user;
};

// Fonction helper pour créer/mettre à jour user
const createOrUpdateUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName || user.email.split('@')[0],
      photoURL: user.photoURL || null,
      activeListingsCount: 0,
      totalListings: 0,
      reportCount: 0,
      isReported: false,
      createdAt: new Date(),
    });
  }
};

// Logout
export const logout = () => signOut(auth);

// Get current user
export const getCurrentUser = () => auth.currentUser;