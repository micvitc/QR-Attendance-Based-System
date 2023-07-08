"use client"
import { signOut } from "next-auth/react";

export default function NavLink(){
    return (
      <p onClick={()=>signOut()} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 text-white">Logout</p>
    )
} 