import { AiOutlineCheck } from "react-icons/ai"
import { BiPaperPlane } from "react-icons/bi"
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdOutlineChevronRight } from "react-icons/md"

const FooterPages = () => {
  return (
    <footer className="relative pt-10 overflow-hidden bg-primary -z-20">
        <img
          src="/img/home/footer/dunia.png"
          alt="Dunia"
          className="absolute right-0 w-full h-full top-56 -z-10"
        />
        <div className="container px-4 lg:px-10">
          <div className="flex flex-col items-center justify-center pb-10 divide-x-2 lg:flex-row divide-white/30">
            <div className="flex items-center justify-start w-1/2 gap-x-4">
              <div className="flex p-2 rounded-full bg-secondary">
                <img
                  src="/img/home/footer/need-any.svg"
                  alt="Need any support"
                  className="self-center w-10 h-10 p-1"
                />
              </div>
              <div>
                <p className="text-xl text-white">Need any support for</p>
                <p className="text-xl text-white">tour and visa?</p>
              </div>
            </div>

            <div className="flex items-center justify-center w-1/2 gap-x-4">
              <div className="flex p-2 rounded-full bg-secondary">
                <img
                  src="/img/home/footer/need-any.svg"
                  alt="Need any support"
                  className="self-center w-10 h-10 p-1"
                />
              </div>
              <div>
                <p className="text-xl text-white">Are You Ready For Get</p>
                <p className="text-xl text-white">Started Travelling?</p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between py-20 border-t border-b border-white/30">
            <div className="max-w-72 ">
              <img
                src="/img/home/header/logo-putih.png"
                alt="RouteX"
                className="mb-7"
              />
              <p className="mb-5 text-white text-md">
                Corporate business typically refers to large-scale mansola it
                enterprises or organizat
              </p>
              <div className="flex text-white gap-x-6">
                <FaFacebookF /> <FaInstagram /> <FaXTwitter /> <FaLinkedin />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-7">Services</h2>
              <ul>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <AiOutlineCheck className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">Mistakes</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <AiOutlineCheck className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      Your Startup
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <AiOutlineCheck className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      Knew About Fonts
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <AiOutlineCheck className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      Knew About Fonts
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-7">
                Useful Link
              </h2>
              <ul>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <MdOutlineChevronRight className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      Latest New
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <MdOutlineChevronRight className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">Careers</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <MdOutlineChevronRight className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      General Inquiries
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-base text-white ">
                    <MdOutlineChevronRight className="inline-block mr-3 align-middle text-secondary" />
                    <span className="inline-block align-middle">
                      Case Studies
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="max-w-72 ">
              <h2 className="mb-8 text-xl font-medium text-white">
                Subscribe Our Newsletter
              </h2>
              <p className="mb-8 text-white text-md">
                Corporate business typically refers to large-scale mansola it.
              </p>
              <div className="flex pl-4 text-white bg-black rounded-full">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="z-10 self-center text-base bg-transparent outline-none placeholder:text-slate-300"
                />
                <button className="self-center p-4 align-middle rounded-full bg-secondary">
                  <BiPaperPlane className="rounded-full bg-secondary" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-5">
            <h3 className="text-white/50">© Yoursitename 2024 | All Rights Reserved</h3>
            <ul>
              <li className="inline-block mr-8 align-middle">
                <a href="" className="text-white/50">Trams & Condition</a>
              </li>
              <li className="inline-block mr-8 align-middle">
                <a href="" className="text-white/50">Privacy Policy</a>
              </li>
              <li className="inline-block align-middle">
                <a href="" className="text-white/50">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default FooterPages
