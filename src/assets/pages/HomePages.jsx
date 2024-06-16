import HeaderPages from "./HeaderPages";
import FooterPages from "./FooterPages";
import HeroSection from "../components/fragments/Home/HeroSection";
import FeaturesSection from "../components/fragments/Home/FeaturesSection";

import WhyChooseUsSection from "../components/fragments/Home/WhyChooseUsSection";
import PartnershipSection from "../components/fragments/Home/PartnershipSection";

import OurCountriesSection from "../components/fragments/Home/OurCountriesSection";
import VisaCategorySection from "../components/fragments/Home/VisaCategorySection";
import AvailabeCountriesSection from "../components/fragments/Home/AvailabeCountriesSection";
import QuickOffersSection from "../components/fragments/Home/QuickOffersSection";
const HomePages = () => {
  return (
    <>
      <HeaderPages />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <PartnershipSection />
        <OurCountriesSection />
        <VisaCategorySection />
        <AvailabeCountriesSection />
        <QuickOffersSection />
      </main>
      <FooterPages />
    </>
  );
};

export default HomePages;
