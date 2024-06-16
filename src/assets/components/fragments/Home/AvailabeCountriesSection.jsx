import { logoGaris } from "../../../../../public/img/home/homeImages";
import { dataAvailableCountries } from "../../../services/home.services";
import CardAvaliableCountries from "./CardItems/CardAvaliableCountries";
import TitleSection from "./TitleItems/TitleSection";
import { TiArrowRight } from "react-icons/ti";


const AvailabeCountriesSection = () => {
  return (
    <section className="py-14">
      <div className="container max-w-5xl">
        <TitleSection
          icon={logoGaris}
          order="order-first"
          titleSection="Avaliable Countries"
          titleFirst="Urban Escapes City"
          titleSecond="Hopping Adventures"
        />
        <div className="relative grid grid-cols-4 gap-8">
          <div className="absolute right-0 flex px-4 py-3 rounded-full -top-20 bg-secondary">
            <button className="flex items-center justify-center gap-2 text-xs text-white"><span>View More</span><TiArrowRight /></button>
          </div>
          <CardAvaliableCountries countries={dataAvailableCountries} />
        </div>
      </div>
    </section>
  );
};

export default AvailabeCountriesSection;
