import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const apiKey=process.env.REACT_APP_API_KEY
const authDomain=process.env.REACT_APP_AUTH_DOMAIN
const projectId=process.env.REACT_APP_PROJECT_ID
const storageBucket=process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderId=process.env.REACT_APP_MESSAGING_SENDER_ID
const appId=process.env.REACT_APP_APP_ID
const measurementId=process.env.REACT_APP_MEASUREMENT_ID


const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };
