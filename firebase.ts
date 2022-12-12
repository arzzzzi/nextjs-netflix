// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyvDNoX_1Lz54n2PtjmsXgh8cenPigPxc',
  authDomain: 'nextjs-netflix-a5e4e.firebaseapp.com',
  projectId: 'nextjs-netflix-a5e4e',
  storageBucket: 'nextjs-netflix-a5e4e.appspot.com',
  messagingSenderId: '1058941027364',
  appId: '1:1058941027364:web:986e03aa99bdbf85ba84b1',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
