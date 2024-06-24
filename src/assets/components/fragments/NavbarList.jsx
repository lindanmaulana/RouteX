import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { dataNavbar, routerNavigasi } from "../../services/header.services";
import { Link } from "react-router-dom";

const NavbarList = () => {
  const [isScroll, setIsScroll] = useState(0);
  const [isMouseEnter, setIsMouseEnter] = useState("");
  const [isNavigate, setIsNavigate] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  console.log({ isMouseEnter });
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

  useEffect(() => {
    setIsNavigate(routerNavigasi(isMouseEnter));
  }, [isMouseEnter]);

  return (
    <ul className="hidden gap-x-6 lg:flex">
      {dataNavbar.map((data, index) => (
        <li
          onMouseEnter={() => {
            setIsVisible(true);
            setIsMouseEnter(data.title);
          }}
          onMouseLeave={() => {
            setIsVisible(false);
          }}
          key={index}
          className={`self-center relative ${
            isScroll ? "text-white" : "text-primary"
          }`}
        >
          <h2 className="flex items-center justify-center gap-x-1">
            <span className="text-xs font-semibold ">{data.title}</span>
            <SlArrowDown className="text-[8px]" />
          </h2>

          {/* Navigasi Down */}
          {isNavigate && isMouseEnter === data.title && (
            <div
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
              className={`absolute ${
                isVisible ? "block" : "hidden"
              } bg-[#D9D9D9] min-w-[180px] px-5 py-2 gap-y-2 rounded-md top-4 -left-7 flex flex-col`}
            >
              {isNavigate?.map((data, index) => (
                <Link
                  to={data.router}
                  key={index}
                  className="text-sm text-primary opacity-60 hover:opacity-100"
                >
                  {data.title}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
