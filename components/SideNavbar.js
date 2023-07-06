"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-blue-500 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-blue-500 h-20">
       
        <div className='h-24 w-24 bg-white'>
          {/* <img className='image' src='https://micvitc.github.io/assets/img/MIC%20Logo.svg' alt='MIC'></img> */}
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <Link className="text-xl font-medium my-4 text-white" href="/admin" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          New Event
                </Link>
        <Link className="text-xl font-medium my-4 text-white" href="/events" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Events
                </Link>
                <Link className="text-xl font-medium my-4 text-white" href="/login" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Login
                </Link>
                <Link className="text-xl font-medium my-4 text-white" href="/generate" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Generate
                </Link>
                <Link className="text-xl font-medium my-4 text-white" href="/scan" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Scan
                </Link>
                
      </div>
    </div>
    
  )
}

export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <nav className="flex filter drop-shadow-md bg-blue-500 px-4 py-4 h-30 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center text-white text-3xl font-semibold font-serif">
        <Link href="/">
        <h1 className="hidden md:block">
          Smart <br /> Attendance
        </h1>
      </Link>
      </div>
      <div className="flex-grow flex justify-start "> 
        <div className="hidden md:flex font-serif font-semibold text-white mt-12 mr-72">
          <NavLink to="/admin">
            New Event
                    </NavLink>
          <NavLink to="/events">
                  Events
                    </NavLink>
                    <NavLink to="/login">
                  Login
                    </NavLink>
                    <NavLink to="/generate">
                  Generate
                    </NavLink>
                    <NavLink to="/scan">
                  Scan
                    </NavLink>
        </div>
      </div>
            <div className='hidden md:flex right-0 font-serif font-semibold text-white mt-12 mr-2'>Hi Lead!</div>
      <div className='mr-6'>
        <Image width={100} height={100} src='/logo.png' alt='MIC'/>
      </div>
      <div className="w-3/12 flex justify-end items-center md:hidden">

        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center" onClick={() => {
          setOpen(!open)
        }}>
          
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>

      </div>
    </nav>
  )
}
