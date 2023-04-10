import { NextApiRequest, NextApiResponse } from "next";
import ytdl, { chooseFormatOptions } from "ytdl-core";
import fs from "fs";
import { Writable } from "stream";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(404);
        return;
    }

    const { videoId, beginning, duration } = JSON.parse(req.body);

    const f = {
        // 135 -> 480p no audio
        // 134 -> 360p no audio
        // --> https://askubuntu.com/questions/486297/how-to-select-video-quality-from-youtube-dl
        quality: "134",
        filter: "videoonly",
    } satisfies chooseFormatOptions;

    // const info = await ytdl.getInfo(videoId);
    // const videoFormats = ytdl.filterFormats(
    //     info.formats,
    //     "videoonly"
    // )[0];
    // const { bitrate } = videoFormats;
    // const fps = 24;
    // const seconds = Number(
    //     info.player_response.videoDetails.lengthSeconds
    // );
    // const frames = fps * seconds;

    const stream = ytdl(videoId, f);

    // let bytes = 0;
    // stream.on("data", (buf: Buffer) => {
    //     bytes += buf.length;
    //     console.log(buf);
    // });

    // stream.on("end", () => {
    //     console.table([bytes, frames, seconds, bytes / frames!]);
    // });

    res.send(stream);

    // TODO: Only send back requested portion with ffmpeg
}
