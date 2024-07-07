import { FaCheck } from "react-icons/fa";
const CardWhyChooseUs = ({ dataCard }) => {
  return (
    <>
      {dataCard?.map((data) => (
        <div key={data.id} className="flex items-start justify-start gap-x-5">
          <div className="">
            <FaCheck className="w-5 h-5 p-1.5 text-white rounded-full bg-primary mt-1.5"/>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg font-semibold text-primary">{data.title}</h2>
            <p className="pr-20 text-xs text-black/40">{data.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardWhyChooseUs;
