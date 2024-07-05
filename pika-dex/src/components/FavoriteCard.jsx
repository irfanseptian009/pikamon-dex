import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { SiPokemon } from "react-icons/si";

function FavoriteCard({ pokemon, onDeleteFavorite }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Navigate to Detail Page
  const handleDetailClick = () => {
    navigate(`/detail/${pokemon.name}`, { state: { pokemon } });
  };

  const handleDeleteClick = async () => {
    if (window.confirm(`Hapus ${pokemon.name} dari daftar favorit?`)) {
      onDeleteFavorite(pokemon);
      try {
        await axios.delete(`http://localhost:3000/favorites/${pokemon.id}`);
      } catch (error) {
        console.error("Error deleting favorite:", error);
      }
    }
  };

  useEffect(() => {
    if (pokemon?.sprites) {
      setIsLoading(false);
    } else {
      setIsError(true);
    }
  }, [pokemon]);

  return (
    <div
      className="card m-6 mx-auto p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-2"
      style={{
        background: "rgb(239, 239, 237)",
        width: "260px",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0",
      }}
    >
      <SiPokemon className="h-28 w-28 text-blue-900" />
      {isLoading ? (
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
      ) : isError ? (
        <div className="text-red-500">Gambar tidak ditemukan</div>
      ) : (
        <div className="w-full h-3/5 flex items-center justify-center">
          <img src={pokemon.sprites} alt={pokemon.name} className="h-full" />
        </div>
      )}

      <div>
        <h2 className="text-lg text-center font-bold text-black-500">{pokemon.name}</h2>

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

        <div className="mt-2 flex items-center justify-center" style={{ gap: "10px" }}>
          <button
            onClick={handleDetailClick}
            className="button text-white font-semibold p-2.5 rounded-full bg-yellow-600"
          >
            <MdOutlineCatchingPokemon />
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
            style={{ borderRadius: "50%", padding: "10px" }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
