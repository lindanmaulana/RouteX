
import { logoHijau } from "../../../../../../public/img/logo";
import { dataOurCoaching } from "../../../../services/homeVisa.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardOurCoaching from "../CardItems/CardOurCoaching";
import TitleSection from "../TitleItems/TitleSection";

const OurCoachingSection = () => {
  return (
    <SectionHomeLayouts>
      <TitleSection
        icon={logoHijau}
        order="order-last"
        titleSection="Our Coaching"
        titleFirst="Exploring the Unknown"
        titleSecond="Voyages of Wonder"
        colorFirst="text-primary"
        colorSecond="text-primary"
      />
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col col-span-2 gap-y-6">
          <CardOurCoaching dataCard={dataOurCoaching} />
        </div>
        <div className="col-span-1 bg-gray-400 rounded-xl">
          {/* image atau box warna grey 400 */}
        </div>
      </div>
    </SectionHomeLayouts>
  );
};

export default OurCoachingSection;
