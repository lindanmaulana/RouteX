import { FaPlay } from "react-icons/fa6"
import { TiArrowRight } from "react-icons/ti"
const HeroSection = () => {
  return (
    <section className="relative pb-4">
          <div className="container px-4 lg:px-10">
            <div className="flex items-end w-full h-screen">
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
              <div className="w-full flex bg-primary rounded-3xl h-[85%] ">
                <div className="self-center max-w-md px-5 lg:px-0 lg:ml-48 lg:max-w-lg">
                  <h2 className="mb-10 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
                    Visa Made Easy Dreams Made Possible
                  </h2>
                  <div className="flex gap-x-8">
                    <button className="flex text-white border-2 rounded-full lg:py-3 lg:px-7">
                      <span className="z-10 self-center px-4 text-xs lg:text-base">
                        Read More
                      </span>
                      <TiArrowRight className="self-center" />
                    </button>
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
  )
}

export default HeroSection
