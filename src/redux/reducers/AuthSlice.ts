import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

const initialState = {
  email: "",
  password: ""
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {}
});
