import React from "react";

function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className=''>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET&apos;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m{" "}
                        <span className='text-[#5651e5]'>Axu5</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Full-Stack developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I&apos;m a full stack developer and student
                        based in Malta and born in Finland.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
