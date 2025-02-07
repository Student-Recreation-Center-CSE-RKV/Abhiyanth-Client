import { getAllData } from "./general"
const collectionName=process.env.REACT_APP_FIREBASE_STALLS_COLLECTION

export const getAllStalls=async()=>{
    try {
        const res=await getAllData(collectionName);
        return res;
        
    } catch (error) {
        return [];
    }
}
