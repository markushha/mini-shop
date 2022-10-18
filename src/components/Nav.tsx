import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-900 items-center text-white">
      <span className="font-semibold ml-8 text-xl">
        <Link to="/">Threeway.com</Link>
      </span>

      <span>
        <Link to="/" className="mr-8 hover:text-gray-400">
          My Shop
        </Link>
        <Link to="/about" className="mr-8 hover:text-gray-400">
          About
        </Link>
        <Link to="/faq" className="mr-8 hover:text-gray-400">
          FAQ
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
