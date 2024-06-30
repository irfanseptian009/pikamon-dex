import React, { useState, useEffect } from "react";
import { getPokemonList } from "../api/pokeApi";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonList().then((data) => setPokemonData(data.results));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
