"use client";

import Image from "next/image";

export default function SimpleCard() {

  return (

      <div className="grid mt-20 place-content-center">

        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100  ">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Revolutionizing Attendance Tracking</h5>
            <p class="mb-3 font-normal text-gray-700">At QR Attendance Tracker, we are dedicated to revolutionizing attendance management for our club activities. With our innovative QR-based solution, we offer a seamless, efficient, and hassle-free way to track attendance. Say goodbye to the days of manual, time-consuming methods, and embrace the power of technology to streamline your attendance tracking process.</p>
            <button type="button" class=" w-56 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Get Started</button>
          </div>
          <img class="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/logo.png" alt="logo" />
        </div>
      </div>

  );
}
