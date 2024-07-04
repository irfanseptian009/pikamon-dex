import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { MdOutlineCatchingPokemon } from "react-icons/md";

function PokemonCard({ pokemon, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  const handleDetailClick = () => {
    navigate(`/detail/${pokemon.name}`, { state: { pokemon } });
  };

  const handleFavoriteClick = () => {
    onToggleFavorite(pokemon);
  };

  return (
    <div
      className="card m-6 mx-auto p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-2"
      style={{
        background: "rgb(239, 239, 237)",
        width: "260px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0",
      }}
    >
      {!pokemonData ? (
        <div>Loading...</div>
      ) : (
        <>
          <p className="text-gray-600 mr-48">#{pokemonData.id}</p>
          <div className="w-full h-3/5 flex items-center justify-center -mt-11 ">
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemon.name}
              className="h-full"
            />
          </div>

          <div>
            <h2 className="text-lg text-center font-bold text-black-500">
              {pokemon.name}
            </h2>
            <hr
              style={{
                width: "100%",
                height: "3px",
                background: "#C1C1C1",
                borderRadius: "10px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "28px",
                justifyContent: "space-around",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              <p style={{ color: "rgb(90, 64, 145)", fontSize: "14px" }}>
                Width: {pokemonData.weight}
              </p>
              <p style={{ color: "rgb(170, 131, 87)", fontSize: "14px" }}>
                Height: {pokemonData.height}
              </p>
            </div>
            <div
              className="mt-2 flex items-center justify-center"
              style={{ gap: "10px" }}
            >
              <button
                onClick={handleDetailClick}
                className="button text-white font-semibold p-2.5 rounded-full bg-yellow-600"
              >
                <MdOutlineCatchingPokemon />
              </button>
              <button
                onClick={handleFavoriteClick}
                style={{
                  background: isFavorite ? "red" : "#EAE1FF",
                  borderRadius: "50%",
                  padding: "10px",
                }}
                className={`btnFav text-lg font-black py-2 px-4 rounded-md ${
                  isFavorite ? "text-white" : "text-purple-600"
                }`}
                disabled={!pokemonData}
              >
                {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
