import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { PokemonList } from "../types";
import { getPokemonList } from "../api/pokemonServices";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import { BiSearchAlt } from "react-icons/bi";
import { debounce } from "lodash";
import TextHeading from "../components/TextHeading";

const HomePage: React.FC = () => {
  const limit = 20;
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [search, setSearch] = useState<string>("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [pokemonList]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 500),
    []
  );

  const fetchPokemonList = useCallback(
    async (limit: number, offset: number) => {
      try {
        setLoading(true);
        setError(false);

        const response = await getPokemonList(limit, offset);
        setPokemonList(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    []
  );

  const fetchFilteredPokemonList = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await getPokemonList(1281, 0);
      const filteredPokemon = response.data.results.filter((pokemon) =>
        pokemon.name.includes(search.toLowerCase())
      );

      filteredPokemon.length = 20;

      setPokemonList(filteredPokemon);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchPokemonList(limit, offset);
  }, [offset, limit, fetchPokemonList]);

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  useEffect(() => {
    if (search !== "") {
      fetchFilteredPokemonList();
    } else {
      fetchPokemonList(limit, offset);
    }
  }, [search, fetchFilteredPokemonList, fetchPokemonList, limit, offset]);

  const handleNextClick = () => {
    setOffset((prevOffset: number) => prevOffset + limit);
  };

  const handlePrevClick = () => {
    if (offset === 0) return;
    setOffset((prevOffset: number) => prevOffset - limit);
  };

  return (
    <div className="w-full px-3 md:px-10">
      <div className="text-center pt-[100px] md:py-[50px]">
        <TextHeading text="PokéDex!" />
      </div>
      <div className="flex items-center justify-end gap-3 my-5">
        <input
          type="text"
          className="h-10 px-4 rounded-lg bg-gradient-to-r from-ctp-mantle to-ctp-crust border-none outline-none text-ctp-rust dark:text-white md:max-w-[400px] flex-1"
          placeholder="Search pokemon..."
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          ref={inputRef}
        />
        <button className="bg-gradient-to-r from-ctp-pink to-ctp-mauve w-10 h-10 text-xl text-white flex items-center justify-center rounded-lg">
          <BiSearchAlt />
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center h-[300px]">
          <Loading />
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center h-[300px]">
          <p className="text-2xl text-ctp-rust dark:text-white">
            Something went wrong!
          </p>
        </div>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name}>
              <PokemonCard name={pokemon.name} />
            </div>
          ))}
        </div>
      )}
      <div className="py-10 text-xl flex items-center gap-5">
        <button
          className="rounded-md text-white px-4 py-2 bg-gradient-to-r from-ctp-pink to-ctp-mauve hover:from-ctp-mauve hover:to-ctp-pink transition-all hover:ease-in-out hover:duration-300"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          className="rounded-md text-white px-4 py-2 bg-gradient-to-r from-ctp-green to-ctp-teal hover:from-ctp-teal hover:to-ctp-green transition-all hover:ease-in-out hover:duration-300"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
