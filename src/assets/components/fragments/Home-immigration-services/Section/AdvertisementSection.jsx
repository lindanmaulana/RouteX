import { imageAdvertisement } from "../../../../../../public/img/home-immigration/homeImmigration";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
// import {cn} from '@/lib/utils';
// import Marquee from "@components/magicui/marquee";

const AdvertisementSection = () => {
  return (
    <div className="overflow-hidden bg-secondary whitespace-nowrap">
      <SectionHomeLayouts styleSection="py-2">
        <div className="animate-marquee">
          <img src={imageAdvertisement.iklanAdvertisement} alt="Iklan" />
        </div>
      </SectionHomeLayouts>
    </div>
  );
};

export default AdvertisementSection;
