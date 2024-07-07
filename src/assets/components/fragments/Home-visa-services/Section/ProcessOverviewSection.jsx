import {
  imageProcessOverview,
} from "../../../../../../public/img/home/homeImages";
import { logoHijau } from "../../../../../../public/img/logo";
import { dataProcessOverview } from "../../../../services/homeVisa.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardProcessOverview from "../CardItems/CardProcessOverview";
import TitleSection from "../TitleItems/TitleSection";

const ProcessOverviewSection = () => {
  return (
    <SectionHomeLayouts styleSection="relative z-10 bg-white py-14">
        <TitleSection
          textAlign="text-center"
          order="order-last"
          justifyContentLogo="justify-center"
          icon={logoHijau}
          titleSection="Process Overview"
          titleFirst="Unforgettable Getaways"
          titleSecond="Escaping Routine"
          colorFirst="text-primary"
          colorSecond="text-primary"
        />
        <img
          src={imageProcessOverview.layerProcessOverview}
          alt="layer"
          className="absolute top-0 right-0 w-full h-full opacity-50 -z-10"
        />
        <div className="grid grid-cols-3 gap-6">
          <CardProcessOverview dataCard={dataProcessOverview} />
        </div>
    </SectionHomeLayouts>
  );
};

export default ProcessOverviewSection;
