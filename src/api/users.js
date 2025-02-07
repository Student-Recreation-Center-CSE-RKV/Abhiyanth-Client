import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const isInDb = async (uid, userData) => {
  
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, userData);
  }

  return true;
};

export { isInDb };
