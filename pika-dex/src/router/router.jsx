// router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";
import Header from "../pages/Header";
import FavoritePage from "../pages/FavoritePage";

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
    element: (
      <>
        <Header />
        <PokemonDetail />
      </>
    )
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/result",
    element: <SearchResult />,
  },
  {
    path: "/favorites",
    element: <FavoritePage />,
  },
]);

export default router;
