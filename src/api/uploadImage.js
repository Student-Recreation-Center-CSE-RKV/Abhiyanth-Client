import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./firebaseConfig"; // Updated import

const uploadImage = async (image, collectionName) => {
  if (!image) throw new Error("No image file provided!");

  try {
    // Reference to the storage path
    const storageRef = ref(storage, `${collectionName}/${image.name}`);

    // Upload image to Firebase Storage
    await uploadBytes(storageRef, image);

    // Get the download URL for the uploaded image
    const url = await getDownloadURL(storageRef);

    

    return url; // Return the image URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow error for further handling
  }
};

export default uploadImage;
