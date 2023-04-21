"use client";

// import { FormEvent, useRef } from "react";

// import { type FFmpeg, createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

// TODO: Progress bar
export default function Youtube2Gif() {
    return <>Currently disabled</>;
    // const youtubeLinkRef = useRef<HTMLInputElement>(null);
    // const timeRef = useRef<HTMLInputElement>(null);

    // async function convertToGif(
    //     ffmpeg: FFmpeg,
    //     video: string,
    //     startTime: number,
    //     lengthTime: number
    // ) {
    //     const fileName = `out.gif`;
    //     ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
    //     await ffmpeg.run(
    //         "-i",
    //         "test.mp4",
    //         "-t",
    //         lengthTime.toString(),
    //         "-ss",
    //         startTime.toString(),
    //         "-f",
    //         "gif",
    //         fileName
    //     );

    //     const data = ffmpeg.FS("readFile", fileName);

    //     const blob = new Blob([data.buffer], { type: "image/gif" });

    //     return {
    //         url: URL.createObjectURL(blob),
    //         fileName,
    //     };
    // }

    // async function downloadVideo(e: FormEvent) {
    //     e.preventDefault();
    //     // This is impossible as the fields are required,
    //     // however it's to get around typescript
    //     if (
    //         !youtubeLinkRef ||
    //         !youtubeLinkRef.current ||
    //         !timeRef ||
    //         !timeRef.current
    //     ) {
    //         return;
    //     }

    //     const youtubeLink = youtubeLinkRef.current.value;
    //     // parse youtube link for a t flag, if none
    //     // found use 0
    //     const tStart = youtubeLink.match(/t=([0-9]*)/);

    //     const tLength = timeRef.current.value;
    //     const videoId = youtubeLink.match(/[0-9a-zA-Z\-_]{11}/);

    //     if (!videoId || !videoId.length) {
    //         alert("invalid video url");
    //         return;
    //     }

    //     let timeStart = 0;
    //     if (tStart != null && tStart.length > 0) {
    //         timeStart = Number(tStart[1]);
    //     }
    //     const timeLength = Number(tLength);

    //     // TODO: check if videoId is a valid id
    //     if (
    //         isNaN(timeStart) ||
    //         timeStart < 0 ||
    //         isNaN(timeLength) ||
    //         timeLength <= 0
    //     ) {
    //         alert("invalid time");
    //         return;
    //     }

    //     const response = await fetch("/api/tools/youtube2gif", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             videoId: videoId.toString(),
    //             beginning: timeStart,
    //             duration: timeLength,
    //         }),
    //     });

    //     console.log("sending request");
    //     const ffmpeg = createFFmpeg({
    //         log: !!!process.env.production,
    //         corePath:
    //             "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js",
    //     });
    //     await ffmpeg.load();

    //     const dat = await response.arrayBuffer();
    //     console.log("received response");

    //     // make image file
    //     const blob = new Blob([dat], {
    //         type: "image/gif",
    //     });

    //     const url = URL.createObjectURL(blob);

    //     const res = await convertToGif(
    //         ffmpeg,
    //         url,
    //         timeStart,
    //         timeLength
    //     );

    //     if (!res) return;
    //     const { url: gifUrl, fileName } = res;

    //     const a = document.createElement("a");
    //     a.href = gifUrl;
    //     // TODO: Use title of the video for output name
    //     a.download = fileName;
    //     a.click();
    //     // URL.revokeObjectURL(url);
    //     URL.revokeObjectURL(gifUrl);
    // }

    // return (
    //     <section className='w-full h-[calc(100vh-5rem)] flex flex-col justify-center'>
    //         <h2 className='text-gray-400 w-[50%] mx-auto'>
    //             Give a youtube link and convert it to a GIF.
    //         </h2>
    //         <form onSubmit={downloadVideo} className='flex flex-col'>
    //             <input
    //                 className='w-[50%] mx-auto mt-5'
    //                 ref={youtubeLinkRef}
    //                 type='text'
    //                 placeholder='Youtube link here (include timestamp)'
    //                 autoFocus
    //                 required
    //             />
    //             <input
    //                 className='w-[50%] mx-auto mt-5'
    //                 ref={timeRef}
    //                 type='number'
    //                 placeholder='Time in seconds you want to gif'
    //                 required
    //             />
    //             <button className='w-[50%] mx-auto my-5 px-5 py-2 text-white bg-blue-500 rounded hover:shadow'>
    //                 Download!
    //             </button>
    //         </form>
    //     </section>
    // );
}
