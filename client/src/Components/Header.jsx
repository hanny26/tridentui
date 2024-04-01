import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" className="bg-black text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <div className="logo-wrapper flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img
              src="https://i.pinimg.com/originals/38/88/49/3888494dd140a90508e30f498b390da6.jpg"
              alt="logo"
              className="w-16 h-16 lg:w-24 lg:h-24 object-cover rounded-full"
            />
          </Link>
        </div>

        {/* Menu Toggle Button (visible on smaller screens) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu-wrapper flex-grow md:flex md:items-center md:justify-end space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-lg md:text-xl hover:bg-red-400 px-3 py-2 rounded-xl block md:inline">
            Home
          </Link>
          <Link to="/about" className="text-lg md:text-xl hover:bg-red-400 px-3 py-2 rounded-xl block md:inline">
            About
          </Link>
          <Link to="/cart" className="text-lg md:text-xl hover:bg-red-400 px-3 py-2 rounded-xl block md:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 11.413a2 2 0 0 0 1.902 1.446h8.84a2 2 0 0 0 1.902-1.446L23 6H6"></path>
            </svg>
          </Link>
          <Link to="/login" className="text-lg md:text-xl hover:bg-red-400 px-3 py-2 rounded-xl block md:inline">
            Log In
          </Link>
          <Link to="/register" className="text-lg md:text-xl hover:bg-red-400 px-3 py-2 rounded-xl block md:inline">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
