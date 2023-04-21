import { db } from "@/shared/db";
import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { long } = (await req.json()) as unknown as ShortrBodyType;

    const short = hashURL(long);
    if (!short.length) {
        return new Response("Bad input", {
            status: 400,
        });
    }

    const response = await db.urlShortener.findUnique({
        where: {
            short,
        },
    });

    if (!!response) {
        return NextResponse.json({
            short,
        } satisfies ShortrResponseType);
    }

    await db.urlShortener.create({
        data: {
            long,
            short,
            count: 0,
        },
    });

    return NextResponse.json({
        short,
    } satisfies ShortrResponseType);
}
