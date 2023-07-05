"use client";
import React, { useState } from "react";
import axios from "axios";

const admin = () => {
  const [EventName, setEventName] = useState("");
  const [Date, setDate] = useState(null);
  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [Venue, setVenue] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(EventName, Date, StartTime, EndTime, Venue, Description);
    const data = {
      Name: EventName,
      Date: Date,
      StartTime: StartTime,
      EndTime: EndTime,
      Venue: Venue,
      Description: Description,
    };

    axios
      .post("/api/createEvent", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setEventName("");
    setDate(null);
    setStartTime(null);
    setEndTime(null);
    setVenue("");
    setDescription("");
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 mt-12 bg-gray-200 p-8 sm:w-auto md:w-3/5 lg:w-3/5 xl:w-3/5 ...">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="text-xl mb-8 font-semibold font-serif">New Event</div>
          <div className="w-full px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-event-name">
              Event Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-event-name"
              type="text"
              placeholder=""
              value={EventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-start-time">
              Start Time
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-start-time"
              type="datetime-local" //yes
              placeholder="12:00 AM"
              value={StartTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-end-time">
              End Time
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-end-time"
              type="datetime-local"
              placeholder="12:00 AM"
              value={EndTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-venue">
              Date
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-venue"
              type="date"
              placeholder=""
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-venue">
              Venue
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-venue"
              type="text"
              placeholder=""
              value={Venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-venue">
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-venue"
              type="text"
              placeholder=""
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded">
            Start Attendance
          </button>
        </div>
      </form>
      <div className="flex flex-col bg-gray-200 mt-1 ml-4 mb-0 sm:w-auto md:w-1/6 lg:w-1/6 w-20 h-48 p-2">
        <a
          className="text-lg font-semibold font-serif my-2 text-black text-center"
          href="/">
          My QR
        </a>
        <a
          className="text-lg font-semibold font-serif my-2 text-black text-center"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }>
          Profile
        </a>
        <a
          className="text-lg font-semibold font-serif my-2 text-black text-center"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }>
          Events
        </a>
        <a
          className="text-lg font-semibold font-serif my-2 text-black text-center"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }>
          Logout
        </a>
      </div>
    </div>
  );
};

export default admin;
