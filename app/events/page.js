import Events from "@/components/Events/Events";
import { db } from "@/lib/db";
import moment from "moment/moment";
import Link from "next/link";

export default async function BasicStatistics() {
  const EventList = await db.Event.findMany();

  return (
    <>

    <div className="container mx-auto">
      <div class="max-w-7xl mx-auto pt-5 px-5 sm:px-12 md:px-17">
        <h1 class="text-center text-4xl font-bold py-10">EVENTS</h1>
      </div>
      <form className="mb-10">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500     "
            placeholder="Search Event..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EventList.map((event, index) => (
          <Events
            key={index}
            id={event.id}
            Name={event.Name}
            StartTime={moment(event.StartTime).format("Do MMM YYYY, h:mm a")}
            EndTime={moment(event.EndTime).format("Do MMM YYYY, h:mm a")}
            Description={event.Description}
            Venue={event.Venue}
          />
        ))}
      </div>
    <Link href="/admin" type="button" class=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Create Event</Link>
    </div>

    </>

  );
}
