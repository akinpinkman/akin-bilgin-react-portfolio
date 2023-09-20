import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/akin-bilgin-logo.png'
import { useState } from "react";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => setShowMenu(!showMenu)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Akin Bilgin Logo" style={{ width: "200px" }} />
      </div>

      {/* MENU */}
      
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      

      {/* HAMBURGER MENU*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!showMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
