import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";

const ClientFeedbackSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex h-[445px] gap-6">
          <div className="w-5/12 bg-gray-400 rounded-xl"></div>
          <div className="w-7/12 px-10 pb-10 bg-secondary rounded-xl pt-14">
            <p className="text-6xl text-white">❝</p>
            <p className="mb-5 text-xl text-white ">
              We have been operating for over an providin top-notch services to
              our clients and build strong track record in the industry.We have
              been operating for over a decad providi ina top-notch We have been
              operating
            </p>

            <div className="flex h-12 gap-5 mb-12">
              <div className="w-12 h-full bg-gray-400 rounded-full"></div>
              <div>
                <h2 className="text-base font-medium text-white">
                  Albert FLores
                </h2>
                <p className="text-xs text-white">Web Designer</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10/12 h-[1px] bg-white"></div>
              <div className="flex w-2/12 -top-20 gap-x-3">
                <button
                  onClick
                  className="p-3 bg-white border rounded-full hover:text-white hover:bg-primary border-black/20 text-primary"
                >
                  <TiArrowLeft />
                </button>
                <button
                  onClick
                  className="p-3 bg-white border rounded-full hover:text-white hover:bg-primary border-black/20 text-primary"
                >
                  <TiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
    </SectionHomeLayouts>
  );
};

export default ClientFeedbackSection;
