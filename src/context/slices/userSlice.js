 
import { createSlice } from '@reduxjs/toolkit';
import {setDataToLocalStorage,getDataToLocalStorage} from '../store';

/**
 * User slice for managing user state in Redux.
 * @type {import('@reduxjs/toolkit').Slice}
 */
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getDataToLocalStorage('user'),
  },
  reducers: {
    /**
     * Reducer function for handling successful user login.
     * @param {Object} state - The current state of the user slice.
     * @param {Object} action - The Redux action containing the payload.
     * @param {any} action.payload - The payload containing user data.
     */
    loginSuccess(state, action) { 
      state.user = action.payload; 
      setDataToLocalStorage("user",JSON.stringify(action.payload));
    },
    /**
     * Reducer function for handling user logout.
     * @param {Object} state - The current state of the user slice.
     */
    logout(state) {
      state.user = null;
      setDataToLocalStorage("user",null);
    },
  },
});
// Extract and export action creators
export const { loginSuccess, logout } = userSlice.actions;
// Export the user reducer
export default userSlice.reducer;
