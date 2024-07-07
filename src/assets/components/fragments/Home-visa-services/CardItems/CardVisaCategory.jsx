import { MdArrowOutward } from "react-icons/md";

const CardVisaCategory = ({ categories }) => {
  return (
    <>
      {categories.map((data, index) => (
        <div key={index} className="grid grid-cols-2 p-5 border hover:border-secondary border-black/10 rounded-xl gap-x-10">
          <div className="col-span-1 bg-gray-400 rounded-xl max-h-[220px]">
            <img src="" alt="" />
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-primary mb-2.5">
              {data.title}
            </h2>
            <p className="mb-6 text-xs text-black/50">{data.description}</p>
            <div className="flex items-center justify-between">
              <button className="p-3 border border-secondary text-secondary rounded-xl">
                <MdArrowOutward />
              </button>
              <img src={data.icon} alt={data.title} className="w-8 h-8" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardVisaCategory;
