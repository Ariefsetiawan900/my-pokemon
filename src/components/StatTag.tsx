interface StatTagProps {
  stat_name: string;
  base_stat: number;
}

interface Stats {
  [key: string]: string;
}

const StatTag = ({ stat_name, base_stat }: StatTagProps) => {
  const stats: Stats = {
    hp: "bg-gradient-to-r from-[#f12711] to-[#f5af19]",
    attack: "bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]",
    defense: "bg-gradient-to-r from-[#27ae60] to-[#2ecc71]",
    "special-attack": "bg-gradient-to-r from-[#fbc531] to-[#fde580]",
    "special-defense": "bg-gradient-to-r from-[#f5f5f5] to-[#f5f5f5]",
    speed: "bg-gradient-to-r from-[#7ed6df] to-[#e056fd]",
  };

  const statName = (stat_name: string) => {
    switch (stat_name) {
      case "hp":
        return "HP";
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SPA";
      case "special-defense":
        return "SPD";
      case "speed":
        return "SPD";
      default:
        return stat_name;
    }
  };

  return (
    <div className="inline-flex items-center flex-col dark:bg-zinc-900 p-1 rounded-full bg-gray-300">
      <span
        className={`w-[30px] h-[30px] flex items-center justify-center text-xs rounded-full text-white font-bold ${stats[stat_name]}`}
      >
        {statName(stat_name)}
      </span>
      <span className="inline-block dark:text-white py-2">{base_stat}</span>
    </div>
  );
};

export default StatTag;
