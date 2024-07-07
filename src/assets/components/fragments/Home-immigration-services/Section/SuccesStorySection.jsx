import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import { logoGarisKananPutih } from "../../../../../../public/img/logo";
import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import CardSuccesStory from "../CardItems/CardSuccesStory";
import { dataSuccesStory } from "../../../../services/homeImmigration.services";
import { imageSuccesStory } from "../../../../../../public/img/home-immigration/homeImmigration";

const SuccesStorySection = () => {
  return (
    <SectionHomeLayouts>
      <div className="relative flex p-10 -mt-44 bg-secondary rounded-xl">
        <img src={imageSuccesStory.layerSucces} alt="Layer" className="absolute top-0 right-0 w-full h-full opacity-50" />
        <div className="w-1/2 pr-20">
          <TitleSection
            marginBottom="mb-4"
            icon={logoGarisKananPutih}
            colorTitleSection="text-white"
            titleSection="Succes Story"
            titleFirst="Experiencing"
            titleSecond="Traditions and Customs"
            colorFirst="text-white"
            colorSecond="text-white"
          />
          <p className="pr-10 text-xs text-white">
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
            has been the industrys standardever
          </p>
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-5">
          <CardSuccesStory dataCard={dataSuccesStory} />
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default SuccesStorySection;
