import HeaderPages from "./HeaderPages";
import FooterPages from "./FooterPages";
import HeroSection from "./Home/HeroSection";
import FeaturesSection from "./Home/FeaturesSection";

import DreamDestinations from "./Home/DreamDestinations";
import PartnershipSection from "./Home/PartnershipSection";

const HomePages = () => {
  return (
    <>
      <HeaderPages />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DreamDestinations />
        <PartnershipSection />
      </main>
      <FooterPages />
    </>
  );
};

export default HomePages;
