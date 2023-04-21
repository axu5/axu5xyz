import { db } from "@/pages/api/tools/shortr";
// import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
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

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     console.log(req);
//     return;
//     const { short } = req.query;

//     if (!short || typeof short !== "string") {
//         res.status(404);
//         return;
//     }

//     const dbRes = await db.urlShortener.update({
//         where: {
//             short,
//         },
//         data: {
//             count: {
//                 increment: 1,
//             },
//         },
//     });

//     if (!dbRes) {
//         res.status(404);
//         return;
//     }

//     res.redirect(dbRes.long);
//     return;
// }
