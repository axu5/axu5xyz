import { type UrlShortener } from "@prisma/client";
import kv from "@vercel/kv";
import { NextResponse } from "next/server";

import { db } from "@/shared/db";

// Data does not change often, if at all
export const revalidate = 24 * 60 * 60;

// https://beta.nextjs.org/docs/routing/route-handlers
export async function GET(
    _: Request,
    { params }: { params: { short: string } }
) {
    const { short } = params;

    if (!short || typeof short !== "string") {
        return new Response("Not Found", { status: 404 });
    }

    // TODO Migrate non-used KV stores to supabase.
    // (This could be done with )
    const long = await kv.get<string>(short);
    if (typeof long !== "string") {
        // Check Supabase
        try {
            const dbResBackup = await db.urlShortener.findUnique({
                where: { short },
            });

            if (dbResBackup === null) throw null;

            await kv.set(short, dbResBackup.long);

            return NextResponse.redirect(dbResBackup.long);
        } catch (e) {
            // not found
            return new Response("Not Found", { status: 404 });
        }
    }

    return NextResponse.redirect(long);
}
