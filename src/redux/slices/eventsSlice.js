// redux/slices/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllEvents } from '../../api/events';

const initialState = {
  completed: [],
  ongoing: [],
  upcoming: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.completed = action.payload.completed;
      state.ongoing = action.payload.ongoing;
      state.upcoming = action.payload.upcoming;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEvents, setLoading, setError } = eventsSlice.actions;

// Async thunk action to fetch events
export const fetchEvents = () => async (dispatch, getState) => {
  const { events } = getState();
  
  // Check if the events are already in the state to avoid redundant API calls
  if (events.completed.length > 0 || events.ongoing.length > 0 || events.upcoming.length > 0) {
    return;  // Skip the API call if events are already loaded
  }

  dispatch(setLoading(true));
  try {
    const res = await getAllEvents();
    dispatch(setEvents(res));  // Update Redux state
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export default eventsSlice.reducer;
