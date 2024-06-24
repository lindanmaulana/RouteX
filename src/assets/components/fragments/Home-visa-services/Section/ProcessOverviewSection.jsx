import {
  imageProcessOverview,
  logoHijau,
} from "../../../../../../public/img/home/homeImages";
import { dataProcessOverview } from "../../../../services/home.services";
import CardProcessOverview from "../CardItems/CardProcessOverview";
import TitleSection from "../TitleItems/TitleSection";

const ProcessOverviewSection = () => {
  return (
    <section className="relative z-10 bg-white py-14">
      <div className="container max-w-5xl">
        <TitleSection
          textAlign="text-center"
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
      </div>
    </section>
  );
};

export default ProcessOverviewSection;
