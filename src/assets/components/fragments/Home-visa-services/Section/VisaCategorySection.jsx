import { logoHijau } from "../../../../../../public/img/home/homeImages";
import TitleSection from "../TitleItems/TitleSection";
import CardVisaCategory from "../CardItems/CardVisaCategory";
import { dataVisaCategory } from "../../../../services/home.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";

const VisaCategorySection = () => {
  return (
    <SectionHomeLayouts>
      <TitleSection
        textAlign="text-center"
        justifyContentLogo="justify-center"
        icon={logoHijau}
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
