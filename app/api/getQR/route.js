import { db } from "@/lib/db";

export async function GET(request) {
  const body = await request.json();
  console.log("bod" + body);

  
  console.log(Participant);
}
