import { createSlice } from "@reduxjs/toolkit";
import { IPokemons } from "../../interfaces/IStateStore";

const initialState: IPokemons[] = [];

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    getPokemons(state, action) {
      state = action.payload;
      return state;
    }
  }
});

export default pokemonsSlice;
