import React from "react";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pikadex</h1>
      <SearchBar />
      <PokemonList />
    </div>
  );
}

export default App;
