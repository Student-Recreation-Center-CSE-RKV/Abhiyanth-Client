import { getAllData,addDataToCollection,deleteDataById,updateDataById, getDataById } from "./general"



export const addEvent=async(data,department)=>{
    const res=await addDataToCollection(`TechEvents_${department}`,data);
    return res;
}