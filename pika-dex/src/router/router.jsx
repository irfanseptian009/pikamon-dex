import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";
import Header from "../pages/Header";
import FavoritePage from "../pages/FavoritePage";
import Contact from "./../pages/Contact";
import Footer from "./../pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <PokemonList />
        <Footer />
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
    ),
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
    element: (
      <>
        <Header />
        <FavoritePage />
      </>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
