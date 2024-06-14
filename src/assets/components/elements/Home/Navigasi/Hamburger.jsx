import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hamburger } from "../../../../redux/slices/cartSlices";

const Hamburger = ({ isScroll }) => {
  const [isHamburger, setIsHamburger] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsHamburger(!isHamburger);
  };

  useEffect(() => {
    dispatch(hamburger(isHamburger));
  }, [isHamburger, dispatch]);

  return (
    <button
      onClick={handleClick}
      className="z-50 flex flex-col lg:hidden gap-y-2"
    >
      <span
        className={`block w-8 h-px ${
          isScroll > 40 ? "bg-white" : "bg-primary"
        } ${
          isHamburger && "rotate-45 origin-top-left bg-white"
        } transition-global`}
      ></span>
      <span
        className={`block w-8 h-px ${
          isScroll > 40 ? "bg-white" : "bg-primary"
        } ${isHamburger && "opacity-0 bg-white"} transition-global`}
      ></span>
      <span
        className={`block w-8 h-px ${
          isScroll > 40 ? "bg-white" : "bg-primary"
        } ${
          isHamburger && "-rotate-45 origin-bottom-left bg-white"
        } transition-global`}
      ></span>
    </button>
  );
};

export default Hamburger;
