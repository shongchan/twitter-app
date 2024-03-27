import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

try {
  app = getApp("app");
} catch(e) {
  app = initializeApp(firebaseConfig, "app");
}

export const storage = getStorage(app);

export const db = getFirestore(app);

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// export default firebase;