import { db } from "./firebaseConfig"; 
import { collection,doc ,deleteDoc,setDoc,updateDoc,getDocs} from "firebase/firestore";

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