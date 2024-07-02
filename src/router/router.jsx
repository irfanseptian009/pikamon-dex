// router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import NotFound from "../pages/NotFound";
import SearchResult from "./../pages/SearchResult";
import Header from "./../pages/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
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
