import { TiArrowRight } from "react-icons/ti";

const Button = (props) => {
    const {children, color, fontSize = "text-xs", fontWeight, backgroundColor, borderColor} = props
  return (
    <button className={`flex px-5 py-3 ${color} ${backgroundColor} border-2 ${borderColor} rounded-full`}>
      <span className={`z-10 self-center ${fontSize} ${fontWeight}`}>
        {children}
      </span>
      <TiArrowRight className="self-center text-primary" />
    </button>
  );
};

export default Button;
