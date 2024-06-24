import { useEffect, useState } from "react";
import Hamburger from "../components/elements/Home/Navigasi/Hamburger";
import MobileNavbar from "../components/elements/Home/Navigasi/Index";

import NavbarList from "../components/fragments/NavbarList";
import NavbarGetAppoint from "../components/fragments/NavbarGetAppoint";

const HeaderPages = () => {
  const [isScroll, setIsScroll] = useState(0);

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
        <div className="w-32">
          <img
            src={`/img/home/header/${
              isScroll ? "logo-putih.png" : "logo-hijau.png"
            }`}
            alt="RouteX"
          />
        </div>

        <NavbarList />

        <NavbarGetAppoint />

        {/* <NavbarMobile /> */}
        <Hamburger isScroll={isScroll} />

        <MobileNavbar />
      </nav>
    </header>
  );
};

export default HeaderPages;
