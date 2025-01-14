import { createSlice } from "@reduxjs/toolkit";
import { addVolunteerEvent } from "../../api/volunteer";


const initialState={
    loading: false,
  error: null,
  success: false,
}


const volunteerEventSlice= createSlice({
    name:"volunteerEvents",
    initialState,
    reducers:{
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

export const { setLoading, setError, setSuccess } = volunteerEventSlice.actions;

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

export default volunteerEventSlice.reducer;