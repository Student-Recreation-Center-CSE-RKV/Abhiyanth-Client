import { getAllData,addDataToCollection,deleteDataById,updateDataById } from "./general"

export const addVolunteerEvent=async(data)=>{
    const res=await addDataToCollection("VolunteerRegistration",data);
    return res;
}

export const getAllVolunteerEvents=async()=>{
    const res=await getAllData("VolunteerRegistration");
    return res;
}

export const editVolunteerEvent=async(id,data)=>{
    const res=await updateDataById("VolunteerRegistration",id,data);
    return res;
}

export const deleteVolunteerEvent=async(id)=>{
    const res=await deleteDataById("VolunteerRegistration",id);
    return res;
}