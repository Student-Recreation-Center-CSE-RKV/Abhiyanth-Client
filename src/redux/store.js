// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import eventsReducer from "./slices/eventsSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    events: eventsReducer,
  },
});

export default store;
