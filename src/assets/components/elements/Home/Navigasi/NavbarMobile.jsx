import { HiArrowSmRight } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";

const NavbarMobile = () => {
  return (
    <ul className="flex flex-col items-center justify-center h-full gap-y-3">
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">HOME</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">ABOUT US</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">SERVICES</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">PROJECTS</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">BLOG</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">PAGE</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl font-semibold ">CONTACT</span>
          <SlArrowDown className="text-[8px]" />
        </a>
      </li>
      <li className="self-center text-primary">
        <a className="flex items-center justify-center gap-x-1" href="/">
          <span className="text-xl text-white">Get An Appointment</span>
          <HiArrowSmRight className="text-white" />
        </a>
      </li>
    </ul>
  );
};

export default NavbarMobile;
