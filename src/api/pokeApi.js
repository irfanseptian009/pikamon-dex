import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await pokeApi.get("pokemon", {
    params: { limit, offset },
  });
  return response.data;
};

export const getPokemonByName = async (name) => {
  const response = await pokeApi.get(`pokemon/${name}`);
  return response.data;
};
