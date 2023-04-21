import { db } from "@/shared/db";

export default async function AllShortLinks() {
    const allLinks = await db.urlShortener.findMany({});
    return (
        <section className='w-[85%] mx-auto'>
            <a className='text-gray-500 py-5' href='/tools/shortr'>
                Create a new link
            </a>
            <div className='flex flex-row text-2xl my-5'>
                <div className='w-[25%]'>Short</div>
                <div className='w-[40%]'>Full Link</div>
                <div className='w-[10%]'>Clicks</div>
                <div className='w-[25%]'>Date created</div>
            </div>
            <div className='flex flex-col'>
                {allLinks.map(link => {
                    const shortLink = `https://axu5.vercel.app/s/${link.short}`;
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
