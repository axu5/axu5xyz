import { db } from "@/pages/api/tools/shortr";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { short } = req.query;
    console.log("LEGACY VERSION DETECTED");
    res.redirect(`/s/${short}`);
}
