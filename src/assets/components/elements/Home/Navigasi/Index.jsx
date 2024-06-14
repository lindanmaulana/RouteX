import { useSelector } from "react-redux";
import NavbarMobile from "./NavbarMobile";

const MobileNavbar = () => {
    const cartState = useSelector((state) => state);
    const element = cartState.cart.home.hamburgerMenu;
    console.log({ "ini isi redux": element });
    return (
      <div
        className={`fixed top-0 left-0 ${
          element ? "w-full" : "w-0"
        } h-screen overflow-hidden bg-black/90 transition-global z-40`}
      >
        <NavbarMobile />
      </div>
    );
}

export default MobileNavbar