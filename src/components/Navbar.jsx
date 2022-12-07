import React, { useState } from 'react';
import logoImg from "../assets/logo.svg";
import openImg from "../assets/icon-menu.svg";
import closeImg from "../assets/icon-menu-close.svg";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='flex justify-between align-center relative'>
            <img src={logoImg} alt="logo" className='w-[60px]' />

            <ul className='space-x-16 hidden sm:flex justify-end items-center flex-1'>
                <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[18px]'>Home</a></li>
                <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[18px]'>New</a></li>
                <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[18px]'>Popular</a></li>
                <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[18px]'>Trending</a></li>
                <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[18px]'>Categories</a></li>
            </ul>

            <div className="sm:hidden flex justify-end items-start">
                
                <img onClick={() => setToggle((prev) => !prev)} src={toggle ? closeImg : openImg} alt="hamburger" className='cursor-pointer'/>

                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-offWhite w-[100%] h-[100vh] absolute top-10 left-20`}>
                    <ul className='list-none flex flex-col justify-start items-start pt-12 space-y-8'>
                        <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[24px]'>Home</a></li>
                        <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[24px]'>New</a></li>
                        <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[24px]'>Popular</a></li>
                        <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[24px]'>Trending</a></li>
                        <li><a href="#" className='text-grayishBlue hover:text-softOrange text-[24px]'>Categories</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;