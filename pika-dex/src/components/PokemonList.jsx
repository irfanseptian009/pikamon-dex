import React, { useState, useEffect } from "react";
import { getPokemonList } from "../api/pokeApi.js";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState({});
  const itemsPerPage = 0;

  const handleToggleFavorite = (pokemonName) => {
    setIsFavorite((prevFavorites) => ({
      ...prevFavorites,
      [pokemonName]: !prevFavorites[pokemonName],
    }));
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = currentPage * 12;
      getPokemonList(offset, itemsPerPage).then((data) => {
        setPokemonData(data.results);
      });
    };

    fetchPokemon();
  }, [currentPage]);

  const totalPages = 81;

  return (
    <div>
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

      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="px-4 py-2 rounded-md bg-gray-200 text-gray-800">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
