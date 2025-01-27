import { getAllData } from "./general"
const collectionName="Stalls"

export const getAllStalls=async()=>{
    try {
        const res=await getAllData(collectionName);
        return res;
        
    } catch (error) {
        return [];
    }
}
