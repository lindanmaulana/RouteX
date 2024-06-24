import { dataFeatures } from "../../../../services/home.services";
import CardFeatures from "../CardItems/CardFeatures";

const FeaturesSection = () => {
  return (
    <section className="pt-4 pb-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {dataFeatures ? dataFeatures.map((data, index) => (
            <CardFeatures
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          )): "Not Found"}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
