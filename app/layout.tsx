import "@/styles/globals.css";
import Head from "next/head";
import { type ReactNode } from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

type Props = {
    children: ReactNode;
};

export default function MyApp({ children }: Props) {
    return (
        <>
            <Head>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://github.com/axu5.png'
                />
            </Head>
            <NavBar />
            {children}
        </>
    );
}
