import HeaderPages from "./HeaderPages";
import FooterPages from "./FooterPages";
import HeroSection from "../components/fragments/Home-visa-services/Section/HeroSection";
import FeaturesSection from "../components/fragments/Home-visa-services/Section/FeaturesSection";

import WhyChooseUsSection from "../components/fragments/Home-visa-services/Section/WhyChooseUsSection";
import PartnershipSection from "../components/fragments/Home-visa-services/Section/PartnershipSection";

import OurCountriesSection from "../components/fragments/Home-visa-services/Section/OurCountriesSection";
import VisaCategorySection from "../components/fragments/Home-visa-services/Section/VisaCategorySection";
import AvailabeCountriesSection from "../components/fragments/Home-visa-services/Section/AvailabeCountriesSection";
import QuickOffersSection from "../components/fragments/Home-visa-services/Section/QuickOffersSection";
import SupportingCoachingSection from "../components/fragments/Home-visa-services/Section/SupportingCoachingSection";
import OurCoachingSection from "../components/fragments/Home-visa-services/Section/OurCoachingSection";
import ClientFeedbackSection from "../components/fragments/Home-visa-services/Section/ClientFeedbackSection";
import ProcessOverviewSection from "../components/fragments/Home-visa-services/Section/ProcessOverviewSection";
import RecentBlogsSection from "../components/fragments/Home-visa-services/Section/RecentBlogsSection";
const HomeVisaServices = () => {
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
        <SupportingCoachingSection />
        <OurCoachingSection />
        <ClientFeedbackSection />
        <ProcessOverviewSection />
        <RecentBlogsSection />
      </main>

      <FooterPages />
    </>
  );
};

export default HomeVisaServices;
