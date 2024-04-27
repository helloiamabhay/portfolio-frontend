import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  message: null,
  error: null,
  resetReducer: false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    logoutstate: (state) => {
      state.isAuthenticated = false;
    },
    resetState: (state) => {
      state.resetReducer = true;
    },
    resetFailState: (state) => {
      state.resetReducer = false;
    },
    forgetRequest: (state) => {
      state.loading = true;
    },
    forgetSuccess: (state) => {
      state.loading = false;
    },
  },
});
export const {
  loginRequest,
  loginSuccess,
  loginFail,
  clearError,
  clearMessage,
  logoutstate,
  resetState,
  resetFailState,
  forgetRequest,
  forgetSuccess,
} = authReducer.actions;
export default authReducer.reducer;
