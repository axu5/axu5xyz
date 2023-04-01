import "@/styles/globals.css";
import { type ReactNode } from "react";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "axu5 | dev",
    description: "My name is Aleks",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main>
            <head>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://github.com/axu5.png'
                />
            </head>
            <NavBar />
            {children}
        </main>
    );
}
