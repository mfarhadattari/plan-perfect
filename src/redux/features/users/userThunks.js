import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../utils/firebase.config";

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name, avatar }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: avatar,
    });
    return {
      name: data.user.displayName,
      email: data.user.email,
      avatar: data.user.photoURL,
    };
  }
);
