import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function FavoriteCard({ pokemon, onDeleteFavorite }) {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(pokemon.sprites?.front_default);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                if (!imageUrl) {
                    const response = await fetch(pokemon.url);
                    const data = await response.json();
                    setImageUrl(data.sprites.front_default);
                }
            } catch (error) {
                setIsError(true);
                console.error("Error fetching image:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImage();
    }, [pokemon.url, imageUrl]);

    const handleDetailClick = () => {
        navigate(`/detail/${pokemon.name}`, { state: { pokemon } });
    };

    const handleDeleteClick = async () => {
        if (window.confirm(`Hapus ${pokemon.name} dari daftar favorit?`)) {
            onDeleteFavorite(pokemon);
            try {
                await axios.delete(
                    `http://localhost:3000/favorites/${pokemon.id}`
                );
            } catch (error) {
                console.error("Error deleting favorite:", error);
            }
        }
    };

    return (
        <div
            className="card m-6 mx-auto p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-2"
            style={{
                background: "rgb(239, 239, 237)",
                width: "260px",
                boxShadow:
                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0",
            }}
        >
            {isLoading ? (
                <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
            ) : isError ? (
                <div className="text-red-500">Error loading image</div>
            ) : (
                <div className="w-full h-3/5 flex items-center justify-center">
                    <img src={imageUrl} alt={pokemon.name} className="h-full" />
                </div>
            )}

            <div>
                
                <h2 className="text-lg text-center font-bold text-black-500">
                    {pokemon.name}
                </h2>
                <hr
                    style={{
                        width: "100%",
                        height: "3px",
                        background: "#C1C1C1",
                        borderRadius: "10px",
                        marginTop: "8px",
                        marginBottom: "8px",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        gap: "28px",
                        justifyContent: "space-around",
                        // textAlign: "center",
                        marginTop: "16px",
                        marginBottom: "16px",
                    }}
                >
                    <p style={{ color: "rgb(90, 64, 145)", fontSize: "14px" }}>
                        Width: 100
                    </p>
                    <p style={{ color: "rgb(170, 131, 87)", fontSize: "14px" }}>
                        Height: 100
                    </p>
                </div>

                <div
                    className="mt-2 flex items-center justify-center"
                    style={{ gap: "10px" }}
                >
                    <button
                        onClick={handleDetailClick}
                        className="button text-white font-semibold p-2.5 rounded-full bg-yellow-600"
                    >
                        <MdOutlineCatchingPokemon />
                    </button>
                    <button
                        onClick={handleDeleteClick}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        style={{
                          borderRadius: "50%",
                          padding: "10px",
                        }}
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FavoriteCard;
