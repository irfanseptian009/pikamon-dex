import React, { useState, useEffect } from "react";
import { getPokemonList } from "../api/pokeApi.js";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isFavorite, setIsFavorite] = useState({});

  const handleToggleFavorite = (pokemonName) => {
    setIsFavorite((prevFavorites) => ({
      ...prevFavorites,
      [pokemonName]: !prevFavorites[pokemonName],
    }));
  };

  useEffect(() => {
    getPokemonList().then((data) => setPokemonData(data.results));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          isFavorite={isFavorite[pokemon.name] || false}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}

export default PokemonList;
