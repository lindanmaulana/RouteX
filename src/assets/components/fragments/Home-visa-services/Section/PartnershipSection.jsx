import { dataPartner } from "../../../../services/home.services";
import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";

const PartnershipSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="grid grid-cols-2 gap-32 md:grid-cols-3 lg:grid-cols-5">
        {dataPartner.map((data, index) => (
          <img
            key={index}
            src={data.src}
            alt={`Logo of ${data.title}`}
            className="w-full h-full "
          />
        ))}
      </div>
    </SectionHomeLayouts>
  );
};

export default PartnershipSection;
