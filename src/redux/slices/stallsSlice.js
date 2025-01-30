// redux/slices/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllStalls } from '../../api/stalls';

const initialState = {
  stalls:[],
  loading: false,
  error: null,
  stall:null
};

const eventsSlice = createSlice({
  name: 'stalls',
  initialState,
  reducers: {
    setStalls: (state, action) => {
      state.stalls=action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStall: (state, action) => {
      state.stall = state.stalls.find(stall => stall.id === action.payload) || null;
    }
    
  },
});

export const { setStalls, setLoading, setError,setStall } = eventsSlice.actions;

// Async thunk action to fetch events
export const fetchStalls = () => async (dispatch, getState) => {
  const { stalls } = getState().stalls;
  
  
  if (stalls.length > 0) {
    return;  // Skip the API call if events are already loaded
  }

  dispatch(setLoading(true));
  try {
    const res = await getAllStalls();
    console.log(res);
    dispatch(setStalls(res));  // Update Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const getStallById = (id) => (dispatch) => {
  dispatch(setStall(id));
};


export default eventsSlice.reducer;
