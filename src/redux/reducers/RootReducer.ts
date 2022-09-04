import { combineReducers } from "redux";
import { pokemonsSlice } from "./pokemonsSlice";

const rootReducers = combineReducers({
  pokemons: pokemonsSlice.reducer
});

export default rootReducers;
