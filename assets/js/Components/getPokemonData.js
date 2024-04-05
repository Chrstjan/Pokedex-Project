//#region GLOBALS
import { myFetchData } from "../Utils/apiUtils.js";
import { recivedPokemonData } from "./recivedPokemonData.js";
//#endregion GLOBALS

//#region model code
export const getPokemonData = async () => {
  const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"; //Change the endpoint variable to the desired endpoint
  const data = await myFetchData(endpoint);
  recivedPokemonData(data);
  return data;
};
//#endregion model code
