import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-900 items-center text-white">
      <span className="font-semibold ml-8 text-xl">
        <Link to="/">YourShop.com</Link>
      </span>

      <span>
        <Link to="/" className="mr-8 hover:text-gray-400">
          My Shop
        </Link>
        <Link to="/cart" className="mr-8 hover:text-gray-400">
          Cart
        </Link>
        <Link to="/about" className="mr-8 hover:text-gray-400">
          About
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
