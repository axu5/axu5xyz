import List from "@/components/List";
import { Github, AtSign } from "lucide-react";

export const metadata = {
    title: "axu5 | contact",
};

export default function Contact() {
    const list = [
        {
            href: "https://github.com/axu5",
            inner: (
                <>
                    <Github className='h-4 w-4 mr-2' />
                    Github
                </>
            ),
        },
        {
            href: "#",
            inner: (
                <>
                    <AtSign className='h-4 w-4 mr-2' />
                    Email
                </>
            ),
        },
    ];

    return (
        <section className='w-full flex flex-col h-[calc(100vh-5rem)]'>
            <div className='mx-auto p-2 flex flex-row justify-center items-center'>
                <h1 className='py-4 text-gray-700 dark:text-gray-100 text-3xl'>
                    Contact Information
                </h1>
            </div>
            <List blank={true} list={list} />
        </section>
    );
}
