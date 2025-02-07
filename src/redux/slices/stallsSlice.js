// redux/slices/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllStalls } from '../../api/stalls';
import { shuffleArray } from '../../api/getAllGalleryImages';

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
    },
    setReview:(state,action)=>{
      const { id, review } = action.payload;
      const stall = state.stalls.find(stall => stall.id === id);
      if (stall) {
        if (!stall.reviews) {
          stall.reviews = [];
        }
        stall.reviews.unshift(review);
      }
      console.log("Revanth",stall.reviews)
    }
    
  },
});

export const { setStalls, setLoading, setError,setStall,setReview } = eventsSlice.actions;

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
    dispatch(setStalls(shuffleArray(res)));  // Update Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const getStallById = (id) => (dispatch) => {
  dispatch(setStall(id));
};

export const updateReview= (id,review)=> (dispatch)=>{
  console.log("Revanth is calling")
  dispatch(setReview({ id, review }))
}


export default eventsSlice.reducer;
