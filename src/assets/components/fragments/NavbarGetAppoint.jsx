import { HiArrowSmRight } from "react-icons/hi";

const NavbarGetAppoint = () => {
  return (
    <div className="hidden px-5 py-2 rounded-full bg-secondary lg:block">
      <button className="flex items-center justify-center w-full h-full gap-x-2">
        <span className="text-sm text-white">Get An Appointment</span>
        <HiArrowSmRight className="text-white" />
      </button>
    </div>
  );
};

export default NavbarGetAppoint;
