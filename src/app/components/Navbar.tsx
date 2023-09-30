"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {  } from 'react-router';
import { usePathname } from 'next/navigation';
import { Button } from '@nextui-org/react';
import Home from '../page';
import { useNavigate } from 'react-router-dom';

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
        setTextColor('#059669');
      }
    };
    
    window.addEventListener('scroll', changeColor);
  }, []);

  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-20 ease-in duration-200'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-3 text-white'>
        <Link href='/'>
          <h1  style={{ color: `${textColor}` }} className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-accent'>
            GREEN MARMOT
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li>
            <button className='btn btn-ghost p-4 font-verdana' onClick={() => navigate("/")}>HOME</button>
          </li>
          <li>
            <button className='btn btn-ghost p-4 font-verdana' onClick={() => navigate("/capsules")}>CAPSULES</button>
          </li>
          <li className='p-4 FONT-verdana'>
            <Link href='/about'>ABOUT US</Link>
          </li>
          <li className='p-4 font-verdana'>
            <Link href='/contact'>CONTACT</Link>
          </li>
          <li className='p-4 font-verdana'>
            <Link href='/location'>LOCATION</Link>
          </li>
          <li className='p-4 font-verdana'>
            <Link href='/threesixty'>360 VIEW</Link>
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
              <Link href='/capsules'>CAPSULES</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/about'>ABOUT US</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/contact'>CONTACT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/location'>LOCATION</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 font-verdana'>
              <Link href='/threesixty'>360 View</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;