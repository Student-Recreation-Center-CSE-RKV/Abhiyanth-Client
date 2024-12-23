import { getAllData } from "./general"

export const getAllEvents=async()=>{
    try {
        const res=await getAllData(process.env.REACT_APP_FIREBASE_EVENT_COLLECTION);
        const data={}
        data["completed"]=res.filter((item)=>item.status==="completed")
        data["ongoing"]=res.filter((item)=>item.status==="ongoing" || item.status==="live")
        data["upcoming"]=res.filter((item)=>item.status==="upcoming")
        console.log(data);
        
    } catch (error) {
        return {
            completed:[],
            ongoing:[],
            upcoming:[]
        }
    }
}