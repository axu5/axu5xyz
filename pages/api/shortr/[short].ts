import { db } from "@/pages/api/tools/shortr";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { short } = req.query;

    if (!short || typeof short !== "string") {
        res.status(404);
        return;
    }

    const dbRes = await db.urlShortener.update({
        where: {
            short,
        },
        data: {
            count: {
                increment: 1,
            },
        },
    });

    if (!dbRes) {
        res.status(404);
        return;
    }

    res.redirect(dbRes.long);
    return;
}
