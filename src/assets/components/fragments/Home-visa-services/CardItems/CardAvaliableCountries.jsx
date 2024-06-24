import { AiOutlineCheck } from "react-icons/ai";

const CardAvaliableCountries = ({ countries }) => {
  return (
    <>
      {countries
        ? countries.map((data, index) => (
            <div key={index} className="px-8 py-10 border border-black/10 rounded-xl">
              <div className="block w-5 h-5 p-5 mb-5 bg-gray-400 border rounded-full border-secondary"></div>
              <h2 className="mb-5 text-lg font-semibold text-primary">{data.countries}</h2>
              <div className="grid gap-2">
              <p className="flex items-center justify-start gap-2">
                <AiOutlineCheck className="text-xs text-primary" />
                <span className="text-xs text-primary">{data.services.pertama}</span>
              </p>
              <p className="flex items-center justify-start gap-2">
                <AiOutlineCheck className="text-xs text-primary" />
                <span className="text-xs text-primary">{data.services.kedua}</span>
              </p>
              <p className="flex items-center justify-start gap-2">
                <AiOutlineCheck className="text-xs text-primary" />
                <span className="text-xs text-primary">{data.services.ketiga}</span>
              </p>
              </div>
            </div>
          ))
        : "not found"}
    </>
  );
};

export default CardAvaliableCountries;
