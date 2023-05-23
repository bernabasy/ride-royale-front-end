import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './auth/registrationReducer';
import loginReducer from './auth/loginReducer';

const store = configureStore({
  reducer: {
    register: registrationReducer,
    login: loginReducer,
  },
});

export default store;
