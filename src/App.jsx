import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
