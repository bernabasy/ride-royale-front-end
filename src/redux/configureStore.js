// Redux store configurations go here
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice'

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export default store;
