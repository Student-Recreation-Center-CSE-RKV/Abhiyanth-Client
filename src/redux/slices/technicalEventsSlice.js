// redux/slices/technicalEventsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addEvent } from '../../api/technicalEvents';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const technicalEventsSlice = createSlice({
  name: 'technicalEvents',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    }
  },
});

export const { setLoading, setError, setSuccess, resetStatus } = technicalEventsSlice.actions;

export const addTechnicalEvent = (data, department) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setSuccess(false));
  dispatch(setError(null));

  try {
    // console.log("Revanth",data)
    await addEvent(data, department); 
    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default technicalEventsSlice.reducer;