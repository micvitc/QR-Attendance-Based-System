import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const Events = await db.event.update({
    where: { id: 1 }, // Specify the ID of the event you want to update
    data: {
      participants: {
        update: {
          where: { id: 1 }, // Specify the ID of the participant you want to update
          data: {
            QR: "NEXT_Abc", // Replace columnName with the actual column name you want to update and updatedValue with the new value
          },
        },
      },
    },
  });
  console.log(body);
  return NextResponse.json(Events);
}

// GET()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
