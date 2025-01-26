import { getAllData,addDataToCollection,deleteDataById,updateDataById, getDataById } from "./general"
const collectionName="Stalls"

export const getAllStalls = async () => {
    try {
      const res = await getAllData(collectionName);
      return res || []; // Return the result or an empty array if null/undefined
    } catch (error) {
      console.error("Error fetching stalls:", error); // Log error details for debugging
      return []; // Return an empty array to maintain consistent return type
    }
  };

export const addStall=async(data)=>{
    const res=await addDataToCollection(collectionName,data);
    return res;
}

export const deleteEvent=async(id)=>{
    const res=await deleteDataById(collectionName,id);
    return res;
}

export const updateEvent=async(id,updatedData)=>{
    const res=await updateDataById(collectionName,id,updatedData);
    return res;
}

export const getEventById=async(id)=>{
    const res=await getDataById(collectionName,id);
    return res;
}