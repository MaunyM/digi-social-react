import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import messageReducer from '../features/message/messageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    messages: messageReducer
  },
});
