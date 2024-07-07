import { logoGarisKananHijau } from "../../../../../../public/img/logo";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import { IoIosArrowUp } from "react-icons/io";
import CardAskQuestion from "../CardItems/CardAskQuestion";
import { dataAskQuestion } from "../../../../services/homeImmigration.services";
import { imageVisaCategories } from "../../../../../../public/img/home/homeImages";

const AskQuestionSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex gap-x-14">
        <div className="grid w-1/2 grid-cols-2 grid-rows-3 gap-7">
          <div className="col-span-1 row-span-2 bg-gray-400 rounded-2xl"></div>
          <div className="col-span-1 row-span-1 bg-gray-400 rounded-2xl"></div>
          <div className="col-span-1 row-span-2 bg-gray-400 rounded-2xl"></div>
          <div className="col-span-1 row-span-1 rounded-2xl">
            <div className="flex items-center justify-center p-4 bg-white border-2 gap-x-5 rounded-2xl border-secondary">
              <div className="flex rounded-full bg-secondary">
                <img src={imageVisaCategories.touristVisa} alt="Daily Activity" className="w-10 h-10 p-2" />
              </div>
              <div>
                <h2 className="mb-2 text-base font-medium text-primary">
                  Daily Activity
                </h2>
                <p className="text-sm text-black/50">Lorem is spam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <TitleSection
            icon={logoGarisKananHijau}
            marginBottom="mb-10"
            order="order-first"
            titleSection="Ask Question"
            titleFirst="Wanderlust Chronicles"
            titleSecond="Tales from Around"
          />
          <div className="relative p-6 border border-black/20 rounded-xl mb-7">
            <h2 className="font-semibold text-primary mb-2.5">
              What Services do you offer?
            </h2>
            <p className="pr-10 text-sm leading-6 text-black/50">
              Lorem Ipsum is simply dummy text the printing and typese Lorem
              Ipsum has been the industrys standard dummy text ever
            </p>
            <button className="absolute p-2 rounded-full top-5 right-5 bg-secondary">
              <IoIosArrowUp className="text-white" />
            </button>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <CardAskQuestion dataCard={dataAskQuestion} />
          </div>
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default AskQuestionSection;
