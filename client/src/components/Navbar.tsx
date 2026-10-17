import { Link, NavLink } from "react-router-dom";
import mpayLogo from "../assets/MPAY LOGO.png";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-[#7D72FF]" : "";

const Navbar = () => {
  return (
    <div className="relative z-10 px-25.25 py-6 flex items-center w-full justify-between">
      <img src={mpayLogo} alt="" />

      <div className="flex items-center gap-15">
        <div className="w-94.5 flex items-center justify-between font-normal text-[#FFFFFF] text-[16px]">
          <NavLink to="/" end className={navLinkClass}>HOME</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT US</NavLink>
          <NavLink to="/services" className={navLinkClass}>SERVICES</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT US</NavLink>
        </div>

        <Link
          to="/learn-more"
          className="inline-flex items-center px-8.25 py-2.5 bg-[#7D72FF] hover:bg-[#5A51D4] transition-colors rounded-[27px] font-normal text-[#FFFFFF] text-[16px] h-13.75"
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
