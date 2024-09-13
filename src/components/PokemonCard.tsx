import { useState, useEffect } from "react";
import { getPokemonByName } from "../api/pokemonServices";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  name: string;
}

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string | undefined;
  };
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    try {
      const fetchPokemon = async () => {
        const response = await getPokemonByName(name);
        setPokemon(response.data);
      };

      fetchPokemon();
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  return (
    <>
      <Link to={`/pokemon/${name}`}>
        <div className="text-black rounded-xl bg-gradient-to-b from-ctp-mantle to-ctp-crust group hover:-translate-y-3 hover:ease-in-out hover:duration-300 ">
          <div className="flex items-center justify-center">
            <img
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
              className="w-[150px] group-hover:scale-[1.8] transition-all ease-in-out duration-300"
            />
          </div>
          <div
            className="flex items-center justify-between p-3 bg-gradient-to-r from-ctp-pink to-ctp-mauve rounded-b-xl
        group-hover:from-ctp-mauve group-hover:to-ctp-pink transition-all ease-in-out duration-300
      "
          >
            <div className="font-semibold text-lg">{pokemon?.name}</div>
            <div className="">{`#${pokemon?.id}`}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
