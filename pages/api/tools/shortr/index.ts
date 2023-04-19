import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next/types";
import {
    ShortrBodyType,
    ShortrResponseType,
    hash,
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

    // todo: hash long
    const short = hash(long);

    // todo: check if short exists
    const response = await db.urlShortener.findUnique({
        where: {
            short,
        },
    });

    if (response !== null) {
        res.status(404);
        return;
    }

    // todo: add short to db
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
}
