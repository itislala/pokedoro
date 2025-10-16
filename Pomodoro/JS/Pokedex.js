const pokemonImage = document.getElementById("pokemonImage");
const pokeInput = document.getElementById("pokeInput");

let pokeRandomID = Math.floor(Math.random() * 649) + 1;
//let pokemonNameInput = pokeInput.ariaValueMax.trim;

let pokeList = [];
var pokemonName;

const fetchPokemon = async (pokemon) =>{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await apiResponse.json();
    return data;
} 
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon(pokeRandomID)