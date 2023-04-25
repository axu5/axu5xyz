import List from "@/components/List";
import { Github, Twitter, Youtube } from "lucide-react";

export const metadata = {
    title: "contact",
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
            href: "https://www.youtube.com/channel/UC4nP7rXJSErplFed4BBRy6A",
            inner: (
                <>
                    <Youtube className='h-4 w-4 mr-2' />
                    Youtube
                </>
            ),
        },
        {
            href: "https://twitter.com/aho_aleks",
            inner: (
                <>
                    <Twitter className='h-4 w-4 mr-2' />
                    Twitter
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
