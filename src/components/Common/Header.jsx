import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
/*    */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative main-header">
      {/* navbar */}
      <div className=" pl-4 pr-4 sm:pl-20 sm:pr-20 navbar flex items-center justify-between">
        <div className="flex-1">
          <Link to="">
          <img className="w-48" src="/public/noman.png" alt="" />
          
          </Link>
          
        </div>
        <div className="flex-none sm:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`flex-none ${isMenuOpen ? "block" : "hidden"} sm:block absolute top-full left-0 w-full bg-white sm:static sm:w-auto sm:bg-transparent`} >
          <ul className={`menu ${isMenuOpen ? "flex flex-col" : "menu-horizontal"} px-1 sm:flex-row`} >
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive ? "text-[#4022E6] font-semibold" : "text-black font-semibold"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive ? "text-[#4022E6] font-semibold" : "text-black font-semibold"}`
                }
                to="/journey"
              >
                Journey
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive ? "text-[#4022E6] font-semibold" : "text-black font-semibold"}`
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive ? "text-[#4022E6] font-semibold" : "text-black font-semibold"}`
                }
                to="/recentWork"
              >
                Recent Work
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive ? "text-[#4022E6] font-semibold" : "text-black font-semibold"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
