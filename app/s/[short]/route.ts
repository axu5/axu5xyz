import { db } from "@/shared/db";
import { type UrlShortener } from "@prisma/client";
import kv from "@vercel/kv";
import { NextResponse } from "next/server";

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
    const dbRes = await kv.get<UrlShortener>(short);
    if (dbRes === null) {
        // Check Supabase
        try {
            const dbResBackup = await db.urlShortener.findUnique({
                where: { short },
            });

            if (dbResBackup === null) throw null;

            await kv.set(dbResBackup.short, dbResBackup);

            return NextResponse.redirect(dbResBackup.long);
        } catch (e) {
            // not found
            return new Response("Not Found", { status: 404 });
        }
    }

    dbRes.count += 1;
    await kv.set(dbRes.short, dbRes);

    return NextResponse.redirect(dbRes.long);
}
