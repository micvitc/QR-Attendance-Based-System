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
    console.log("USer", user)
    if (!session) {
        return (
            <div>
                <p>You need to sign in to access this page.</p>
                <Link href="/auth/signin">Sign In</Link>
            </div>
        );
    }

    return (

        <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
            <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col gap-5">
                <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>
                <p className="text-lg text-center pb-5">Welcome, {session.user.name}</p>
                <p className="text-gray-500"><strong>Email:</strong> {session.user.email}</p>
                <p className="text-gray-500"><strong>Department:</strong> {user.Department}</p>
                <p className="text-gray-500"><strong>Designation:</strong> {user.Designation}</p>
                <p className="text-gray-500"><strong>Phone Number:</strong> {user.WhatsAppNumber}</p>
                <p className="text-gray-500"><strong>Faculty:</strong> {faculty?.Name}</p>
                <p className="text-gray-500"><strong>VIT Email:</strong> {user.VITEmail}</p>

                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    <NavLink />
                </button>

            </div>
        </div>
    );
};

