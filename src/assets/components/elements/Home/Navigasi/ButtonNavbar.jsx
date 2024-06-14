
const ButtonNavbar = (props) => {
    const { title, icons} = props
  return (
    <a className="flex items-center justify-center gap-x-1" href="/">
      <span className="text-sm font-semibold ">{title}</span>
      {icons}
    </a>
  );
};

export default ButtonNavbar;
