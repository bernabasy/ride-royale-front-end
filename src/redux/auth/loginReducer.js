import { createAsyncThunk } from '@reduxjs/toolkit';
import registrationService from '../../services/registrationService';

// Actions
const LOGIN_SUCCESS = 'rideroyale/users/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'rideroyale/users/LOGIN_FAILURE';

const initialState = {
  success: false,
  data: {
    error: null,
    user: null,
  },
  status: null,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        data: {
          error: null,
          user: payload,
        },
        status: 'succeeded',
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        data: {
          error: payload.message,
          user: null,
        },
        success: false,
        status: 'failed',
      };
    }
    default:
      return state;
  }
};

// Action creators

export const loginUserAsync = createAsyncThunk(LOGIN_SUCCESS, async (payload, thunkAPI) => {
  let data;
  try {
    let bearerToken = localStorage.getItem('bearerToken');

    if (!bearerToken) {
      const response = await registrationService.userLogin(payload);
      bearerToken = response.token;

      localStorage.setItem('bearerToken', bearerToken);
      data = await response.data;
    } else {
      const response = await registrationService.userLogin(payload, bearerToken);
      data = await response;
    }

    if (!data.data) {
      thunkAPI.dispatch({
        type: LOGIN_FAILURE,
        payload,
      });
    } else {
      thunkAPI.dispatch({
        type: LOGIN_SUCCESS,
        payload,
      });
    }
  } catch (error) {
    return error;
  }
  return data;
});

export default loginReducer;
