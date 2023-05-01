import kv from "@vercel/kv";
import { db } from "@/shared/db";
import {
    ShortrBodyType,
    ShortrResponseType,
    hashURL,
} from "@/shared/tools/shortr";
import { type NextRequest, NextResponse } from "next/server";
import { type UrlShortener } from "@prisma/client";

export async function POST(req: NextRequest) {
    const { long } = (await req.json()) as unknown as ShortrBodyType;

    const short = hashURL(long);
    if (!short.length) {
        return new Response("Bad input", {
            status: 400,
        });
    }

    // TODO figure out if collisions could and would happen
    await kv.set<string>(short, long);

    await db.urlShortener.create({
        data: {
            short,
            long,
        },
    });

    return NextResponse.json({
        short,
    } satisfies ShortrResponseType);
}
