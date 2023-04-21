import { db } from "@/app/tools/shortr/new/route";
import { NextResponse } from "next/server";

export const revalidate = 60;

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
