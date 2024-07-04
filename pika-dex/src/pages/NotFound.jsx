import React from "react";
import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl text-gray-700 mb-6 text-center">Page Not Found</h2>
        <MdCatchingPokemon className="h-24 w-80" />
        <h2 className="text-2xl text-gray-700 mb-6 text-center">Not Pokemon here dude</h2>
        <p className="text-gray-600 mb-8"></p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
