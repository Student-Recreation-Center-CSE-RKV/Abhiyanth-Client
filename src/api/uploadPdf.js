import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig"; // Adjust path to your Firebase config file

/**
 * Uploads a PDF file to Firebase Storage and returns its download URL.
 * @param {File} pdf - The PDF file to upload.
 * @param {string} collectionName - The storage folder name.
 * @returns {string} - The download URL of the uploaded PDF.
 */
 export const uploadPdf = async (pdf, collectionName) => {
  if (!pdf) throw new Error("No PDF file provided!");

  try {
    // Reference to the storage path
    const storageRef = ref(storage, `${collectionName}/${pdf.name}-${Date.now()}`);

    // Upload the PDF to Firebase Storage
    await uploadBytes(storageRef, pdf);

    // Get the download URL for the uploaded PDF
    const url = await getDownloadURL(storageRef);

    return url; // Return the PDF URL
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error; // Rethrow error for further handling
  }
};

