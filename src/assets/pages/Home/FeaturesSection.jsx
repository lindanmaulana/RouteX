import CardFeatures from "../../components/fragments/Home/CardFeatures";

const FeaturesSection = () => {
  const dataFeatures = [
    {
      icon: "/img/home/features/food-and-wine.svg",
      title: "Food and Wine Tours",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet rcus nunc. Duis egestas ac",
    },
    {
      icon: "/img/home/features/travel-opportunities.svg",
      title: "Travel Opportunities",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet rcus nunc. Duis egestas ac",
    },
    {
      icon: "/img/home/features/solo-travel.svg",
      title: "Solo Travel Planning",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet rcus nunc. Duis egestas ac",
    },
  ];
  return (
    <section className="pt-4 pb-14">
      <div className="container px-4 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {dataFeatures.map((data, index) => (
            <CardFeatures key={index} icon={data.icon} title={data.title} description={data.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
