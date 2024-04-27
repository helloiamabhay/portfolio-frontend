import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
export const server = "https://abhayvishwakarma.vercel.app/api/v1";
