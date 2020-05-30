import axios from 'axios';

const baseUrl: string = 'https://pokeapi.co/api/v2/';

// endpoint Pokemon
const pokemons = axios.create({
  baseURL: `${baseUrl}pokemon`,
});

export const fetchPokemons = async () => {
  const response = await pokemons.get('');
  return response;
};