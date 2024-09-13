import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import TextHeading from "../components/TextHeading";

const FavoritePage = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchFavoritePokemon = () => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const favorites: string[] = JSON.parse(storedFavorites);
        setPokemonList(favorites);
        setLoading(false);
        setError(false);
      } else {
        setPokemonList([]);
        setLoading(false);
        setError(false);
      }
    };

    fetchFavoritePokemon();
  }, []);

  return (
    <div className="relative max-w-screen min-h-screen">
      <Header />
      <div className="w-full px-3 md:px-10">
        <div className="text-center pt-[100px] pb-[50px] md:py-[50px]">
          <TextHeading text="My Pokedex" />
        </div>
      </div>
      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      {error && <div className="text-center text-ctp-red">Error...</div>}
      {!loading && !error && (
        <div className="w-full px-3 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemonList.length > 0 ? (
              pokemonList.map((pokemon: string) => (
                <PokemonCard name={pokemon} key={pokemon} />
              ))
            ) : (
              <div className="h-[50vh] w-full flex items-center justify-center">
                <p className="bg-gradient-to-r from-ctp-pink to-ctp-mauve text-transparent bg-clip-text text-2xl">
                  Pokedex empty
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
