import { useEffect, useState } from "react";

const controller = new AbortController();
const signal = controller.signal;

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(fetchPokemon, []);

  function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard", { signal: signal })
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Error:", err.message));

    // When abort() is called, the fetch() promise rejects with an AbortError.
    controller.abort();
  }

  return (
    <div className="App">
      <h1>Pokeapi</h1>
      <h2>Pokemon: {pokemon && pokemon.name}</h2>
    </div>
  );
}

export default App;
