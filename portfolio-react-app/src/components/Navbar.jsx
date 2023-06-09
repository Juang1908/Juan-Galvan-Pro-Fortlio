// create react shortcut rafce + tab
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/jg.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4c90f8] text-black-200'>
        <div>
            <img src={Logo} alt="LogoImage" style={{width: '60px'}} />
        </div>
        {/*  menu*/}
        
            <ul className='hidden md:flex'>
                <li><Link  to="home" smooth={true} duration={500}>
          Home
        </Link></li>
                <li><Link  to="about" smooth={true} duration={500}>
          About
        </Link></li>
                <li><Link  to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
                <li><Link  to="work" smooth={true} duration={500}>
          Work
        </Link></li>
                <li><Link  to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* Ternary operator(conditional) works great with react if its only True or False */}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#4c90f8] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/juan-galvan1/">
                       Linkedin <FaLinkedin size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#000]'>
                    <a className='flex justify-between items-center w-full text-white' href="https://www.github.com/Juang1908">
                       Github <FaGithub size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-green-200'>
                    <a className='flex justify-between items-center w-full text-black' href="mailto:juang1908@icloud.com">
                       Email <HiOutlineMail size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#94a3b8]'>
                    <a className='flex justify-between items-center w-full text-white' href="https://drive.google.com/file/d/1fAW3zgBpOcrqGLWGLRspX8QKP23pmF6q/view?usp=drive_link">
                       Resume <BsFillPersonLinesFill size={35}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar