import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-sky-500 lg:p-4 md:p-4 p-2">
      <Link
        to="/"
        className="lg:ml-28 md:ml-28 ml-6 whitespace-nowrap font-bold font-serif text-white lg:text-3xl md:text-3xl text-lg lg:mt-0 md:mt-0 cursor-pointer hover:scale-105 duration-200"
      >
        My Shopping
      </Link>
      <Link to="/cart">
        <div className="relative lg:mr-28 md:mr-28 mr-6 flex cursor-pointer duration-200 hover:scale-105">
          <span>
            <FaCartPlus className="text-white lg:text-4xl md:text-4xl text-3xl" />
          </span>
          <span className="absolute bg-red-500 lg:-right-[16px] md:-right-[16px] -right-[15px] lg:-top-[7px] md:-top-[7px] -top-[5px] text-white rounded-full px-1 lg:text-sm md:text-sm text-xs font-semibold">
            {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
