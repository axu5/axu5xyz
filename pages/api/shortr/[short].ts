import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Keep this page for legacy links
    const { short } = req.query;
    res.redirect(`/s/${short}`);
}
