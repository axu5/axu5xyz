"use client";

import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";
import { FormEvent, useState } from "react";

function makeLink(short: string) {
    // have access to window because of "use client"
    return `${window.location.origin}/s/${short}`;
}

export default function Shortr(context: any) {
    const [long, setLong] = useState("");
    const [short, setShort] = useState("");

    async function submit(e: FormEvent) {
        e.preventDefault();

        if (!long || !short) return;

        const res = await fetch("/api/tools/shortr", {
            method: "POST",
            body: JSON.stringify({
                long: long,
            } satisfies ShortrBodyType),
        });

        const dat =
            (await res.json()) as unknown as ShortrResponseType;

        setShort(dat.short);
        copy(dat.short);
    }

    function copy(str: string | void) {
        const link = makeLink(str || short);
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
                onChange={elem => {
                    const { value } = elem.target;
                    setLong(value);
                    setShort(hashURL(value));
                }}
                type='text'
                placeholder='Long link'
                autoFocus
            />
            {!!short && (
                <button
                    className='text-gray-400 w-[50%] mx-auto border py-2 my-2 hover:bg-gray-200 hover:shadow-lg hover:cursor-pointer'
                    onClick={() => copy()}>
                    {short}
                </button>
            )}
        </form>
    );
}
