import { db } from "./firebaseConfig"; 
import { collection,doc ,deleteDoc,setDoc,updateDoc,getDocs} from "firebase/firestore";

export const addDataToCollection = async (collectionName, data) => {
    try {      
      const docRef = doc(collection(db, collectionName));
      data.id = docRef.id;  
      await setDoc(docRef, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

export const deleteDataById = async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log(`Document with ID: ${id} successfully deleted.`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };


export const updateDataById = async (collectionName, id, updatedData) => {
    try {
      const docRef = doc(db, collectionName, id);  
      await updateDoc(docRef, updatedData);  
      console.log(`Document with ID: ${id} successfully updated.`);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };


  export const getAllData = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));  
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data()   
      }));
      console.log("Fetched data: ", data);
      return data;  
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };