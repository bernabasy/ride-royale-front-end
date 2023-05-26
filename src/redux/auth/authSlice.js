import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  logged_in: false,
  error: null,
};

export const register = createAsyncThunk(
  'user/register',
  ({
    email, username, setLoading,
  }) => {
    const result = axios
      .post(
        `http://localhost:3000/register/${username}/${email}`,
      )
      .then((response) => response.data)
      .catch((error) => {
        setLoading(false);
        return {
          user: null,
          logged_in: false,
          error: error.response.data.error,
        };
      });
    return result;
  },
);

export const login = createAsyncThunk(
  'user/login',
  async ({ username }) => {
    const result = await axios
      .get(`http://localhost:3000/login/${username}`)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
        // window.location.reload();
      })
      .catch((error) => ({
        user: null,
        logged_in: false,
        error: error.response.data.error,
      }));
    return result;
  },
);

export const authSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    authenticateUser: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        return user;
      }
      return {
        user,
        logged_in: false,
        error: null,
      };
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      // logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [register.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [login.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [login.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default authSlice.reducer;
export const { authenticateUser } = authSlice.actions;
