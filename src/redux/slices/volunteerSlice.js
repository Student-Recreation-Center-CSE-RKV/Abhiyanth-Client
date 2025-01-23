import { createSlice } from "@reduxjs/toolkit";
import { addVolunteerEvent } from "../../api/volunteer";
import { getAllVolunteerEvents } from "../../api/volunteer";

const initialState={
  volunteerEvents:[],
    loading: false,
  error: null,
  success: false,
}


const volunteerEventSlice= createSlice({
    name:"volunteerEvents",
    initialState,
    reducers:{
      setEvents: (state, action) => {
        state.volunteerEvents = action.payload;
      },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setError: (state, action) => {
          state.error = action.payload;
        },
        setSuccess: (state, action) => {
          state.success = action.payload;
        }
    }
})

export const { setLoading, setError, setSuccess,setEvents } = volunteerEventSlice.actions;

export const addVolunteer = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setSuccess(false));
  dispatch(setError(null));

  try {
    // console.log("Revanth",data)
    await addVolunteerEvent(data); 
    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchVolunteers = () => async (dispatch, getState) => {
  const { volunteerEvents } = getState().volunteerEvents;
  console.log(volunteerEvents)
  if (volunteerEvents.length > 0) {
    return; 
  }

  dispatch(setLoading(true));
  try {
    const res = await getAllVolunteerEvents();
    // console.log(res)
    dispatch(setEvents(res));  
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default volunteerEventSlice.reducer;