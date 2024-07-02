import React from "react";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pikadex</h1>
      <SearchBar />
      <RouterProvider router={router} />
      <PokemonList />
    </div>
  );
}

export default App;
