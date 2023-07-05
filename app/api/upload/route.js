import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";

export async function POST(
  request, 
) {
  var body = await request.json();
//   console.log(body[0])
//   const { 
//     email,
//     password,
//    } = body;

//    const hashedPassword = await bcrypt.hash(password, 12);
Promise.all(body.map(async (member, i) => {
    const faculty =  await db.Faculty.findMany({
        where: { Name: member.RegisteredFaculty },
    });
   const user =  await db.ClubMember.create({
    data: 
        {
            Username: member.Username,
            RegNo: member.RegNo,
            Name: member.Name,
            VITEmail: member.VITEmail,
            facultyId: faculty[0].id||"123",
            WhatsAppNumber: member.WhatsAppNumber,
            DepartmentPreference_One: member.DepartmentPreference_One,
            DepartmentPreference_Two: member.DepartmentPreference_Two,
            Description: member.Description,
            Department: member.DepartmentPreference_One,
            Designation:member.DepartmentPreference_One,
            FFCS:true
          }
    
  })}))
    // console.log(user);
    
  return NextResponse.json({message:"success"});
}