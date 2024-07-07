
import TitleSection from "../TitleItems/TitleSection";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import PaginationOurCountries from "../CardItems/PaginationOurCountries";
import { useState } from "react";
import { logoPutih } from "../../../../../../public/img/logo";
const OurCountriesSection = () => {
  const [pages, setPages] = useState(1);
  const totalPages = 5;

  const handleClick = (params) => {
    if (params > 0 && params <= totalPages) {
      setPages(params);
    }
  };

  return (
    <section className="px-4 py-14 ">
      <div className="w-full bg-primary rounded-3xl">
        <div className="container max-w-5xl pt-20 pb-24 ">
          <TitleSection
            icon={logoPutih}
            order="order-last"
            titleSection="Our Countries"
            colorTitleSection="text-white"
            titleFirst="Making Memories Around"
            titleSecond="World Unforgettable"
            colorFirst="text-white"
            colorSecond="text-white"
          />
          <div className="relative flex gap-[30px]">
            <div className="absolute right-0 flex -top-20 gap-x-3">
              <button
                onClick={() => handleClick(pages - 1)}
                className="p-2 text-white border rounded-full hover:bg-secondary"
              >
                <TiArrowLeft />
              </button>
              <button
                onClick={() => handleClick(pages + 1)}
                className="p-2 text-white border rounded-full hover:bg-secondary"
              >
                <TiArrowRight />
              </button>
            </div>
            <PaginationOurCountries
              totalPages={totalPages}
              pages={pages}
              onChangePage={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCountriesSection;
