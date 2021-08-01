import React from "react";
import heart from "../images/party.webp";

const Navbar = ({toggle}) => {
  return (
    <div>
      <div
        id="header"
        className="flex flex-row items-center justify-between h-14 overflow-hidden"
      >
        <a
          href="/#"
          id="heart-nav"
          className="flex flex-row pl-2 logo lg:md-10"
        >
          <img className="w-16 h-auto" src={heart} alt="logo" />

          <h1 className="text-2xl pt-5 text-white sm:text-4xl">lude</h1>
        </a>

        <a href="/#">
          <svg
            className="absolute text-white top-4 right-10 w-5 h-5 sm:w-7 sm:h-7 hover:cursor-pointer lg:invisible" onClick={toggle}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
        <div id="menu" 
        className="text-white invisible lg:visible px-4 text-lg">
          <a href="#learn" className="pr-12">Learn</a>
          <a href="#products" className="pr-12">Products</a>
          <a href="#testimonials" className="pr-12">Testimonials</a>
          <a href="#contact" className="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
