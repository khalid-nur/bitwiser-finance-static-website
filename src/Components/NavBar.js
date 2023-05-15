import React, { useState } from "react";
import image from "../assets/bitwiser-icon.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className=" container mx-auto px-4 py-4 flex justify-between items-center ">
      <img className=" w-40 " src={image} alt="bitwiser-icon" />
      <ul className=" hidden md:flex  ">
        <li className="p-4 cursor-pointer text-color-primary hover:underline underline-offset-4 decoration-color-secondary">
          Home
        </li>
        <li className="p-4 cursor-pointer text-color-primary hover:underline underline-offset-4 decoration-color-secondary">
          Company
        </li>
        <li className="p-4 cursor-pointer text-color-primary hover:underline underline-offset-4 decoration-color-secondary">
          Resources
        </li>
        <li className="p-4 cursor-pointer text-color-primary hover:underline underline-offset-4 decoration-color-secondary">
          About
        </li>
        <li className="p-4 cursor-pointer text-color-primary hover:underline underline-offset-4 decoration-color-secondary">
          Contact
        </li>
      </ul>

      <div className="block md:hidden" onClick={navHandler}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full bg-white border-r border-gray-400 ease-in-out duration-500 block md:hidden z-10 "
            : "fixed top-0 left-[-100%] ease-in-out duration-200 "
        }
      >
        <img className=" w-40 m-4 " src={image} alt="bitwiser-icon" />

        <ul className="  uppercase p-2 ">
          <li className="p-4 border-b border-black text-color-primary">Home</li>
          <li className="p-4 border-b border-black text-color-primary">
            Company
          </li>
          <li className="p-4 border-b border-black text-color-primary">
            Resources
          </li>
          <li className="p-4 border-b border-black text-color-primary">
            About
          </li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
