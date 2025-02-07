import { getAllData,addDataToCollection,deleteDataById,updateDataById } from "./general"
const collectionName=process.env.REACT_APP_FIREBASE_VOLUNTEER_COLLECTION
export const addVolunteerEvent=async(data)=>{
    const res=await addDataToCollection(collectionName,data);
    return res;
}

export const getAllVolunteerEvents=async()=>{
    const res=await getAllData(collectionName);
    return res;
}

export const editVolunteerEvent=async(id,data)=>{
    const res=await updateDataById(collectionName,id,data);
    return res;
}

export const deleteVolunteerEvent=async(id)=>{
    const res=await deleteDataById(collectionName,id);
    return res;
}