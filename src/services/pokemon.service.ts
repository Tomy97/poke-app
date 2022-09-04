import axios from "axios";

export const getPokemonService = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  return data;
};
