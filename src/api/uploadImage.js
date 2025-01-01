import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./firebaseConfig"; // Updated import

const uploadImage = async (image, collectionName) => {
  if (!image) throw new Error("No image file provided!");

  try {
    // Reference to the storage path
    const storageRef = ref(storage, `images/${image.name}`);

    // Upload image to Firebase Storage
    await uploadBytes(storageRef, image);

    // Get the download URL for the uploaded image
    const url = await getDownloadURL(storageRef);

    // Add the download URL to Firestore under the specified collection
    const docRef = collection(db, collectionName); // Changed `firestore` to `db`
    await addDoc(docRef, { imageUrl: url, timestamp: new Date() });

    return url; // Return the image URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow error for further handling
  }
};

export default uploadImage;
