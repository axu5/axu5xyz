import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const filePath = path.resolve(
    ".",
    "pages/api/tools/read-receipts/1.png"
);
const imageBuffer = fs.readFileSync(filePath);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    console.log(id);

    // Transparent gif pixel from https://png-pixel.com/
    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
}
