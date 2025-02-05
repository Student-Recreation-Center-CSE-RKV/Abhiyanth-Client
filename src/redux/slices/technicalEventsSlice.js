import { createSlice } from '@reduxjs/toolkit';
import { addEvent, getAllTechnicalEvents,getDepartmentCarousels } from '../../api/technicalEvents';

const initialState = {
  events: {
    CSE: [],
    ECE: [],
    EEE: [],
    Mechanical: [],
    Civil: [],
    Chemical: [],
    MME: [],
    MainEvents:[]
  },
  carousels:{
    CSE: [],
    ECE: [],
    EEE: [],
    Mechanical: [],
    Civil: [],
    Chemical: [],
    MME: [],
    MainEvents:[]
  },
  carouselLoading:false,
  loading: false,
  error: null,
  success: false,
};

const technicalEventsSlice = createSlice({
  name: 'technicalEvents',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events[action.payload.department] = action.payload.res;
    },
    setCarousels: (state, action) => {
      state.carousels[action.payload.department] = action.payload.res;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCarouselLoading: (state, action) => {
      state.carouselLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const { setLoading, setError, setSuccess, setEvents,setCarousels,setCarouselLoading } = technicalEventsSlice.actions;

export const addTechnicalEvent = (data, department) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setSuccess(false));
  dispatch(setError(null));

  try {
    await addEvent(data, department); 
    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(error.message));
    console.error("Error adding technical event:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchTechnicalEvents = (department) => async (dispatch, getState) => {
  const { events } = getState().technicalEvents; // Correct destructuring
  // console.log(events);

  if (events[department]?.length > 0) {
    return; // Skip API call if data exists
  }

  dispatch(setLoading(true));
  try {
    const res = await getAllTechnicalEvents(department);
    dispatch(setEvents({ department, res })); // Fix action payload
  } catch (error) {
    dispatch(setError(error.message));
    console.error("Error fetching technical events:", error);
  } finally {
    dispatch(setLoading(false));
  }
};


export const fetchTechnicalCarousels = (department) => async (dispatch, getState) => {
  const { carousels } = getState().technicalEvents; // Correct destructuring
  // console.log(carousels);

  if (carousels[department]?.length > 0) {
    return; // Skip API call if data exists
  }

  dispatch(setCarouselLoading(true));
  try {
    const result = await getDepartmentCarousels(department);
    const res=result.images
    
    dispatch(setCarousels({ department, res })); // Fix action payload
  } catch (error) {
    dispatch(setError(error.message));
    console.error("Error fetching technical events:", error);
  } finally {
    dispatch(setCarouselLoading(false));
  }
};

export default technicalEventsSlice.reducer;
