import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const isInDb = async (uid, userData) => {
  
  const docRef = doc(db, process.env.REACT_APP_FIREBASE_USERS_COLLECTION, uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, userData);
  }

  return true;
};

export { isInDb };
