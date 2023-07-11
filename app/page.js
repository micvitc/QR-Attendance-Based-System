import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export const dynamic = 'force-dynamic' 

export default function SimpleCard() {
  const session = getAuthSession()
  return (

      <div className="grid mt-20 place-content-center">

        <div className="flex flex-col items-center md:p-12 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100  ">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Revolutionizing Attendance Tracking</h5>
            <p className="mb-3 font-normal text-gray-700">At QR Attendance Tracker, we are dedicated to revolutionizing attendance management for our club activities. With our innovative QR-based solution, we offer a seamless, efficient, and hassle-free way to track attendance. Say goodbye to the days of manual, time-consuming methods, and embrace the power of technology to streamline your attendance tracking process.</p>
            <button type="button" className=" w-56 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
              {!session && <Link href="/signin">Get Started</Link>}
              {session && <Link href="/events">See Events</Link>}
            </button>
          </div>
          <img className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/logo.png" alt="logo" />
        </div>
      </div>

  );
}
