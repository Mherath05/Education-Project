import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc, 
  deleteDoc,
  query,
  where,
  orderBy 
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase/config';

// Authentication
export const registerUser = async (email, password, userData) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // Store additional user data in Firestore
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    email: user.email,
    ...userData,
    createdAt: new Date()
  });
  
  return user;
};

export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return await signOut(auth);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get user data from Firestore
export const getUserData = async (uid) => {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
};

// Get user email by username
export const getUserByUsername = async (username) => {
  const q = query(collection(db, 'users'), where('username', '==', username));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0];
};

// Login with username (converts to email internally)
export const loginWithUsername = async (username, password) => {
  // First, find the user by username to get their email
  const userData = await getUserByUsername(username);
  if (!userData) {
    throw new Error('User not found');
  }
  
  // Then login with email and password
  return await signInWithEmailAndPassword(auth, userData.email, password);
};

// Students
export const addStudent = async (studentData) => {
  return await addDoc(collection(db, 'students'), {
    ...studentData,
    paymentStatus: false,
    lastPayment: null,
    createdAt: new Date()
  });
};

export const getStudents = async () => {
  const snapshot = await getDocs(collection(db, 'students'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateStudentPayment = async (studentId, paymentData) => {
  const studentRef = doc(db, 'students', studentId);
  return await updateDoc(studentRef, paymentData);
};

// Document Materials (PDF, Word)
export const uploadDocument = async (file, materialData) => {
  const storageRef = ref(storage, `documents/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  
  return await addDoc(collection(db, 'materials'), {
    ...materialData,
    fileName: file.name,
    fileUrl: downloadURL,
    fileType: file.type,
    uploadDate: new Date()
  });
};

export const getMaterials = async () => {
  const snapshot = await getDocs(collection(db, 'materials'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Advertisements
export const addAdvertisement = async (adData) => {
  return await addDoc(collection(db, 'advertisements'), {
    ...adData,
    status: 'pending',
    createdAt: new Date()
  });
};

export const getAdvertisements = async () => {
  const snapshot = await getDocs(collection(db, 'advertisements'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateAdvertisementStatus = async (adId, status) => {
  const adRef = doc(db, 'advertisements', adId);
  return await updateDoc(adRef, { status });
};

