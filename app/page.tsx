import Image from "next/image";
import React from "react";
import Link from "next/link";
import getBirthdayParagraph from "@/helpers/getBirthdayParagraph";

export default function Home() {
    return (
        <div>
            <div className='w-full h-[calc(100vh-5rem)] text-center flex flex-col md:flex-row'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div className=''>
                        <p className='uppercase text-sm tracking-widest text-gray-600'>
                            {getBirthdayParagraph()}
                        </p>
                        <h1 className='py-4 text-gray-700 text'>
                            Hi, I&apos;m{" "}
                            <span className='text-[#5651e5]'>
                                Axu5
                            </span>
                        </h1>
                        <h2 className='py-4 text-gray-700 text-lg'>
                            A Full-Stack developer
                        </h2>
                        <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                            I&apos;m a fulltime student based in Malta
                            and born in Finland.
                        </p>
                    </div>
                </div>
                <div className='invisible md:visible md:max-w-[33%] md:w-full md:h-full md:mx-auto md:p-2 md:pr-10 flex justify-center items-center'>
                    <Link
                        href='https://github.com/axu5'
                        target='_blank'>
                        <Image
                            className='rounded-full hover:cursor-pointer'
                            src='https://github.com/axu5.png'
                            alt='Image of me'
                            height={500}
                            width={500}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
