import Link from "next/link";

export default function Tools() {
    return (
        <section className='w-[50%] mx-auto flex h-[calc(100vh-5rem)]'>
            <ul className='m-auto w-full'>
                <li className='p-5 rounded bg-slate-300 hover:cursor-pointer hover:drop-shadow-md hover:underline'>
                    <Link href='/tools/clp2img'>Clp2Img</Link>
                </li>
            </ul>
        </section>
    );
}
