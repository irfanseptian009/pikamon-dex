// router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import NotFound from "../pages/NotFound";
import SearchBar from "../components/SearchBar";
import SearchResult from "./../pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SearchBar />
        <PokemonList />
      </>
    ),
  },
  {
    path: "/detail/:pokemonName",
    element: <PokemonDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/result",
    element: <SearchResult />,
  },
]);

export default router;
