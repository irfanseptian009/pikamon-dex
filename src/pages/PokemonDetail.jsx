import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api/pokeApi";

function PokemonDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemonName = location.state?.pokemon.name || location.pathname.split("/")[2];
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPokemonByName(pokemonName.toLowerCase());
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    if (pokemonName) {
      fetchPokemonData();
    } else {
      navigate("/");
    }
  }, [pokemonName, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className="w-48 h-48 mx-auto"
      />
      <h2 className="text-2xl font-bold text-center mb-4">{pokemonData.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Tipe:</p>
          <ul>
            {pokemonData.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ... (Tampilkan detail lainnya sesuai kebutuhan) */}
    </div>
  );
}

export default PokemonDetail;
