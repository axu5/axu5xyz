import "@/styles/globals.css";
import { type ReactNode } from "react";
import "@/styles/globals.css";
import getBirthdayParagraph from "@/helpers/getBirthdayParagraph";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: "axu5 | dev",
    description: getBirthdayParagraph(),
};

// https://beta.nextjs.org/docs/routing/pages-and-layouts
// IMPORTANT: MUST INCLUDE HTML, HEAD, AND BODY TAGS
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html>
            <head>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://github.com/axu5.png'
                />
            </head>
            <body>
                <nav>
                    <div className='bg-white w-screen h-20 shadow-xl'>
                        <div className='flex justify-start items-center w-full h-full px-2 2xl:px-16'>
                            <div className='mx-auto flex flex-col md:flex-row md:justify-start w-full md:mx-0'>
                                <ul className='flex mx-auto md:mx-5'>
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
                {children}
                <Analytics />
            </body>
        </html>
    );
}
