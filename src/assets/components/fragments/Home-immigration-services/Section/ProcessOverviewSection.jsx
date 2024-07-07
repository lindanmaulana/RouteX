import {
  logoGarisKananHijau,
  logoGarisKiriHijau,
} from "../../../../../../public/img/logo";
import { dataProcessOverview } from "../../../../services/homeImmigration.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import CardProcessOverview from "../CardItems/CardProcessOverview";

const ProcessOverviewSection = () => {
  return (
    <SectionHomeLayouts styleSection="relative mx-10 bg-white rounded-3xl min-h-[640px] -z-20">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-400 rounded-3xl -z-10"></div>
      <TitleSection
        marginBottom="mb-14"
        icon={logoGarisKananHijau}
        isIconsKiri={true}
        iconSecond={logoGarisKiriHijau}
        textAlign="text-center"
        justifyContentLogo="justify-center"
        titleSection="Process Over view"
        titleFirst="Where Wanderlust Meets"
        titleSecond="Reality Destinations"
      />

      <div className="grid grid-cols-3 gap-10">
        <CardProcessOverview dataCard={dataProcessOverview} />
      </div>
    </SectionHomeLayouts>
  );
};

export default ProcessOverviewSection;
