import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";

export async function GET(request) {
    const events = await db.Event.findMany()
    return NextResponse.json({message: 'hello', events:events});
}