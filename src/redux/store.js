import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import userSlices from "./features/users/userSlices";

const store = configureStore({
  reducer: {
    userSlice: userSlices,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
