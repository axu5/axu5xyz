import { type NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { short: string } }
) {
    const url = request.nextUrl.clone();
    const { short } = params;
    url.pathname = `/s/${short}`;
    return NextResponse.redirect(url);
}
