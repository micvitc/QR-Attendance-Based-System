import Link from "next/link";

function Events(props) {
  const { id, Name, Description, Venue, StartTime, EndTime } = props;
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 hover:bg-opacity-30 transition duration-300">
        <h2 className="text-2xl font-bold text-gray-800">{Name}</h2>
        <p className="text-base font-medium text-gray-600">Start: {StartTime}</p>
        <p className="text-base font-medium text-gray-600">End: {EndTime}</p>
        <p className="text-lg font-medium text-gray-700 mt-2">{Description}</p>
        <p className="text-lg font-medium text-gray-700 mt-2">Venue: {Venue}</p>
      </div>
    </Link>
  );
}

export default Events;
