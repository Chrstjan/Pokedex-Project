import { buildPokeCards } from "./buildPokeCard.js";

//#region GLOBALS
let allPokemon = null;
let randFeaturedPokemon = [];
//#endregion GLOBALS

//#region controller code
export const recivedPokemonData = (pokemonData) => {
  console.log(pokemonData);
  allPokemon = pokemonData.results;

  randFeaturedPokemon.push(
    allPokemon[Math.floor(Math.random() * allPokemon.length)],
    allPokemon[Math.floor(Math.random() * allPokemon.length)],
    allPokemon[Math.floor(Math.random() * allPokemon.length)]
  );
  buildPokeCards(randFeaturedPokemon);
  //   console.log(randFeaturedPokemon);
};

export const pokecardCallback = (clickedCard) => {
  console.log(clickedCard);
};
//#endregion controller code
