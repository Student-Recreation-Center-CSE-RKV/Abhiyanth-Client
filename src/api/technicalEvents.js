import { getAllData,addDataToCollection,deleteDataById,updateDataById, getDataById, addImageToArray,fetchFirebaseDoc } from "./general"



export const addEvent=async(data,department)=>{
    const res=await addDataToCollection(`TechEvents_${department}`,data);
    return res;
}


export const getAllTechnicalEvents=async(department)=>{
    const res=await getAllData(`TechEvents_${department}`);
    return res;
}

export const editTechnicalEvent=async(id,data,department)=>{
    const res=await updateDataById(`TechEvents_${department}`,id,data);
    return res;
}

export const deleteTechnicalEvent=async(id,department)=>{
    const res=await deleteDataById(`TechEvents_${department}`,id);
    return res;
}

export const getTechnicalEventById=async(department,id)=>{
    const res=await getDataById(`TechEvents_${department}`,id);
    return res;
}

export const addImageToDepartmentArray=async (url,departmentName)=>{
    const res=await addImageToArray('department_carousels',departmentName,url);
    return res;
}

export const getDepartmentCarousels=async (departmentName)=>{
    const res=await fetchFirebaseDoc("department_carousels",departmentName);
    return res.data ? res.data :[];
}