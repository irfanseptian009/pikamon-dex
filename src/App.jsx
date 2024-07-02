import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Header from "./pages/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import router from "./router/router";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Pikadex</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
