"use client";

import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";
import { type FormEvent, useState } from "react";
import { ArrowRight, ClipboardCopy } from "lucide-react";

function makeLink(short: string) {
    // have access to window because of "use client"
    return `${window.location.origin}/s/${short}`;
}

export default function Shortr() {
    const [long, setLong] = useState("");
    const [short, setShort] = useState("");

    async function submit(e: FormEvent) {
        e.preventDefault();

        if (!long || !short) return;

        const res = await fetch("/tools/shortr/new", {
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
            className='w-[50%] mx-auto h-[calc(100vh-5rem)] flex flex-col justify-center'>
            <a
                className='text-gray-500 dark:text-gray-400 flex flex-row items-center'
                href='/tools/shortr/all'>
                <ArrowRight className='h-4 w-4 mr-2' /> See all links
            </a>
            <h2 className='text-gray-400'>Shorten a link</h2>
            <input
                className='mt-5 p-2 rounded-lg'
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
                    className='text-gray-400 rounded-lg border py-2 my-2 hover:bg-gray-200 dark:hover:bg-slate-700 hover:shadow-lg hover:cursor-pointer'
                    onClick={() => copy()}>
                    <div className='flex flex-row mx-5 items-center'>
                        <ClipboardCopy className='h-4 w-4 mr-2' />
                        {short}
                    </div>
                </button>
            )}
        </form>
    );
}
