import { getAllData,addDataToCollection,deleteDataById,updateDataById, getDataById } from "./general"
const collectionName="news"


export const addNews=async(data)=>{
    const res=await addDataToCollection(collectionName,data);
    return res;
}
