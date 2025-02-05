async function whosThatPokemon() {
  const randomizer = Math.floor(Math.random() * 1025);

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${randomizer}`
  );

  const pokemonName = response.data.name;
  const sprite = response.data.sprites.front_default;
  const types = response.data.types.map((typeObj) => typeObj.type.name);

  const dexDisplay = document.getElementById("pokedex-image");
  dexDisplay.src = sprite;
  dexDisplay.alt = pokemonName;
  dexDisplay.classList.add("pokedex__image");

  const thatPokemon = document.getElementById("poke-name-display");
  thatPokemon.textContent = `Wow! Thats a ${pokemonName}!`;

  const themTypes = document.getElementById("poke-types");
  themTypes.textContent = `Did you know it's a ${types.join(" and ")} type?!`;

  const pokeSumm = document.getElementById("poke-summary");

  const randoButton = document.getElementById("randomize-button");
  randoButton.textContent = "Let's find another!";
}

const randoButton = document.getElementById("randomize-button");
randoButton.addEventListener("click", whosThatPokemon);
