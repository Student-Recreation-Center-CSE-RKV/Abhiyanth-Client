import { db } from "./firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
const collectionName=process.env.REACT_APP_FIREBASE_STALLS_COLLECTION

export const addReviewToStall = async (docId, review) => {
  try {
    if (!docId || !review) {
      console.error("Document ID and review text are required.");
      return { status: false, message: "Invalid inputs" };
    }

    const stallRef = doc(db, collectionName, docId);

    await updateDoc(stallRef, {
      reviews: arrayUnion(review), 
    });

    
    return { status: true, message: "Review added successfully" };
  } catch (error) {
    console.error("Error adding review:", error);
    return { status: false, message: "Error adding review" };
  }
};
