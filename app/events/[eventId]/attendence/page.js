import React from "react";
import { db } from "@/lib/db";
import QRCode from "react-qr-code";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

async function Generate({ params }) {
    const session = await getAuthSession();
    try {
        if (!session) {
            return (
                <div className="p-4 h-[80vh] grid place-items-center">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                        <Link href="/signin">Sign In</Link>
                    </button>
                </div>
            )
        }

        const attendance = await db.Participant.findMany({
            where: {
                eventId: params.eventId,
            },
            include: {
                ClubMember: true,
                Attendance: true
            },
        });
        const printAttendence = attendance.filter(attendee => attendee.Attendance.length > 0);
        console.log(printAttendence);

        return (
            <div className="overflow-auto h-[80vh] ">
             {/* { printAttendence && ( printAttendence.map(member => ( */}
                <table class="min-w-full divide-y divide-blue-200 overflow-scroll">
                    <thead>
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-blue-50 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 bg-blue-50 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                                Department
                            </th>
                            <th scope="col" class="px-6 py-3 bg-blue-50 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                                Time
                            </th>
                        </tr>
                    </thead>
                    {printAttendence.map(member => (
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="item in data" key="item.id">
                            <td class="px-6 py-4 whitespace-nowrap">{ member.ClubMember.Name }</td>
                            <td class="px-6 py-4 whitespace-nowrap">{ member.ClubMember.Department }</td>
                            <td class="px-6 py-4 whitespace-nowrap">{ member.Attendance[0].ExitTime.toString() }</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                {/* )} */}  
            </div>


    );
}
  catch (err) {
    console.log(err)
    return (
        <div className="p-4 h-[80vh] grid place-items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
                Something went wrong
            </button>
        </div>
    )
}
}

export default Generate;
