import { getAllData } from "./general"
const collectionName=process.env.REACT_APP_FIREBASE_NEWS_COLLECTION

export const getAllNews=async()=>{
    try {
        const res=await getAllData(collectionName);
        return res;
        
    } catch (error) {
        return [];
    }
}
