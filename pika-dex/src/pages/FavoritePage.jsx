import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FavoriteCard from "../components/FavoriteCard";
import { IoMdArrowBack } from "react-icons/io";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Add a search term state

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/favorites");
        setFavorites(res.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError("Terjadi kesalahan saat mengambil data Pokemon favorit.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleDeleteFavorite = async (deletedPokemon) => {
    try {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.name !== deletedPokemon.name)
      );

      const response = await axios.delete(
        `http://localhost:3000/favorites/${encodeURIComponent(deletedPokemon.name)}`
      );
    } catch (error) {
      console.error("Error deleting favorite:", error);
      setError("");

      fetchFavorites();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFavorites = favorites.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Link to="/">
        <button className="button text-white font-semibold py-2 px-2 rounded-md mb-3 flex items-center gap-2">
          <IoMdArrowBack className="w-5 h-5" /> <p> Back Home</p>
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-center mt-4">Favorite Pokemon</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search your favorite Pokemon..."
        className="w-full p-2 pl-10 mt-6 text-sm text-gray-700 mb-6"
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "10px",
        }}
      />

      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : filteredFavorites.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada Pokemon favorit yang sesuai dengan pencarian.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFavorites.map((pokemon) => (
            <FavoriteCard
              key={pokemon.id}
              pokemon={pokemon}
              onDeleteFavorite={handleDeleteFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
