import React from "react";

function PokemonCard({ pokemon }) {
  const imageUrl = pokemon.sprites?.front_default
    ? pokemon.sprites.front_default
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.url.split("/")[6]
      }.png`;
  const name = pokemon.name || "Unknown";

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={imageUrl} alt={name} className="w-full h-40 object-contain" />
      <h3 className="text-lg font-medium mt-2">{name}</h3>
    </div>
  );
}

export default PokemonCard;
