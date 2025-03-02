import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import style from "./NavPage.module.css";
import Logo from "./Logo";

const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-8 font-medium flex flex-row justify-between items-center relative">
      <Logo />

      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.829 4.828 4.829 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <ul
        className={`md:flex flex-row justify-start items-center gap-10 md:text-3xl text-xl text-white ${
          isOpen ? "flex flex-col absolute top-full left-0 w-full bg-green-800 p-20 rounded-lg space-y-4" : "hidden md:flex"
        }`}
      >
        <li>
          <NavLink to="pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            className="p-6 rounded-3xl bg-white text-green-700"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavPage;
