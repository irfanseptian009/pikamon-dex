import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await pokeApi.get("pokemon", {
      params: { limit, offset },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Pokemon list: ${error.message}`);
  }
};

export const getPokemonByName = async (name) => {
  try {
    const response = await pokeApi.get(`pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Pokemon details for ${name}: ${error.message}`);
  }
};
