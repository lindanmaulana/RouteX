import { MdArrowOutward } from "react-icons/md";

const CardCoachingSupport = ({ dataCard }) => {
  return (
    <>
      {dataCard?.map((data) => (
        <div key={data.id} className="flex gap-x-4">
          <div className="bg-gray-400 rounded-l-2xl h-[160px] w-1/3">

          </div>
          <div className="flex flex-col items-start justify-center w-2/3">
            <h2 className="mb-4 text-base font-semibold text-primary">{data.title}</h2>
            <p className="text-sm font-light text-black/60 mb-7">{data.description}</p>
            <button className="flex items-center justify-center text-sm text-secondary gap-x-4">Read More <MdArrowOutward /></button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardCoachingSupport;
