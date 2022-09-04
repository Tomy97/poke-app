import { Dispatch } from "redux";
import { getPokemonService } from "../../services/pokemon.service";
import pokemonsSlice from "../reducers/pokemonsSlice";
export const getPokemons = "getPokemons";

export const getPokemonsAction = () => async (dispatch: Dispatch) => {
  const { results } = await getPokemonService();
  dispatch(pokemonsSlice.actions.getPokemons(results));
};
