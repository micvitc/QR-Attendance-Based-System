import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import NavLink from "./NavLink";
import NavToggle from "./NavToogle";
import { db } from "@/lib/db";

export default async function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const session = await getAuthSession();
  var isAdmin = false;
  try {

    if (session.user) {

      const admin = await db.ClubMember.findFirst({
        where: { VITEmail: session.user.email },
      })
      if (admin) {
        isAdmin = admin.isAdmin;
      }
    }
  } catch (err) {
    console.log(err);
  }


  return (
    <>
      <nav className="bg-blue-500 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-8 mr-3" alt="MIC Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              MIC
            </span>
          </Link>
          <NavToggle>
            <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-blue-500">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contributors"
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page">
                  Contributors
                </Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link
                      href="/export"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                      Export
                    </Link>
                  </li>

                  <li>

                    <Link
                      href="/scan"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                      Scan
                    </Link>


                  </li>
                </>
              )}
              {!session && (
                <>
                  {/* <li>
                    <Link
                      href="/login"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                      Login
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/signin"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                      Sign In
                    </Link>
                  </li>
                </>
              )}
              {session && (
                <>
                  <NavLink />
                  <li>
                    <Link
                      href="/profile"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                      {session.user.name}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </NavToggle>
        </div>
      </nav>
    </>
  );
}
