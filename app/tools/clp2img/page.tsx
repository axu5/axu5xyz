"use client";

import { ClipboardEventHandler } from "react";

export default function Clp2Img() {
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
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    function handlePaste(e: ClipboardEvent) {
        if (e.clipboardData == undefined) return;

        const { files } = e.clipboardData;
        if (files.length == 0) return;

        const file = files.item(0);
        if (file == undefined) return;

        const { type, lastModified } = file;
        const data = file.stream();
        if (data == undefined) return;

        download(lastModified.toString(), type, data);
    }

    return (
        <section
            className='w-full h-[calc(100vh-5rem)] flex justify-center'
            onPaste={
                handlePaste as unknown as ClipboardEventHandler<HTMLElement>
            }>
            <h2 className='text-gray-400 w-[50%] m-auto'>
                Paste an image here, and the download will start
                instantly
            </h2>
        </section>
    );
}
