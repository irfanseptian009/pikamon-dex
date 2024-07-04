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

        <footer
          className=" rounded-lg  m-4"
          style={{ background: "rgb(90, 64, 145)", marginTop: "40px" }}
        >
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span
              className="block text-sm text-white-500 sm:text-center"
              style={{ color: "white" }}
            >
              © 2024 Pikadex™. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
