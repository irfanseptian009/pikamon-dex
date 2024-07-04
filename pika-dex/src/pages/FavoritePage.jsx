import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FavoriteCard from "../components/FavoriteCard";
import { IoIosHome } from "react-icons/io";

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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 flex">
          <IoIosHome className="w-5 h-5" /> <p>Back Home</p>
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-4">Pokemon Favorit</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Cari Pokemon favorit..."
        className="w-full p-2 pl-10 text-sm text-gray-700"
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
