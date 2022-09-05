import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUserData";

const initialState: IUser = {
  email: "",
  password: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUsers(state, action) {
      state = action.payload;
      return state;
    }
  }
});
