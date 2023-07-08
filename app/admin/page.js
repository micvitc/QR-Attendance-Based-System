import { getAuthSession } from "@/lib/auth";
import EventForm from "@/components/Events/EventForm";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { db } from "@/lib/db";

async function admin() {
  const session = await getAuthSession()
  try {
    if (!session.user) {
      return (<div className="p-4 h-[80vh] grid place-items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href="/signin">Sign In</Link>
        </button>
      </div>)
    }
    const { isAdmin } = await db.ClubMember.findFirst({
      where: { VITEmail: session.user.email },
    })
    if (isAdmin) {
      return (
        <EventForm />
      )
    }
    else {
      return (<div className="p-4 h-[80vh] grid place-items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          You are not authorized to access this page
        </button>
      </div>)
    }
  }
  catch (err) {
    return (
      <div className="p-4 h-[80vh] grid place-items-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
          Something went wrong
        </button>
      </div>
    )

  };
}


export default admin;
