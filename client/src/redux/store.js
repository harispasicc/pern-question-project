import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";

const store = combineReducers({
  reducer: {
    auth: authSlice,
  },
});

export default store;
