import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <div className='bg-white w-full h-20 shadow-xl z-[100]'>
            <nav className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <></>
                <div className='mx-auto md:mx-0'>
                    <ul className='flex'>
                        <li className='nav-link'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href='/projects'>Projects</Link>
                        </li>
                        <li className='nav-link'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
