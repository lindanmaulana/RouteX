import { useState } from "react";
import { dataClientFeedback } from "../../../../services/homeImmigration.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import PaginationClientFeddback from "../CardItems/PaginationClientFeddback";

const ClientFeedbackSection = () => {
  const [pages, setPages] = useState(0);
  const totalPages = dataClientFeedback.length;

  const handlePages = (params) => {
    if (params >= 0 && params <= totalPages) {
      setPages(params);
    }
  };
  return (
    <SectionHomeLayouts>
      <div className="flex h-[500px] relative">
        <div className="w-3/5 bg-gray-400 rounded-xl"></div>
        <div className="flex w-2/5 ">
          <div className="flex absolute right-0 justify-center items-center self-center rounded-2xl w-[500px] px-10 h-[400px] bg-white ">
            <button
              onClick={() => handlePages(pages - 1)}
              className="absolute p-1 duration-300 border border-black rounded-full hover:bg-black transition-global bottom-5 right-10"
            ></button>
            <button
              onClick={() => handlePages(pages + 1)}
              className="absolute p-1 duration-300 border border-black rounded-full hover:bg-black transition-global bottom-5 right-6"
            ></button>
            
            <PaginationClientFeddback
              pages={pages}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default ClientFeedbackSection;
