
import TitleSection from "../TitleItems/TitleSection";
import CardVisaCategory from "../CardItems/CardVisaCategory";
import { dataVisaCategory } from "../../../../services/homeVisa.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import { logoHijau } from "../../../../../../public/img/logo";

const VisaCategorySection = () => {
  return (
    <SectionHomeLayouts>
      <TitleSection
        textAlign="text-center"
        justifyContentLogo="justify-center"
        icon={logoHijau}
        order="order-last"
        titleSection="Visa Category"
        titleFirst="Seeking Adventure Thrills"
        titleSecond="and Excitement Await"
        colorFirst="text-primary"
        colorSecond="text-primary"
      />
      <div className="grid grid-cols-2 gap-8">
        <CardVisaCategory categories={dataVisaCategory} />
      </div>
    </SectionHomeLayouts>
  );
};

export default VisaCategorySection;
