import { MdArrowOutward } from "react-icons/md";

const CardSupportingCoaching = ({ dataCard }) => {
  return (
    <>
      {dataCard ? dataCard.map((data) => (
        <div
          key={data.id}
          className="relative w-[330px] h-[323px] bg-gray-400 rounded-xl "
        >
          <div className="absolute right-0 flex w-11/12 px-10 py-6 bg-white rounded-xl -bottom-10">
            <div>
              <h2 className="text-lg font-semibold text-primary">
                {data.title}
              </h2>
              <p className="text-sm text-black/40">{data.description}</p>
            </div>
            <button className={`self-center w-10 h-10 p-3 border border-secondary hover:text-white hover:bg-secondary rounded-xl text-primary`}>
              <MdArrowOutward />
            </button>
          </div>
        </div>
      )): "Not Found"}
    </>
  );
};

export default CardSupportingCoaching;
