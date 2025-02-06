import { db } from "./firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export const addReviewToStall = async (docId, review) => {
  try {
    if (!docId || !review) {
      console.error("Document ID and review text are required.");
      return { status: false, message: "Invalid inputs" };
    }

    const stallRef = doc(db, "Stalls", docId);

    await updateDoc(stallRef, {
      reviews: arrayUnion(review), // Add review to the array, create if not exists
    });

    console.log("Review added successfully!");
    return { status: true, message: "Review added successfully" };
  } catch (error) {
    console.error("Error adding review:", error);
    return { status: false, message: "Error adding review" };
  }
};
