import { getAuthSession } from '@/lib/auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

export default async function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const session = await getAuthSession()
  return (
    <>
    <nav class="bg-blue-500 border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <Link href="https://flowbite.com/" class="flex items-center">
        <img src="logo.png" class="h-8 mr-3" alt="MIC Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">MIC</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-500">
        <li>
          <Link href="/" class="block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
        </li>
        <li>
         <Link href="/events" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Events</Link>
        </li>
        <li>
         <Link href="/generate" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Generate</Link>
        </li>
        <li>
         <Link href="/export" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Export</Link>
        </li>
        <li>
         <Link href="/qr-code" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">QR code</Link>
        </li>
        <li>
         <Link href="/scan" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Scan</Link>
        </li>
        {!session && (<>
        <li>
         <Link href="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Login</Link>
        </li>
        <li>
         <Link href="/signin" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Sign In</Link>
        </li>
        </>)}
        {session && (<> 
        <li>
          <Link href="/profile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">Profile</Link>
          </li>
          <li >
            <p class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">{session.user.email}</p>
            </li>          
            <NavLink/>
          </>)}


      </ul>
    </div>
  </div>
</nav>

    </>
              
  )
}
