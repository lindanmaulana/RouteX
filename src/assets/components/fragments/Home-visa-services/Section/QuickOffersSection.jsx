import { imageQuickOffers } from "../../../../../../public/img/home/homeImages";
import { dataQuickOffer } from "../../../../services/homeVisa.services";
import Button from "../../../elements/Home/Button";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import CardQuickOffer from "../CardItems/CardQuickOffer";

const QuickOffersSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex gap-8 ">
        <div className="block w-1/3 col-span-1 row-span-2 bg-gray-400 rounded-xl"></div>
        <div className="relative w-2/3 col-span-2 row-span-1">
          <div className="p-8 mb-8 bg-white rounded-xl">
            <div className="flex w-12 h-12 p-2 mb-4 rounded-full bg-secondary">
              <img
                src={imageQuickOffers.logoQuickOffers}
                alt="Quick Offer"
                className="self-center"
              />
            </div>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Get Our best offers quickly
            </h2>
            <p className="mb-6 text-xs pr-52">
              Lorem Ipsum is simply dummy text the printing and typese Lorem
              Ipsum has been the industrys standard dummy
            </p>
            <Button color="text-primary" borderColor="border-black/10">
              Contact Us
            </Button>
          </div>
          <div className="flex items-center justify-between gap-2 bg-secondary rounded-xl p-14">
            <CardQuickOffer data={dataQuickOffer} />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </SectionHomeLayouts>
  );
};

export default QuickOffersSection;
