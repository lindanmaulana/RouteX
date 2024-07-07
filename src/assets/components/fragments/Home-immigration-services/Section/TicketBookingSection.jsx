import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";

import TitleSection from "../../Home-visa-services/TitleItems/TitleSection";
import CardTicketBooking from "../CardItems/CardTicketBooking";
import { dataTicketBooking } from "../../../../services/homeImmigration.services";
import { logoGarisKananPutih, logoGarisKiriPutih } from "../../../../../../public/img/logo";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { BsCalendarPlusFill } from "react-icons/bs";


const TicketBookingSection = () => {
  return (
    <SectionHomeLayouts styleContainer="bg-primary rounded-xl">
      <div className="w-1/2 py-10 px-11">
        <TitleSection
          marginBottom="mb-14"
          isIconsKiri={true}
          iconSecond={logoGarisKiriPutih}
          icon={logoGarisKananPutih}
          titleSection="Ticket Booking"
          colorTitleSection="text-white"
          titleFirst="Wanderlust Chronicles"
          titleSecond="Tales from Around"
          colorFirst="text-white"
          colorSecond="text-white"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-5 mb-5">
          <CardTicketBooking icons={<FaPlaneDeparture className="text-secondary" />} dataCard={dataTicketBooking.from} title="From" />
          <CardTicketBooking icons={<FaPlaneArrival className="text-secondary" />} dataCard={dataTicketBooking.to} title="To" />
          <CardTicketBooking icons={<BsCalendarPlusFill className="text-secondary" />} dataCard={dataTicketBooking.date} title="Date" />
          <CardTicketBooking icons={<BsCalendarPlusFill className="text-secondary" />} dataCard={dataTicketBooking.passenger} title="Date" />
        </div>
        
        <button className="w-full py-3 text-xs text-white rounded-full bg-secondary">Book Now</button>
      </div>
    </SectionHomeLayouts>
  );
};

export default TicketBookingSection;
