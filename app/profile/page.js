import NavLink from "@/components/NavLink";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function Profile() {
    const session = await getAuthSession();

    // parse all data of user from prisma
    const user = await db.ClubMember.findFirst({
        where: {
            VITEmail: session.user.email,
        },
    });
    const faculty = await db.Faculty.findFirst({
        where: {
            id: user.FacultyId,
        },
    });
    console.log("USer",user)
    if (!session) {
        return (
            <div>
                <p>You need to sign in to access this page.</p>
                <Link href="/auth/signin">Sign In</Link>
            </div>
        );
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <p className="text-lg">Welcome, {session.user.name}</p>
            <p className="text-gray-500">Email: {session.user.email}</p>
            <p className="text-gray-500">Role: {user.Role}</p>
            <p className="text-gray-500">Department: {user.Department}</p>
            <p className="text-gray-500">Designation: {user.Designation}</p>
            <p className="text-gray-500">Phone Number: {user.WhatsAppNumber}</p>
            <p className="text-gray-500">Faculty: {faculty?.Name}</p>

            <p className="text-gray-500">VIT Email: {user.VITEmail}</p>
   

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                <NavLink />
            </button>
        </div>
    );
};

