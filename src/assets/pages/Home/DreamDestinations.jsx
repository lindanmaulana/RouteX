import { TiArrowRight } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import CardDreamDestinations from "../../components/fragments/Home/CardDreamDestinations";
const DreamDestinations = () => {
  const dataDreamDestinations = [
    {
      icon: "/img/home/dream-destination/passport-plus.svg",
      title: "Passport Plus",
      features: ["Beyond Border Immigration", "Worldwide Visa Assistance"],
    },
    {
      icon: "/img/home/dream-destination/global-entry.svg",
      title: "Global Entry",
      features: ["GlobeTrot Visa Services", "Infiniti Visa Solution"],
    },
  ];

  return (
    <section className="py-14">
      <div className="container px-4 lg:px-10">
        <div className="flex flex-col-reverse max-w-4xl gap-20 mx-auto lg:flex-row">
          <div className="grid w-full grid-cols-2 grid-rows-4 gap-4 p-2 lg:w-2/5 justify-items-center">
            <div className="relative block w-full row-span-3 border rounded-2xl border-secondary">
              <div className="absolute block w-full h-full bg-gray-400 -top-2 -left-2 rounded-2xl"></div>
            </div>
            <div className="flex items-center justify-center row-span-1 px-4 bg-secondary rounded-xl">
              <h4 className="mr-5 text-2xl text-white">25</h4>
              <h2 className="text-xs text-white">Years Of experience</h2>
            </div>
            <div className="block w-full row-span-3 bg-gray-400 rounded-xl"></div>
            <div className="block w-24 h-24 row-span-1">
              <img
                src="/img/home/dream-destination/imigration-agency.svg"
                alt="Imigration Agency"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="mb-9">
              <p className="flex items-center justify-start mb-2">
                <img
                  src="/img/home/dream-destination/why-choose.svg"
                  alt="Why Choose Us"
                  className="mr-1"
                />{" "}
                <span className="text-xs text-primary">WHY CHOOSE US</span>
              </p>
              <h2 className="text-3xl font-semibold">Where Wanderlust Meets</h2>
              <h2 className="mb-5 text-3xl font-semibold text-primary">
                Dream Destinations
              </h2>
              <p className="text-sm text-black/50">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla
                quis venenatis cras sed eu massa Et purus duis sollicitudin
                dignissim habitant. Egestas nulla quis venenatis cras sed eu
                massa Et purus duis sollicitudin dignissim habitant. Egestas
                nulla
              </p>
            </div>

            <div className="grid grid-cols-2 mb-10 gap-7">
              {dataDreamDestinations.map((data, index) => (
                <CardDreamDestinations
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  features={data.features}
                />
              ))}
            </div>

            <div className="flex">
              <button className="flex items-center justify-center py-3 mr-10 border rounded-full border-secondary px-7">
                <span>Read More</span>
                <TiArrowRight className="text-xl font-semibold text-primary" />
              </button>
              <div className="flex items-center justify-center">
                <div className="p-3 mr-3 rounded-full bg-secondary">
                  <MdCall className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-primary">Need help?</h3>
                  <p className="text-base font-semibold text-primary">
                    (808) 555-0111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamDestinations;
