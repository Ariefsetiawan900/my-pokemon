import { PokemonListResponse } from "../types";
import axiosConfig from "./axiosConfig";

const getPokemonList = async (limit: number, offset: number) => {
  const response = await axiosConfig.get<PokemonListResponse>(
    `pokemon?limit=${limit}&offset=${offset}`
  );
  return response;
};

const getPokemon = async (url: string) => {
  const response = await axiosConfig.get(url);
  return response;
};

const getPokemonByName = async (name: string) => {
  const response = await axiosConfig.get(`pokemon/${name}`);
  return response;
};

const getPokemonSpecies = async (id: number) => {
  const response = await axiosConfig.get(`pokemon-species/${id}`);
  return response;
};

const getEvolutions = async (id: number) => {
  const response = await axiosConfig.get(`evolution-chain/${id}`);
  return response;
};

export {
  getPokemonList,
  getPokemon,
  getPokemonByName,
  getEvolutions,
  getPokemonSpecies,
};
