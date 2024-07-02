import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api/pokeApi";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const data = await getPokemonByName(searchTerm.toLowerCase());
      navigate(`/result`, { state: { pokemon: data } }); // Navigate dan kirim data Pokemon
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      navigate("/notfound");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Cari</button>
    </div>
  );
}

export default SearchBar;
