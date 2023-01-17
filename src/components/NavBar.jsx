import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Image from "next/image";

const NavBar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <nav className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    {/* <Image
                    src='/assets/axu.jpg'
                    alt=''
                    width={50}
                    height={50}
                /> */}
                </div>
                <div className='mx-auto md:mx-0'>
                    <ul className='flex'>
                        <li className='nav-link'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href='/'>Skills</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href='/'>Projects</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href='/'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
