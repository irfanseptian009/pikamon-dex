import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api/pokeApi.js";

function PokemonDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const pokemonName =
        location.state?.pokemon.name || location.pathname.split("/")[2];
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await getPokemonByName(pokemonName.toLowerCase());
                setPokemonData(data);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
                setError(error.message || "An error occurred.");
            } finally {
                setIsLoading(false);
            }
        };

        if (pokemonName) {
            fetchPokemonData();
        } else {
            navigate("/");
        }
    }, [pokemonName, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div
            className="rounded-3xl shadow-2xl p-16 text-center flex justify-space-x-2 m-16 gap-16"
            style={{
                background: "rgb(239, 239, 237)",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                    className="w-52 h-52 mx-auto"
                    style={{
                        border: "1px dashed rgb(90, 64, 145)",
                        borderRadius: "10px",
                    }}
                />
                <h2
                    className="text-3xl font-bold text-center mb-4"
                    style={{ color: "rgb(90, 64, 145)" }}
                >
                    {pokemonData.name}
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <div
                    style={{
                        background: "white",
                        borderRadius: "10px",
                        padding: "24px",
                        width: "160px",
                        height: "160px",
                    }}
                >
                    <h2
                        style={{
                            backgroundColor: "rgb(90, 64, 145)",
                            borderRadius: "8px",
                            padding: "4px",
                            color: "white",
                            marginBottom: "8px",
                        }}
                        className="font-semibold"
                    >
                        Type
                    </h2>
                    <ul style={{marginTop:"18px"}}>
                        {pokemonData.types.map((type) => (
                            <li style={{color:"rgb(170, 131, 87)", fontWeight:"600", border:"1px dashed rgb(170, 131, 87)", padding:"4px"}} key={type.type.name}>{type.type.name}</li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{
                        background: "white",
                        borderRadius: "10px",
                        padding: "24px",
                        width: "160px",
                        height: "auto",
                    }}
                >
                    <h2
                        style={{
                            backgroundColor: "rgb(90, 64, 145)",
                            borderRadius: "8px",
                            padding: "4px",
                            color: "white",
                            marginBottom: "8px",
                        }}
                        className="font-semibold"
                    >
                        Abilities
                    </h2>
                    <ul style={{marginTop:"18px"}}>
                        {pokemonData.abilities.map((ability) => (
                            <li style={{color:"rgb(170, 131, 87)", fontWeight:"600", border:"1px dashed rgb(170, 131, 87)", padding:"4px"}} key={ability.ability.name}>
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{
                        background: "white",
                        borderRadius: "10px",
                        padding: "24px",
                        width: "160px",
                        height: "160px",
                    }}
                >
                    <h2
                        style={{
                            backgroundColor: "rgb(90, 64, 145)",
                            borderRadius: "8px",
                            padding: "4px",
                            color: "white",
                            marginBottom: "8px",
                        }}
                        className="font-semibold"
                    >
                        Weight
                    </h2>
                    <ul style={{marginTop:"18px"}}>
                        {pokemonData.abilities.map((ability) => (
                            <li style={{color:"rgb(170, 131, 87)", fontWeight:"600", border:"1px dashed rgb(170, 131, 87)", padding:"4px"}} key={ability.ability.name}>
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{
                        background: "white",
                        borderRadius: "10px",
                        padding: "24px",
                        width: "160px",
                        height: "160px",
                    }}
                >
                    <h2
                        style={{
                            backgroundColor: "rgb(90, 64, 145)",
                            borderRadius: "8px",
                            padding: "4px",
                            color: "white",
                            marginBottom: "8px",
                        }}
                        className="font-semibold"
                    >
                        Height
                    </h2>
                    <ul style={{marginTop:"18px"}}>
                        {pokemonData.abilities.map((ability) => (
                            <li style={{color:"rgb(170, 131, 87)", fontWeight:"600", border:"1px dashed rgb(170, 131, 87)", padding:"4px"}} key={ability.ability.name}>
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;
