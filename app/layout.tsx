import "@/styles/globals.css";
import { type ReactNode } from "react";
import "@/styles/globals.css";
import getBirthdayParagraph from "@/helpers/getBirthdayParagraph";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

type RootLayoutProps = {
    children: ReactNode;
};

// export const metadata = {
//     title: "axu5 | dev",
//     description: getBirthdayParagraph(),
//     openGraph: {
//         images: ["https://github.com/axu5.png"],
//     },
// };
export const metadata = {
    generator: "Next.js",
    applicationName: "axu5 | dev",
    referrer: "origin-when-cross-origin",
    keywords: ["Portfolio", "Next.js", "Aleksanteri Aho", "axu5"],
    authors: [{ name: "axu5", url: "https://axu5.xyz" }],
    // colorScheme: "dark",
    creator: "Aleksanteri Aho",
    publisher: "Aleksanteri Aho",
    // formatDetection: {
    //     email: false,
    //     address: false,
    //     telephone: false,
    // },
    openGraph: {
        title: "Axu5",
        description: getBirthdayParagraph(),
        url: "https://axu5.xyz",
        siteName: "axu5 | dev",
        images: ["https://github.com/axu5.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// https://beta.nextjs.org/docs/routing/pages-and-layouts
// IMPORTANT: MUST INCLUDE HTML, HEAD, AND BODY TAGS
export default function RootLayout({ children }: RootLayoutProps) {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme") || { value: "light" };

    return (
        <html className={theme.value}>
            <head>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://github.com/axu5.png'
                />
            </head>
            <body>
                <nav className=''>
                    <div className='bg-white dark:bg-gray-800 dark:text-white w-full h-20 shadow-xl'>
                        <div className='flex items-center w-full h-full px-2 2xl:px-16'>
                            <div className='mx-auto flex flex-col md:flex-row md:justify-start w-full md:mx-0'>
                                <ul className='flex justify-between  mx-auto md:mx-5'>
                                    <li className='nav-link'>
                                        <Link href='/'>Home</Link>
                                    </li>
                                    <li className='nav-link'>
                                        <Link href='/projects'>
                                            Projects
                                        </Link>
                                    </li>
                                    <li className='nav-link'>
                                        <Link href='/contact'>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className='nav-link'>
                                        <Link href='/tools'>
                                            Tools
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='dark:bg-slate-700'>{children}</div>
                <Analytics />
            </body>
        </html>
    );
}
