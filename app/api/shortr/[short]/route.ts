import { NextResponse } from "next/server";

export async function GET(
    _: Request,
    { params }: { params: { short: string } }
) {
    const { short } = params;
    return NextResponse.redirect(`/s/${short}`);
}
