
import { logoGarisKananHijau, logoGarisKiriHijau } from "../../../../../../public/img/logo";
import { dataCoachingSupport } from "../../../../services/homeImmigration.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import CardCoachingSupport from "../CardItems/CardCoachingSupport";

const CoachingSupportSection = () => {
  return (
    <SectionHomeLayouts styleSection="bg-white mx-10 rounded-3xl">
      <TitleSection
        marginBottom="mb-14"
        textAlign="text-center"
        justifyContentLogo="justify-center"
        isIconsKiri={true}
        iconSecond={logoGarisKiriHijau}
        icon={logoGarisKananHijau}
        titleSection="Coaching Support"
        colorTitleSection="text-primary"
        titleFirst="Nature's Playground"
        titleSecond="Exploring the Great"
        colorFirst="text-black"
      />
      <div className="grid grid-cols-3 grid-rows-2 gap-7">
        <CardCoachingSupport dataCard={dataCoachingSupport} />
      </div>
    </SectionHomeLayouts>
  );
};

export default CoachingSupportSection;
