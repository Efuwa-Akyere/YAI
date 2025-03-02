import React from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll
import logo from "../../assets/NoghusamLogo.jpg";

const Navbar2 = () => {
  return (
    <nav className="bg-white px-6 sticky top-0 z-50 shadow-md">
      <div className="py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>

        {/* ✅ Navigation Links with react-scroll */}
        <div className="bg-white">
          <ul className="flex gap-10 text-center p-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="innovator"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                Innovator
              </Link>
            </li>
            <li>
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
