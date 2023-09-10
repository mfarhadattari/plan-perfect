import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
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

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      name: data.user.displayName,
      email: data.user.email,
      avatar: data.user.photoURL,
    };
  }
);

export const loginWithSocial = createAsyncThunk(
  "userSlice/loginWithSocial",
  async (provider) => {
    const data = await signInWithPopup(auth, provider);

    return {
      name: data.user.displayName,
      email: data.user.email,
      avatar: data.user.photoURL,
    };
  }
);
