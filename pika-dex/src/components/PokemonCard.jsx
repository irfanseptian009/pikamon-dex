import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PokemonCard({ pokemon, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(pokemon.sprites?.front_default); // Initialize from sprites
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (!imageUrl) {
          // If no imageUrl yet, fetch it
          const response = await fetch(pokemon.url);
          const data = await response.json();
          setImageUrl(data.sprites.front_default);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error fetching image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [pokemon.url, imageUrl]);

  const handleDetailClick = () => {
    navigate(`/detail/${pokemon.name}`, { state: { pokemon } });
  };

  const handleFavoriteClick = async () => {
    try {
      onToggleFavorite(pokemon);

      if (isFavorite) {
        await axios.delete(`http://localhost:3000/favorites/${pokemon.name}`);
      } else {
        await axios.post("http://localhost:3000/favorites", pokemon);
      }
    } catch (error) {
      console.error("Error handling favorite:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      {isLoading ? ( // Loading indicator
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
      ) : isError ? ( // Error message
        <div className="text-red-500">Error loading image</div>
      ) : (
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-48 h-48 object-contain mb-2"
        />
      )}

      <div>
        <h3 className="text-lg font-medium text-center">{pokemon.name}</h3>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={handleDetailClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Details
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`hover:opacity-80 text-white font-bold py-2 px-4 rounded-md ${
              isFavorite ? "bg-red-500" : "bg-green-500"
            }`}
            disabled={isLoading}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
