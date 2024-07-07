import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { FaPlay } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export const dataIcons = () => {
  const icons = {
    arrowLeft: <TiArrowLeft />,
    arrowRight: <TiArrowRight />,
    play: <FaPlay />,
    telepon: <MdCall />,
  };

  return icons
};
