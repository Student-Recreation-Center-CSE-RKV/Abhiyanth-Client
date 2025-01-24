import { db ,storage} from "./firebaseConfig"; 
import { collection,doc ,deleteDoc,setDoc,updateDoc,getDocs,getDoc} from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const addDataToCollection = async (collectionName, data) => {
    try {      
      const docRef = doc(collection(db, collectionName));
      data.id = docRef.id;  
      await setDoc(docRef, data);
      console.log("Document written with ID: ", docRef.id);
      return {status:true,message:"Document added successfully"}
      
    } catch (error) {
      console.error("Error adding document: ", error);
      return {status:false,message:"Error Adding Document"}
    }
  };

export const deleteDataById = async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log(`Document with ID: ${id} successfully deleted.`);
      return {status:true,message:"Document Deleted successfully"}
    } catch (error) {
      console.error("Error deleting document: ", error);
      return {status:false,message:"Error Deleting Document"}
    }
  };


export const updateDataById = async (collectionName, id, updatedData) => {
    try {
      const docRef = doc(db, collectionName, id);  
      await updateDoc(docRef, updatedData);  
      console.log(`Document with ID: ${id} successfully updated.`);
      return {status:true,message:"Document Updated Successfully"}
    } catch (error) {
      console.error("Error updating document: ", error);
      return {status:true,message:"Document Updation Failed"}
    }
  };


  export const getAllData = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));  
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data()   
      }));
      return data;  
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  };

  export const getDataById = async (collectionName, id) => {
    try {
      console.log(collectionName,id)
      const docRef = doc(db, collectionName, id); 
      const docSnapshot = await getDoc(docRef); 
      if (docSnapshot.exists()) {
        return docSnapshot.data(); 
      } else {
        console.error("No such document!");
        return null; 
      }
    } catch (error) {
      console.error("Error getting document by ID: ", error);
      return null; 
    }
  };

  export const fetchFirebaseDoc = async (collectionName, docName) => {
    try {
      const docRef = doc(db, collectionName, docName);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { status: true, data: docSnapshot.data() };
      } else {
        console.error("No such document!");
        return { status: false, message: "No such document!" };
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      return { status: false, message: "Error fetching document" };
    }
  };
  

  export const addImageToArray = async (collectionName, docName, url) => {
    try {
      const docRef = doc(db, collectionName, docName);
      const docSnapshot = await getDoc(docRef);
  
      if (docSnapshot.exists()) {
        await updateDoc(docRef, {
          images: arrayUnion(url),
        });
        return { status: true, message: "Image added successfully!" };
      } else {
        console.error("No such document!");
        return { status: false, message: "No such document!" };
      }
    } catch (error) {
      console.error("Error updating document:", error);
      return { status: false, message: "Error updating document" };
    }
  };

  export const uploadPdf = async (file) => {
    try {
      if (!file || file.type !== "application/pdf") {
        throw new Error("Invalid file type. Please upload a PDF file.");
      }
  
      // 1. Create a reference to the storage location
      const storageRef = ref(storage, `pdfs/${file.name}`);
  
      // 2. Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      console.log("File uploaded successfully:", snapshot);
  
      // 3. Get the download URL for the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("Download URL:", downloadURL);
  
      return downloadURL;
    } catch (error) {
      console.error("Error uploading PDF:", error);
      throw error; // Rethrow the error for further handling
    }
  };