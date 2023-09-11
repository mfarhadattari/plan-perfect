import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import themeSlice from "./features/theme/themeSlice";
import userSlices from "./features/users/userSlices";

const store = configureStore({
  reducer: {
    userSlice: userSlices,
    themeSlice: themeSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
