// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from "./slices/eventsSlice"
import techReducer from "./slices/technicalEventsSlice"
import volunteerReducer from "./slices/volunteerSlice"

const store = configureStore({
  reducer: {
    events: eventsReducer,
    technicalEvents:techReducer,
    volunteerEvents:volunteerReducer
  },
});

export default store;
