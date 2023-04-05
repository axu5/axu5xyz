import Link from "next/link";

export default function Tools() {
    const tools = {
        Clp2Img: "/tools/clp2img",
    };

    return (
        <section className='w-[50%] mx-auto flex h-[calc(100vh-5rem)]'>
            <ul className='m-auto w-full'>
                {Object.entries(tools).map(([k, v]) => {
                    return (
                        <Link
                            key={k}
                            className='w-full h-full'
                            href={v}>
                            <li className='p-5 my-2 rounded bg-slate-300 hover:cursor-pointer hover:drop-shadow-md hover:underline'>
                                {k}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </section>
    );
}
