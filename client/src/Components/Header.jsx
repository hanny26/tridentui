import React from "react";
import { Link } from "react-router-dom";
// import Cart from "./Assets/cart.svg";

export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src="" alt="logo" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/menu" className="text-xl">Menu</Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="text-xl">
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
                className="feather feather-shopping-cart text-xl text-white"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M21 15s-2-4-2-7h-1" />
                <path d="M17 3h-4l-1 9H7" />
              </svg>
          </Link >
          <Link to="/login" className="text-xl">Log In</Link >
          <Link to="/register" className="text-xl">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
