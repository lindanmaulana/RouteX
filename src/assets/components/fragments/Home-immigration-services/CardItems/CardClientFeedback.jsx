
import { FaQuoteLeft } from "react-icons/fa6";

const CardClientFeedback = ({ dataCard, pages }) => {
    
  return (
    <>
      {dataCard[pages] ? (
        <div
          className={`flex w-full h-full flex-col justify-between items-start`}
        >
          <h4 className="mb-2 text-5xl text-secondary">
            <FaQuoteLeft />
          </h4>
          <p className="text-xl leading-7 text-gray-500 mb-7">
            {dataCard[pages].comment}
          </p>
          <div className="flex items-center justify-start gap-x-3.5">
            <div className="w-5 h-5 p-5 bg-gray-400 rounded-full"></div>
            <div>
              <h2 className="text-base font-semibold text-primary">
                {dataCard[pages].name}
              </h2>
              <p className="text-xs text-black/50">{dataCard[pages].role}</p>
            </div>
          </div>
        </div>
      ) : (
        "Not Found"
      )}
    </>
  );
};

export default CardClientFeedback;
