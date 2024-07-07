
import TitleSection from "../TitleItems/TitleSection";
import { dataSupportingCoaching } from "../../../../services/homeVisa.services";
import CardSupportingCoaching from "../CardItems/CardSupportingCoaching";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import { logoHijau } from "../../../../../../public/img/logo";
const SupportingCoachingSection = () => {
  return (
    <SectionHomeLayouts styleSection="pt-14 pb-24">
      <TitleSection
        icon={logoHijau}
        order="order-last"
        titleSection="Supporting Coaching"
        titleFirst="A Tapestry of Experiences"
        titleSecond="Cultural Encounters"
        colorFirst="text-primary"
        colorSecond="text-primary"
      />

      <div className="relative grid grid-cols-3 gap-8">
        <div className="absolute right-0 flex -top-20 gap-x-3">
          <button
            onClick
            className="p-3 border rounded-full hover:text-white hover:border-none hover:bg-secondary border-black/20 text-primary"
          >
            <TiArrowLeft />
          </button>
          <button
            onClick
            className="p-3 border rounded-full hover:text-white hover:border-none hover:bg-secondary border-black/20 text-primary"
          >
            <TiArrowRight />
          </button>
        </div>
        <CardSupportingCoaching dataCard={dataSupportingCoaching} />
      </div>
    </SectionHomeLayouts>
    // <section className="pb-24 pt-14">
    //   <div className="container max-w-5xl">

    //   </div>
    // </section>
  );
};

export default SupportingCoachingSection;
