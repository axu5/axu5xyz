import "@/styles/globals.css";
import { type ReactNode } from "react";
import NavBar from "@/components/NavBar";

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
