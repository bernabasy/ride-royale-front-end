import { createAsyncThunk } from '@reduxjs/toolkit';
import registrationService from '../../services/registrationService';

// Actions
const REGISTER_REQUEST = 'rideroyale/users/REGISTER';
const REGISTER_FAILURE = 'rideroyale/users/REGISTER_FAILURE';

const initialState = {
  isLoading: false,
  success: false,
  data: null,
  status: null,
};

const registrationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        success: true,
        data: payload,
        status: 'succeeded',
      };
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        status: 'failed',
      };
    }
    default:
      return state;
  }
};

// Action creators

export const createUserAsync = createAsyncThunk(REGISTER_REQUEST, async (payload, thunkAPI) => {
  let data;
  try {
    const response = await registrationService.createNewUser(payload);
    data = await response.json();
    if (data.errors) {
      thunkAPI.dispatch({
        type: REGISTER_FAILURE,
        payload: data,
      });
    } else {
      thunkAPI.dispatch({
        type: REGISTER_REQUEST,
        payload: data,
      });
    }
  } catch (error) {
    return error;
  }
  return data;
});

export default registrationReducer;
