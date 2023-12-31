import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { HiOutlineMail} from "react-icons/hi";
import Logo from '../assets/akin-bilgin-logo.png'
import { useState } from "react";
import {Link} from 'react-scroll'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => setShowMenu(!showMenu)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#334B49] text-[#61dbfb] text-[20px]'>
      <div>
        <img src={Logo} alt="Akin Bilgin Logo" style={{ width: "250px", paddingTop:'20px' }} />
      </div>

      {/* MENU */}
      
        <ul className="hidden md:flex">
          <li><Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
          <li><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
          <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
          <li><Link to="work" smooth={true} duration={500}>
          Work
        </Link></li>
          <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>
      

      {/* HAMBURGER MENU*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!showMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/akinbilgin/' rel="noopener noreferrer" target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/akinpinkman' rel="noopener noreferrer" target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bea01a]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto: akinbilgin@akinbilginwriting.com" rel="noopener noreferrer" target="_blank">
              
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2f4d70]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/' rel="noopener noreferrer" target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// 