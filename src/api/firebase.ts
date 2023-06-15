import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

// authDomain: 'ts-firebase-ff4d3.firebaseapp.com',
// projectId: 'ts-firebase-ff4d3',
// storageBucket: 'ts-firebase-ff4d3.appspot.com',
// messagingSenderId: '422520342709',
// appId: '1:422520342709:web:d4f688895cc2c2cd5696fc'
