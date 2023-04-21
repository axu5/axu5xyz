import { db } from "@/app/tools/shortr/new/route";
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

    try {
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
        return NextResponse.redirect(dbRes.long);
    } catch (_) {
        console.log(_);
        // not found
        return new Response("Not Found", { status: 404 });
    }
}
