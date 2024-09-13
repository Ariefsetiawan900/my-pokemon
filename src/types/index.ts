export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonList[];
}

export interface EvolutionData {
  id: number;
  name: string;
  evolutions: {
    id: number;
    name: string;
    // Add other required properties
  }[];
}
