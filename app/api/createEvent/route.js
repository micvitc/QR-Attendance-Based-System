import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const genRandStr = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export async function POST(request) {
  const body = await request.json();
  try {
    const Event = await db.event.create({
      data: {
        id: genRandStr(5),
        Name: body?.Name,
        Description: body?.Description,
        StartTime: new Date(body?.StartTime),
        EndTime: new Date(body?.EndTime),
        Venue: body?.Venue,
      },
    });
    const ids = await db.clubMember.findMany({
      select: { id: true },
    });
    for (const C_id of ids) {
      console.log(C_id);
      await db.participant.create({
        data: {
          id: genRandStr(5),
          clubMemberId: C_id.id,
          eventId: Event.id,
          QR: Event.id + C_id.id,
        },
      });
    }
    return NextResponse.json(
      {
        message: "Event Created Successfully",
        data: Event,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Could not create event...",
        error: error,
      },
      { status: 500 }
    );
  }
}
