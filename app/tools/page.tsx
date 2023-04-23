import { Camera, Link2 } from "lucide-react";
import List from "@/components/List";

export const metadata = {
    title: "tools",
};

export default function Tools() {
    const tools = [
        {
            href: "/tools/clp2img",
            inner: (
                <>
                    <Camera className='h-4 w-4 mr-2' />
                    Clp2Img
                </>
            ),
        },
        {
            href: "/tools/shortr",
            inner: (
                <>
                    <Link2 className='h-4 w-4 mr-2' />
                    Shortr
                </>
            ),
        },
    ];

    return (
        <section className='mx-auto flex flex-col h-[calc(100vh-5rem)]'>
            <div className='mx-auto p-2 flex flex-row justify-center items-center'>
                <h1 className='py-4 text-gray-700 dark:text-gray-100 text-3xl'>
                    My Tools
                </h1>
            </div>
            <List blank={false} list={tools} />
        </section>
    );
}
