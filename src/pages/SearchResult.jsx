import React from "react";
import { useLocation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function SearchResult() {
  const location = useLocation();
  const pokemonData = location.state?.pokemon;

  return (
    <div className="search-result">
      {pokemonData ? (
        <PokemonCard pokemon={pokemonData} />
      ) : (
        <p>Tidak ada hasil pencarian atau masih loading.</p> // Pesan loading atau error
      )}
    </div>
  );
}

export default SearchResult;
