import { getPokemonData } from "./Components/getPokemonData.js";
import { buildPokeCards } from "./Components/buildPokecard.js";

// Call getPokemonData and wait for it to resolve before calling buildPokeCards
async function initializeApp() {
  const pokemonData = await getPokemonData();
  buildPokeCards(pokemonData);
}

initializeApp();
