import React, { useState, useEffect } from "react";
import { getPokemonSpecies } from "../api/pokemonServices";
import apiConfig from "../api/apiConfig";
import { EvolutionData } from "../types";
import axios from "axios";
import { Link } from "react-router-dom";

interface EvolutionProps {
  id: number;
}

interface IEvelutionState {
  id: string;
  name: string;
}

const EvolutionCard = ({ id }: EvolutionProps) => {
  const [evolution, setEvolution] = useState<IEvelutionState[]>();

  useEffect(() => {
    const fetchEvolution = async () => {
      const speciesResponse = await getPokemonSpecies(id);
      const evolutionURL = speciesResponse.data.evolution_chain.url;
      const evolutionResponse = await axios.get(evolutionURL);
      const evolutionChain = evolutionResponse.data.chain;

      // Process the evolution chain to extract the required data
      const evolutions: EvolutionData["evolutions"] = [];
      let currentEvolution = evolutionChain;
      let evolutionCount = 0;

      while (currentEvolution && evolutionCount < 3) {
        const evolutionDetails = currentEvolution.species;
        evolutions.push({
          id: evolutionDetails.url.split("/")[6],
          name: evolutionDetails.name,
          // Add other required properties based on the response
        });

        currentEvolution = currentEvolution.evolves_to[0];
        evolutionCount++;
      }

      // const evolutionData: EvolutionData = {
      //   id: response.data.id,
      //   name: response.data.name,
      //   evolutions,
      // };

      setEvolution(evolutions);
    };

    fetchEvolution();
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {evolution?.map((e: any) => {
        return (
          <div key={e.id}>
            <Link to={`/pokemon/${e.name}`}>
              <div className="flex items-center bg-gradient-to-r from-ctp-pink to-ctp-lavender p-1 rounded-full">
                <div className="bg-white rounded-full">
                  <img
                    src={apiConfig.gifUrl(e.id)}
                    alt=""
                    className="h-20 scale-150"
                  />
                </div>
                <p className="text-xl px-7 capitalize">{e.name}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default EvolutionCard;
