import { db } from "@/shared/db";
import { ArrowLeft } from "lucide-react";

export default async function AllShortLinks() {
    const allLinks = await db.urlShortener.findMany({});
    return (
        <section className='w-[85%] mx-auto'>
            <a
                className='text-gray-500 dark:text-gray-400 py-5 flex flex-row items-center'
                href='/tools/shortr'>
                <ArrowLeft className='h-3 w-4 mr-2' /> Create a new
                link
            </a>
            <div className='flex dark:text-gray-100 flex-row text-2xl my-5'>
                <div className='w-[25%]'>Short</div>
                <div className='w-[40%]'>Full Link</div>
                <div className='w-[10%]'>Clicks</div>
                <div className='w-[25%]'>Date created</div>
            </div>
            <div className='flex dark:text-gray-100 flex-col'>
                {allLinks.map(link => {
                    const shortLink = `https://axu5.xyz/s/${link.short}`;
                    return (
                        <a
                            className='flex flex-row rounded my-2 p-5 border-gray-600 shadow hover:border-gray-900 hover:shadow-lg hover:cursor-pointer'
                            key={link.createdAt.toUTCString()}
                            target='_blank'
                            href={shortLink}>
                            <div className='w-[25%]'>
                                {link.short}
                            </div>
                            <div className='w-[40%]'>{link.long}</div>
                            <div className='w-[10%]'>
                                {link.count}
                            </div>
                            <div className='w-[25%]'>
                                {link.createdAt.toUTCString()}
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
