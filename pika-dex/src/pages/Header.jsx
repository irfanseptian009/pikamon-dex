import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import logo from "../assets/pokeball.png";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 


  return (
    <nav className="p-6 rounded-lg mb-5" style={{background:"rgb(90, 64, 145)"}}>
      {" "}
      {/* Gradient background */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          {" "}
          <img src={logo} alt="Pokeball" className="w-12 h-12 mr-2" />{" "}
          <Link to="/" className="text-white text-3xl font-extrabold">
            Pikadex
          </Link>
        </div>
        <div className="flex space-x-4">
          {" "}
          <Link
            to="/Favorites"
            className="buttonNav bg-white px-4 py-2 rounded-md"
            style={{color:"rgb(90, 64, 145)"}}
          >
            Favorite
          </Link>
          <Link
            to="/contact"
            className="buttonNav bg-white px-4 py-2 rounded-md text-blue-500 hover:bg-blue-700 hover:text-white transition duration-300"
            style={{color:"rgb(90, 64, 145)"}}
          >
            Contact
          </Link>
          <SearchBar onSearch={handleSearch} initialTerm={searchTerm} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
