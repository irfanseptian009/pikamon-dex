import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import router from "./router/router";
import bg from "./assets/bg.png";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="container mx-auto p-4">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
