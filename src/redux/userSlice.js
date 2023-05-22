import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    getUsersStart(state) {
      state.loading = true;
    },
    getUsersSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(getUsersStart());

  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/users');
    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export default usersSlice.reducer;
