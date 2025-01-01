import React, { useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";

const CreateEvent = () => {
  const [events, setEvents] = useState([]); // Stores the list of events

  // Function to add an event to the list
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="w-full h-full  justify-centerbg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-white my-6">
        <span className="text-green-400">Create</span> an Event
      </h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
};

export default CreateEvent;
