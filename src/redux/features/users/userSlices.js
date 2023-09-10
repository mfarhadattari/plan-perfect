import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./userThunks";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  isLoading: true,
  isError: false,
  error: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.error = action.error.message;
      });
      
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.name = payload.name;
        state.email = payload.email;
        state.avatar = payload.avatar;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.name = "";
        state.email = "";
        state.avatar = "";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
