import "@/styles/globals.css";
import { type ReactNode } from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import getBirthdayParagraph from "@/helpers/getBirthdayParagraph";

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: "axu5 | dev",
    description: getBirthdayParagraph(),
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <head>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://github.com/axu5.png'
                />
            </head>
            <NavBar />
            {children}
        </>
    );
}
