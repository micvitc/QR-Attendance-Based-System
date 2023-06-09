import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const QR = body?.data;
  try {
    const Participant = await db.participant.findFirst({
      where: {
        QR: QR,
      },
    });
    const Event = await db.event.findFirst({
      where: {
        id: Participant?.eventId,
      },
    });
    const Attendance = await db.attendance.create({
      data: {
        EntryTime: new Date(Event?.StartTime),
        Attended: true,
        participantId: Participant?.id,
      },
    });
    console.log(Attendance);
    return NextResponse.json(
      {
        message: "Attendance Marked Successfully",
        data: Attendance,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Paricipant not found...",
        error: error,
      },
      { status: 400 }
    );
  }
}
