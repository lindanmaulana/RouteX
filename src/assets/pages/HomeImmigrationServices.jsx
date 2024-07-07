import AdvertisementSection from "../components/fragments/Home-immigration-services/Section/AdvertisementSection";
import AskQuestionSection from "../components/fragments/Home-immigration-services/Section/AskQuestionSection";
import AvailableCountriesSection from "../components/fragments/Home-immigration-services/Section/AvailableCountriesSection";
import ClientFeedbackSection from "../components/fragments/Home-immigration-services/Section/ClientFeedbackSection";
import CoachingSupportSection from "../components/fragments/Home-immigration-services/Section/CoachingSupportSection";
import HeaderSection from "../components/fragments/Home-immigration-services/Section/HeaderSection";
import HeroSection from "../components/fragments/Home-immigration-services/Section/HeroSection";
import MessageUsSection from "../components/fragments/Home-immigration-services/Section/MessageUsSection";
import PartnershipSection from "../components/fragments/Home-immigration-services/Section/PartnershipSection";
import ProcessOverviewSection from "../components/fragments/Home-immigration-services/Section/ProcessOverviewSection";
import SuccesStorySection from "../components/fragments/Home-immigration-services/Section/SuccesStorySection";
import TicketBookingSection from "../components/fragments/Home-immigration-services/Section/TicketBookingSection";
import VisaCategorySection from "../components/fragments/Home-immigration-services/Section/VisaCategorySection";
import WhyChooseUsSection from "../components/fragments/Home-immigration-services/Section/WhyChooseUsSection";

import FooterPages from "./FooterPages";

const HomeImmigrationServices = () => {
  return (
    <>
      <HeaderSection />

      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <CoachingSupportSection />
        <AvailableCountriesSection />
        <TicketBookingSection />
        <AskQuestionSection />
        <AdvertisementSection />
        <VisaCategorySection />
        <ClientFeedbackSection />
        <PartnershipSection />
        <ProcessOverviewSection />
        <SuccesStorySection />
        <MessageUsSection />
      </main>
      <FooterPages />
    </>
  );
};

export default HomeImmigrationServices;
