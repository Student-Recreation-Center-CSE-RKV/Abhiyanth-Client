import { getAllData } from "./general"
const collectionName="news"

export const getAllNews=async()=>{
    try {
        const res=await getAllData(collectionName);
        return res;
        
    } catch (error) {
        return [];
    }
}
