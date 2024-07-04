import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api/pokeApi.js";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const data = await getPokemonByName(searchTerm.toLowerCase());
      navigate(`/result`, { state: { pokemon: data } });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      navigate("/notfound");
    }
  };

  return (
    <div className="relative">
      {" "}
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="button absolute top-1.5 right-2 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 "
        style={{background:"rgb(90, 64, 145)", color:"white", borderRadius:"50%", padding:"0.5rem"}}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
