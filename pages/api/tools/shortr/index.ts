import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next/types";
import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";

export const db = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(404);
        return;
    }

    const { long } = JSON.parse(
        req.body
    ) as unknown as ShortrBodyType;

    const short = hashURL(long);
    if (!short.length) {
        res.status(500);
        return;
    }

    const response = await db.urlShortener.findUnique({
        where: {
            short,
        },
    });

    if (!!response) {
        res.json({
            short,
        } satisfies ShortrResponseType);
        res.end();
        return;
    }

    await db.urlShortener.create({
        data: {
            long,
            short,
            count: 0,
        },
    });

    res.json({
        short,
    } satisfies ShortrResponseType);
    res.end();
    return;
}
