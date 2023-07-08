import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";
import {  getAuthSession } from "@/lib/auth";

export async function POST(request) {
  var body = await request.json();
  const session = await getAuthSession()
try{

  if (session.user) {
    const { isAdmin } = await db.ClubMember.findFirst({
      where: { VITEmail: session.user.email },
    })
    if (isAdmin) {

      Promise.all(
        body.map(async (member, i) => {
          const faculty = await db.Faculty.findFirst({
            where: { Name: member.RegisteredFaculty },
          });
          const user = await db.ClubMember.create({
            data: {
              Username: member.Username,
              RegNo: member.RegNo,
              Name: member.Name,
              VITEmail: member.VITEmail,
              FacultyId: faculty.id,
              WhatsAppNumber: member.WhatsAppNumber,
              DepartmentPreference_One: member.DepartmentPreference_One,
              DepartmentPreference_Two: member.DepartmentPreference_Two,
              Description: member.Description,
              Department: member.DepartmentPreference_One,
              Designation: member.DepartmentPreference_One,
              FFCS: true,
            },
          });
        })
      );
    }
  }
  // console.log(user);

  return NextResponse.json({ message: "success" });
}
catch(err){
  return NextResponse.json({ message:err })
}
}
