import { MdCall } from "react-icons/md";
import Button from "../../../elements/Home/Button";

import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardWhyChooseUs from "../CardItems/CardWhyChooseUs";
import { dataWhyChooseUs } from "../../../../services/homeImmigration.services";
import { logoGarisKananHijau } from "../../../../../../public/img/logo";

const WhyChooseUsSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex">
        
        <div className="w-1/2 h-[400px] flex justify-start items-end ">
          <div className="w-[70%] relative border-4 h-[95%] rounded-xl border-secondary">
            <div className="absolute w-full h-full bg-gray-400 -right-8 -top-8 rounded-xl -z-10"></div>
            <div className="absolute flex items-center justify-center w-40 h-16 rounded-xl gap-x-2 bg-secondary bottom-20 -right-20">
              <h2 className="text-3xl font-semibold text-white">25</h2>
              <div>
                <p className="text-xs text-white font-extralight">Years Of</p>
                <p className="text-xs text-white font-extralight">experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <TitleSection
            marginBottom="mb-5"
            order="order-first"
            icon={logoGarisKananHijau}
            titleSection="Why Choose Us"
            colorTitleSection="text-primary"
            titleFirst="Experiencing Traditions"
            titleSecond="Cultural Immersion"
            colorFirst="text-black"
          />
          <div className="flex flex-col gap-3 mb-8">
            <CardWhyChooseUs dataCard={dataWhyChooseUs} />
          </div>

          <div className="flex gap-10">
            <Button borderColor="border-secondary" fontSize="text-sm">
              Read More
            </Button>
            <div className="flex items-center justify-center">
              <div className="p-3 mr-3 rounded-full bg-secondary">
                <MdCall className="text-white" />
              </div>
              <div>
                <h3 className="text-sm text-primary">Need help?</h3>
                <p className="text-base font-semibold text-primary">
                  (808) 555-0111
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default WhyChooseUsSection;
