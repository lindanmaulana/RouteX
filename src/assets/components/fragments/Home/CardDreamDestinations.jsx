import { AiOutlineCheck } from "react-icons/ai";

const CardDreamDestinations = ({icon, title, features}) => {
  return (
    <div className="p-5 border border-black/10 rounded-2xl">
      <div className="flex items-center justify-center mb-5">
        <div className="p-2 mr-5 align-middle rounded-full bg-secondary">
          <img
            src={icon}
            alt={title}
            className="h-7 w-7"
          />
        </div>
        <h2 className="font-semibold align-middle text-primary ">
          {title}
        </h2>
      </div>
      <ul>
        {features.map((feature, index) => (
        <li key={index} className="flex items-center justify-start mb-2">
          <AiOutlineCheck className="mr-3 text-secondary" />
          <span className=" text-xs text-[#727272]">
           {feature}
          </span>
        </li>
    ))}
      </ul>
    </div>
  );
};

export default CardDreamDestinations;
