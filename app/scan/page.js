import QR from "@/components/qr";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";

async function Scan() {
  const session = await getAuthSession()

  try {

    if (!session.user) {
      return (
        <div className="p-4 h-[80vh] grid place-items-center">

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            <Link href="/signin">Sign In</Link>
          </button>
        </div>
      )
    }
    const { isAdmin } = await db.ClubMember.findFirst({
      where: { VITEmail: session.user.email },
    })
    console.log("Admin", isAdmin, session.user.email)
    if (isAdmin) {
      return <QR />
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
  }


}

export default Scan;
