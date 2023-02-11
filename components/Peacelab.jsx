import React from "react";
import Link from "next/link";

function Peacelab() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className=''>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Charity advocate.
                    </p>
                    <h1 className='py-4 text-gray-700 uppercase tracking-widest'>
                        Peace{" "}
                        <span className='text-[#5651e5]'>Lab</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        I created documentation for computer usage to
                        help refine peoples&apos; skills.
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Find the documentation{" "}
                        <Link
                            href='/peacelab'
                            className='text-blue-600 underline'
                        >
                            here{/* TODO: Add an arrow here */}
                        </Link>{" "}
                        (or visit the Peace Lab website here{" "}
                        <Link
                            href='https://peacelab.org/'
                            target='_blank'
                            className='text-blue-600 underline'
                        >
                            peacelab.org
                        </Link>
                        )
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Peacelab;
