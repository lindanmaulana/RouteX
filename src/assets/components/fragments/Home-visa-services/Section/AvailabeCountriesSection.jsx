
import { logoGarisKananHijau } from "../../../../../../public/img/logo";
import { dataAvailableCountries } from "../../../../services/homeVisa.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardAvaliableCountries from "../CardItems/CardAvaliableCountries";
import TitleSection from "../TitleItems/TitleSection";
import { TiArrowRight } from "react-icons/ti";

const AvailabeCountriesSection = () => {
  return (
    <SectionHomeLayouts>
      <TitleSection
        icon={logoGarisKananHijau}
        order="order-first"
        titleSection="Avaliable Countries"
        titleFirst="Urban Escapes City"
        titleSecond="Hopping Adventures"
      />
      <div className="relative grid grid-cols-4 gap-8">
        <div className="absolute right-0 flex px-4 py-3 rounded-full -top-20 bg-secondary">
          <button className="flex items-center justify-center gap-2 text-xs text-white">
            <span>View More</span>
            <TiArrowRight />
          </button>
        </div>
        <CardAvaliableCountries dataCard={dataAvailableCountries} />
        </div>
    </SectionHomeLayouts>
  );
};

export default AvailabeCountriesSection;
