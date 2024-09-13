interface typeProps {
  type: string;
}

interface Types {
  [key: string]: string;
}

const TypeTag = ({ type }: typeProps) => {
  const types: Types = {
    fire: "bg-gradient-to-r from-[#f12711] to-[#f5af19]",
    water: "bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]",
    grass: "bg-gradient-to-r from-[#27ae60] to-[#2ecc71]",
    electric: "bg-gradient-to-r from-[#fbc531] to-[#fde580]",
    normal: "bg-gradient-to-r from-[#f5f5f5] to-[#f5f5f5]",
    ice: "bg-gradient-to-r from-[#7ed6df] to-[#e056fd]",
    fighting: "bg-gradient-to-r from-[#eb4d4b] to-[#ff7979]",
    poison: "bg-gradient-to-r from-[#6ab04c] to-[#badc58]",
    ground: "bg-gradient-to-r from-[#f7b731] to-[#f8c471]",
    flying: "bg-gradient-to-r from-[#7ed6df] to-[#e056fd]",
    psychic: "bg-gradient-to-r from-[#e056fd] to-[#686de0]",
    bug: "bg-gradient-to-r from-[#badc58] to-[#6ab04c]",
    rock: "bg-gradient-to-r from-[#f8c471] to-[#f7b731]",
    ghost: "bg-gradient-to-r from-[#686de0] to-[#30336b]",
    dark: "bg-gradient-to-r from-[#30336b] to-[#130f40]",
    dragon: "bg-gradient-to-r from-[#686de0] to-[#30336b]",
    steel: "bg-gradient-to-r from-[#f8c471] to-[#f7b731]",
    fairy: "bg-gradient-to-r from-[#badc58] to-[#6ab04c]",
  };

  return (
    <div className="bg-gray-300 dark:bg-zinc-600 flex items-center rounded-full p-1">
      <div
        className={`w-4 h-4 rounded-full inline-block ${types[type]}`}
      ></div>
      <span className="leading-none capitalize dark:text-white text-sm font-bold px-2">
        {type}
      </span>
    </div>
  );
};

export default TypeTag;
