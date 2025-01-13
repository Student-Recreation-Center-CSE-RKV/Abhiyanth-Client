// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from "./slices/eventsSlice"
import techReducer from "./slices/technicalEventsSlice"

const store = configureStore({
  reducer: {
    events: eventsReducer,
    technicalEvents:techReducer
  },
});

export default store;
