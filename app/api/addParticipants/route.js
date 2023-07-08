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
  const { EventId, ClubMemberIds } = await request.json();
  try {
    for (const C_id of ClubMemberIds) {
      console.log(C_id);
      await db.participant.create({
        data: {
          id: genRandStr(5),
          clubMemberId: C_id,
          eventId: EventId,
          QR: EventId + C_id,
        },
      });
    }
    return NextResponse.json(
      { message: "Updated participants Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Could not update participants ...",
        error: error,
      },
      { status: 500 }
    );
  }
}
