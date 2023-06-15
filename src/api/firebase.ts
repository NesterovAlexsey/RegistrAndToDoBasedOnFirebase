// // src/api/firebase.ts
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { initializeApp } from 'firebase/app';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: 'AIzaSyAkF7R_Cd6oYOZio9ef3l-zkvpIQ5AHbEM',
//     authDomain: 'ts-firebase-22cfe.firebaseapp.com',
//     projectId: 'ts-firebase-22cfe',
//     storageBucket: 'ts-firebase-22cfe.appspot.com',
//     messagingSenderId: '579599409275',
//     appId: '1:579599409275:web:1bc949f17a8c82689602de',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };
// src/api/firebase.ts
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getAuth } from 'firebase/auth';

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

export { app, auth };

// authDomain: 'ts-firebase-ff4d3.firebaseapp.com',
// projectId: 'ts-firebase-ff4d3',
// storageBucket: 'ts-firebase-ff4d3.appspot.com',
// messagingSenderId: '422520342709',
// appId: '1:422520342709:web:d4f688895cc2c2cd5696fc'
