"use client";

import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";
import { FormEvent, useRef, useState } from "react";

function makeLink(short: string) {
    return `https://axu5.vercel.app/api/shortr/${short}`;
}

export default function Shortr() {
    const longRef = useRef<HTMLInputElement>(null);
    const [short, setShort] = useState("");

    async function submit(e: FormEvent) {
        e.preventDefault();

        if (!longRef.current) return;

        const res = await fetch("/api/tools/shortr", {
            method: "POST",
            body: JSON.stringify({
                long: longRef.current.value,
            } satisfies ShortrBodyType),
        });

        const dat =
            (await res.json()) as unknown as ShortrResponseType;

        setShort(dat.short);
    }

    function copy() {
        const link = makeLink(short);
        navigator.clipboard.writeText(link);
    }

    return (
        <form
            onSubmit={submit}
            className='w-full h-[calc(100vh-5rem)] flex flex-col justify-center'>
            <h2 className='text-gray-400 w-[50%] mx-auto'>
                Shorten a link
            </h2>
            <input
                className='w-[50%] mx-auto mt-5'
                ref={longRef}
                onChange={() => {
                    const l = longRef.current;
                    if (!l) return;
                    setShort(hashURL(l.value));
                }}
                type='text'
                placeholder='Long link'
                autoFocus
            />
            {longRef.current && longRef.current.value.length && (
                <button
                    className='text-gray-400 w-[50%] mx-auto border py-2 my-2 hover:bg-gray-200 hover:shadow-lg hover:cursor-pointer'
                    onClick={copy}>
                    {short}
                </button>
            )}
        </form>
    );
}
