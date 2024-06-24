
import { MdOutlineCalendarMonth, MdPerson } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
const CardRecentBlogs = ({ dataCard }) => {
  return (
    <>
      {dataCard
        ? dataCard.map((data, index) => (
            <div key={index} className="min-h-[500px] flex flex-col rounded-xl border border-black/10">
              <div className="bg-gray-400 h-[55%] rounded-t-xl"></div>
              <div className="px-6 pt-4 pb-10 h-[45%]">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="flex items-center justify-center text-xs text-primary">
                    <MdOutlineCalendarMonth /> {data.time.date}
                  </h4>
                  <h4 className="flex items-center justify-center text-xs text-primary">
                    <MdPerson /> {data.time.role}
                  </h4>
                </div>
                <h2 className="mb-3 text-lg font-semibold text-primary">{data.title}</h2>
                <p className="text-sm text-black/60 mb-7">{data.description}</p>
                <button className="flex items-center justify-center text-sm text-primary">Read More <TiArrowRight /></button>
              </div>
            </div>
          ))
        : "Not Found"}
    </>
  );
};

export default CardRecentBlogs;
