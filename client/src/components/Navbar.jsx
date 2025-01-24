/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-red-500 text-white shadow-lg">
      <div className="logo text-2xl font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <div>
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-yellow-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-300">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        <Link to="/cart" className="flex items-center gap-2 hover:text-yellow-300">
          <span className="material-icons"></span>
          <span className="text-lg">{  <> &#128722;</> }</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-sm font-bold rounded-full px-2 py-1">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
