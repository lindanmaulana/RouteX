import { FaPlay } from "react-icons/fa6";
import Button from "../../elements/Home/Button";
const HeroSection = () => {
  return (
    <section className="flex items-end justify-center h-screen px-4 pb-4 ">
      <div className="h-[84%] relative overflow-hidden w-full bg-primary rounded-3xl">
        <div className="container max-w-5xl">
          <img
            src="/img/home/hero-banner/menara-kiri.png"
            alt="Tower Eiffel"
            className="absolute bottom-8 left-12 h-96"
          />
          <img
            src="/img/home/hero-banner/menara-kanan.png"
            alt="Tower Eiffel"
            className="absolute bottom-7 h-80 right-48"
          />
          <img
            src="/img/home/hero-banner/lingkaran.png"
            alt="Circle Decoration"
            className="absolute h-80 bottom-7 right-64 opacity-40 lg:opacity-70"
          />
          <div className="flex items-center justify-start h-screen">
            <div className="w-2/3 ">
              <h2 className="mb-10 mr-40 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
                Visa Made Easy Dreams Made Possible
              </h2>
              <div className="flex gap-x-8">
                <Button color="text-white" fontSize="text-xs lg:text-base">Read More</Button>
                <button className="flex gap-x-2">
                  <span className="flex items-center self-center justify-center w-10 h-10 text-center rounded-full bg-white/20">
                    <FaPlay className="text-xl text-white " />
                  </span>
                  <span className="z-10 self-center text-xs text-white lg:text-lg">
                    Watch Our Videos
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
