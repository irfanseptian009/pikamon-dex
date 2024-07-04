import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api/pokeApi.js";

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
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const getStatLabel = (statName) => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Att";
      case "defense":
        return "Def";
      case "special-attack":
        return "Sp.Atk";
      case "special-defense":
        return "Sp.Def";
      case "speed":
        return "Speed";
      default:
        return statName;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-16 ">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center md:flex md:justify-between w-full max-w-4xl">
        {/* Image and Basic Info */}
        <div className="mb-8 md:mb-0 ">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="w-48 h-48 md:w-52 md:h-52 mx-auto border border-dashed border-purple-600 rounded-md"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center my-4 text-purple-600">
            {pokemonData.name}
          </h2>
          <p className="text-gray-600">#{pokemonData.id}</p>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8  ">
          {[
            { title: "Type", data: pokemonData.types.map((t) => t.type.name) },
            {
              title: "Abilities",
              data: pokemonData.abilities.map((a) => a.ability.name),
            },
            { title: "Weight", data: [`${pokemonData.weight} kg`] },
            { title: "Height", data: [`${pokemonData.height} dm`] },
            { title: "Base Exp", data: [pokemonData.base_experience] },
            {
              title: "Stats",
              data: pokemonData.stats.map(
                (s) => `${getStatLabel(s.stat.name)}: ${s.base_stat}`
              ),
            },
          ].map(({ title, data }) => (
            <div key={title} className="bg-cyan-50 rounded-md p-4 shadow-md ">
              <h3 className="text-purple-600 font-semibold bg-purple-100 rounded-md py-1 px-2 mb-2">
                {title}
              </h3>
              <ul className=" list-inside font-mono list-none text-neutral-500 ">
                {" "}
                {data.map((item, index) => (
                  <li key={index} className="text-amber-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
