const apiConfig = {
  // base url
  baseUrl: "https://pokeapi.co/api/v2/",
  // original image url
  imageUrl: (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  // original gif url
  gifUrl: (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
};

export default apiConfig;
