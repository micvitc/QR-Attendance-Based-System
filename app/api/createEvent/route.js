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

  const Events = await db.event.create({
    data: {
      Name: body?.Name,
      Description: body?.Description,
      Venue: body?.Venue,
    },
  });
  console.log(body);
  return NextResponse.json(Events);
}
