import Image from "next/image";
import React from "react";
import Link from "next/link";
import getBirthdayParagraph from "@/helpers/getBirthdayParagraph";

export const metadata = {
    title: "dev | axu5",
};

const descriptions = ["he/him", "Javascript", "Next.js"];

export default function Home() {
    return (
        <div className=''>
            <div className='w-full h-[calc(100vh-5rem)] text-center flex flex-col md:flex-row'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div className=''>
                        <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-300'>
                            {getBirthdayParagraph()}
                        </p>
                        <div className='py-4'>
                            <h1 className='text-5xl font-bold md:text-6xl text-gray-700 dark:text-gray-100 text'>
                                Hi, I&apos;m{" "}
                                <span className='text-[#5651e5]'>
                                    Axu5
                                </span>
                            </h1>
                        </div>
                        <h2 className='sm:text-4xl font-bold py-4 text-gray-700 dark:text-gray-300 text-lg'>
                            A Full-Stack developer
                        </h2>
                        <p className='py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto'>
                            I&apos;m a fulltime student based in Malta
                            and born in Finland.
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex flex-col invisible md:visible md:max-w-[33%] md:w-full md:h-full md:mx-auto md:p-2 md:pr-10 md:justify-center md:items-center'>
                    <Link
                        href='https://github.com/axu5'
                        target='_blank'>
                        <Image
                            className='follow-cursor rounded-full hover:cursor-pointer'
                            src='https://github.com/axu5.png'
                            alt='Image of me'
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className='flex flex-row max-w-full overflow-ellipsis'>
                        {descriptions.map((description, i) => {
                            return (
                                <div
                                    key={i}
                                    className='bg-gray-500 my-2 mx-1 rounded-2xl px-2'>
                                    <span className='text-base pt-5 text-gray-500 dark:text-gray-300'>
                                        {description}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
