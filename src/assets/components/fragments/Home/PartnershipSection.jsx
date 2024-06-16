import { dataPartner } from "../../../services/home.services";

const PartnershipSection = () => {
  return (
    <section className="py-14">
      <div className="container max-w-5xl">
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
      </div>
    </section>
  );
};

export default PartnershipSection;
