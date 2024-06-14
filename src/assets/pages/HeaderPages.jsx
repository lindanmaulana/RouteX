import { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";
import Hamburger from "../components/elements/Home/Navigasi/Hamburger";
import MobileNavbar from "../components/elements/Home/Navigasi/Index";

const HeaderPages = () => {
  const [isScroll, setIsScroll] = useState(0);
  
  const dataNavbar = [
    {
      title: "HOME",
      router: "/"
    },
    {
      title: "ABOUT US",
      router: "/"
    },
    {
      title: "SERVICES",
      router: "/"
    },
    {
      title: "PROJECTS",
      router: "/"
    },
    {
      title: "BLOG",
      router: "/"
    },
    {
      title: "PAGE",
      router: "/"
    },
    {
      title: "CONTACT",
      router: "/"
    },
  ]

  const handleScroll = () => {
    const y = window.pageYOffset;
    setIsScroll(y);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <nav
        className={`${
          isScroll > 30 ? "fixed bg-primary" : "absolute bg-[#D9D9D9]"
        } top-0 z-50 right-0 flex justify-between items-center w-full px-[40px] py-6 transition-all duration-1000 ease-in-out`}
      >
        <div>
          <img
            src={`/img/home/header/${
              isScroll ? "logo-putih.png" : "logo-hijau.png"
            }`}
            alt="RouteX"
          />
        </div>

        <ul className="hidden gap-x-6 lg:flex">
          {dataNavbar.map((data, index) => (
          <li key={index}
            className={`self-center ${
              isScroll ? "text-white" : "text-primary"
            }`}
          >
            <a className="flex items-center justify-center gap-x-1" href={data.router}>
              <span className="text-sm font-semibold ">{data.title}</span>
              <SlArrowDown className="text-[8px]" />
            </a>
          </li>
            
          ))}
        </ul>

        <div className="hidden px-5 py-2 rounded-full bg-secondary lg:block">
          <button className="flex items-center justify-center w-full h-full gap-x-2">
            <span className="text-sm text-white">Get An Appointment</span>
            <HiArrowSmRight className="text-white" />
          </button>
        </div>

        {/* <NavbarMobile /> */}
        <Hamburger isScroll={isScroll} />

        <MobileNavbar />
      </nav>
    </header>
  );
};

export default HeaderPages;
