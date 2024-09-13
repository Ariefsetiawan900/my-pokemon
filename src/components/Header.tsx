import { Link, NavLink } from "react-router-dom";

import { MdOutlineCatchingPokemon } from "react-icons/md";
import PokeBallPic from "/public/Poké_Ball_icon.png";

const Header = () => {
  return (
    <div className="fixed left-1/2 md:left-14 top-5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
      <div className="flex justify-between items-center md:flex-col gap-5 md:gap-10">
        <div className="w-16 h-16 p-2 rounded-xl bg-ctp-overlay0/50">
          <Link to="/">
            <img src={PokeBallPic} alt="pokemon_ball" className="" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6 md:flex-col bg-ctp-overlay0/50 md:w-16 p-4 h-16 md:h-[50vh] rounded-xl">
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              isActive
                ? "text-3xl text-ctp-yellow hover:text-yellow-400 transition-all ease-in-out duration-300"
                : "text-3xl text-ctp-yellow hover:text-yellow-400 transition-all ease-in-out duration-300"
            }
          >
            <MdOutlineCatchingPokemon size={50} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
