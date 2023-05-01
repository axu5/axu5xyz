import kv from "@vercel/kv";
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

    const exists = await db.urlShortener.findUnique({
        where: {
            short,
        },
    });

    if (!short.length || exists) {
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
