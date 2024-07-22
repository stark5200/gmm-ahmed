'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {  } from 'react-router';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Home from '@/app/page';
import { useNavigate } from 'react-router-dom';
import Logo from 'public/corporateDesign/logo_cdmanualgreenmarmot/Green_Marmot-LOGO/Green-Marmot_LOGO_Bild-Wort/PNG (web)/1C/72dpi (web)/schwarz/LOGO_Green_Marmot-RZ-1C_sw_72.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fafaf9');
        setTextColor('#059669');
      } else {
        setColor('transparent');
        setTextColor('#fafaf9');
      }
    };
    
    window.addEventListener('scroll', changeColor);
  }, []);

  //const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-20 ease-in duration-200'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-3 text-white'>
      <Link href='/'>
          <button className='flex items-center'>
            <Image src={Logo} alt='Green Marmot logo' width={80} height={80} />
          </button>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li> 
            <Link href='/'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >HOME</button>
            </Link>
          </li>
          <li>
            <Link href='/capsules'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >CAPSULES</button>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >ABOUT US</button>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >CONTACT</button>
            </Link>
          </li>
          <li>
            <Link href='/location'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >LOCATION</button>
            </Link>
          </li>
          <li>
            <Link href='/threesixty'>
              <button className='btn btn-ghost p-4 font-verdana drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >360 VIEW</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-accent text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-accent text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/'>HOME</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/capsules' as='capsules'>CAPSULES</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/about' as='about'>ABOUT US</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/contact' as='contact'>CONTACT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/location' as='location'>LOCATION</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/threesixty' as='threesixty'>360 View</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;