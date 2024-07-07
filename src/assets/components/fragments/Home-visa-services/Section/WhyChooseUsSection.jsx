import CardWhyChooseUs from "../CardItems/CardWhyChooseUs";
import TitleSection from "../TitleItems/TitleSection";
import { dataWhyChooseUs } from "../../../../services/homeVisa.services";
import Button from "../../../elements/Home/Button";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import { MdCall } from "react-icons/md";
import { logoHijau } from "../../../../../../public/img/logo";
const WhyChooseUsSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex flex-col-reverse gap-20 lg:flex-row">
        <div className="grid w-full grid-cols-2 grid-rows-4 gap-4 p-2 lg:w-2/5 justify-items-center">
          <div className="relative block w-full row-span-3 border rounded-2xl border-secondary">
            <div className="absolute block w-full h-full bg-gray-400 -top-2 -left-2 rounded-2xl"></div>
          </div>
          <div className="flex items-center justify-center row-span-1 px-4 bg-secondary rounded-xl">
            <h4 className="mr-5 text-2xl text-white">25</h4>
            <h2 className="text-xs text-white">Years Of experience</h2>
          </div>
          <div className="block w-full row-span-3 bg-gray-400 rounded-xl"></div>
          <div className="block w-24 h-24 row-span-1">
            <img
              src="/img/home/why-choose-us/imigration-agency.svg"
              alt="Imigration Agency"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <TitleSection
            marginBottom="mb-5"
            icon={logoHijau}
            order="order-last"
            titleSection="Why Choose Us"
            colorTitleSection="text-primary"
            titleFirst="Where Wanderlust Meets"
            titleSecond="Dream Destinations"
            colorFirst="text-black"
          />
          <p className="text-sm text-black/50 mb-9">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa Et purus duis sollicitudin dignissim
            habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
            duis sollicitudin dignissim habitant. Egestas nulla
          </p>

          <div className="grid grid-cols-2 mb-10 gap-7">
            {dataWhyChooseUs.map((data, index) => (
              <CardWhyChooseUs
                key={index}
                icon={data.icon}
                title={data.title}
                features={data.features}
              />
            ))}
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
