"use client";

import { type ClipboardEventHandler, useRef } from "react";

export default function Clp2Img() {
    const inputRef = useRef<HTMLInputElement>(null);

    async function download(
        fileName: string,
        fileType: string,
        fileContent: ReadableStream<Uint8Array>
    ) {
        // read image content
        const reader = fileContent.getReader();
        const { value } = await reader.read();
        if (value == undefined) return;

        // make image file
        const blob = new Blob([value], { type: fileType });

        // download hack thing
        const a = document.createElement("a");
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    function handlePaste(e: ClipboardEvent) {
        if (e.clipboardData == undefined) return;
        if (inputRef.current == undefined) return;

        const { files } = e.clipboardData;
        if (files.length == 0) return;

        const file = files.item(0);
        if (file == undefined) return;

        const { name, type } = file;
        const data = file.stream();
        const fileName = inputRef.current.value ?? data;
        if (data == undefined) return;

        download(fileName, type, data);
    }

    const handlePasteWithCorrectType =
        // hack to get around type checker (doesn't seem to matter?)
        handlePaste as unknown as ClipboardEventHandler<HTMLElement>;

    return (
        <section
            className='w-full h-[calc(100vh-5rem)] flex flex-col justify-center'
            onPaste={handlePasteWithCorrectType}>
            <h2 className='text-gray-400 w-[50%] mx-auto'>
                Paste an image here, and the download will start
                instantly
            </h2>
            <input
                className='w-[50%] mx-auto mt-5'
                ref={inputRef}
                type='text'
                placeholder='Input a file name'
                autoFocus
            />
        </section>
    );
}
