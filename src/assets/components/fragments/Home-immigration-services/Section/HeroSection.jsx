
import { imageHeroBanner } from '../../../../../../public/img/home-immigration/homeImmigration'
import { logoGarisKananHijau } from '../../../../../../public/img/logo'

const HeroSection = () => {
  return (
    <section className="relative">
          <div className="container h-screen max-w-5xl">
            <img
              src={imageHeroBanner.layerHero}
              alt="Immigration hero"
              className="absolute bottom-0 w-full h-full -z-10 -left-48"
            />

            <div className="flex items-center justify-center w-full h-full">
              <div className="w-[70%] justify-center flex flex-col h-[80%] ">
                <p className="flex items-center mb-6 gap-x-1">
                  <img src={logoGarisKananHijau} alt="" />
                  <span className="order-first text-xs uppercase">relax travel</span>
                </p>
                <h2 className="text-5xl font-semibold text-primary ">
                  Visa Immigration
                </h2>
                <h2 className="text-5xl font-semibold text-primary ">
                  For A Brighter
                </h2>
                <h2 className="mb-6 text-5xl font-semibold text-primary">
                  You Future
                </h2>
                <button className="px-5 py-1 text-xs border rounded-full w-28 text-start text-primary border-primary">
                  Contact Us
                </button>
              </div>
              <div className=" w-[30%] border-4 h-4/6 border-secondary bg-gray-300 rounded-xl mt-10 relative">
                <div className="absolute flex items-center justify-start w-32 px-2 py-2 bg-white rounded-md -left-10 top-14 gap-x-2">
                  <div className="bg-gray-400 border rounded-full border-secondary h-7 w-7"></div>
                  <h2 className="text-xs text-primary">Germany</h2>
                </div>

                <div className="absolute flex items-center justify-start w-32 px-2 py-2 bg-white rounded-md -right-10 top-14 gap-x-2">
                  <div className="bg-gray-400 border rounded-full border-secondary h-7 w-7"></div>
                  <h2 className="text-xs text-primary">South Korea</h2>
                </div>

                <div className="absolute flex items-center justify-start w-32 px-2 py-2 bg-white rounded-md -left-12 top-52 gap-x-2">
                  <div className="bg-gray-400 border rounded-full border-secondary h-7 w-7"></div>
                  <h2 className="text-xs text-primary">South Afrika</h2>
                </div>

                <div className="absolute flex items-center justify-start w-32 px-2 py-2 bg-white rounded-md bottom-16 -left-16 gap-x-2">
                  <div className="bg-gray-400 border rounded-full border-secondary h-7 w-7"></div>
                  <h2 className="text-xs text-primary">Turkey</h2>
                </div>

                <div className="absolute flex items-center justify-start w-32 px-2 py-2 bg-white rounded-md bottom-20 -right-16 gap-x-2">
                  <div className="bg-gray-400 border rounded-full border-secondary h-7 w-7"></div>
                  <h2 className="text-xs text-primary">Indonesia</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection
