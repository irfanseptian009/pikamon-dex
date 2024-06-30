import React, { useState } from "react";
import { getPokemonByName } from "../api/pokeApi";
import PokemonCard from "./PokemonCard";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getPokemonByName(searchTerm.toLowerCase());
      setPokemon(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setError("Pokémon tidak ditemukan.");
      setPokemon(null);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md px-3 py-2 w-full"
        placeholder="Cari Pokémon..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        disabled={!searchTerm}
      >
        Cari
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {pokemon && (
        <div className="mt-4">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
