import React from "react";

const EventList = ({ events }) => (
  <div className="mt-8 w-full max-w-lg">
    <h2>Created Events</h2>
    <ul className="space-y-4">
      {events.map((event, index) => (
        <li key={index} className="p-4 bg-gray-700 rounded-lg shadow-lg text-white">
          <h3>{event.name}</h3>
          <p className="text-sm text-gray-400">{event.description}</p>
          <p className="text-sm">{`${event.date} at ${event.time} (${event.timezone})`}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;