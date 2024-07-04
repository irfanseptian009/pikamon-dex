import React from "react";
import { useLocation } from "react-router-dom";
import CardResult from "./../components/CardResult";
import { IoIosHome } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./Header";

function SearchResult() {
  const location = useLocation();
  const pokemonData = location.state?.pokemon;

  return (
    <div className="search-result">
      <Header />
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 flex">
          <IoIosHome className="w-5 h-5" /> <p>Back Home</p>
        </button>
      </Link>
      {pokemonData ? (
        <CardResult pokemon={pokemonData} />
      ) : (
        <p>Tidak ada hasil pencarian atau masih loading.</p>
      )}
    </div>
  );
}

export default SearchResult;
