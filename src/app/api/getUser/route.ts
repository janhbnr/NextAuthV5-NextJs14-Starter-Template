import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 })
    }

    return NextResponse.json({ success: session }, { status: 200 })
}