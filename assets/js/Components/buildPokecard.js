import { pokecardCallback } from "./receivedPokemonData.js";

//#region GLOBALS
const app = document.getElementById("app");
//#endregion GLOBALS

//#region View code
export const buildPokeCards = (pokemons) => {
  console.log(pokemons);
  let pokeCardsContainer = document.createElement("div");

  pokemons.forEach((pokemon) => {
    let pokeCard = document.createElement("figure");
    let header = document.createElement("header");
    let h3 = document.createElement("h3");

    h3.textContent = pokemon.name;

    pokeCard.appendChild(header);
    header.appendChild(h3);
    pokeCardsContainer.appendChild(pokeCard);

    // Attach click event listener programmatically
    pokeCard.addEventListener("click", () => {
      pokecardCallback(pokemon.url);
    });
  });

  app.appendChild(pokeCardsContainer);
};
//#endregion View code
