import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FileUploader from './FileUploader';
import SubmitButtons from './SubmitButtons';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    time: '',
    timezone: '',
    description: '',
    videoLink: '',
    bannerImage: null,
  });

  const handleChange = (e) => {
    setEvent({ 
      ...event, 
      [e.target.name]: e.target.value 
    });
  };

  const handleFileSelect = (file) => {
    setEvent({ ...event, bannerImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!event.name || !event.date || !event.description) {
      alert('Please fill in all required fields.');
      return;
    }

    addEvent(event);
    setEvent({ 
      name: '', 
      date: '', 
      time: '', 
      timezone: '', 
      description: '', 
      videoLink: '', 
      bannerImage: null 
    }); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-green-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg"
    >
      <FormInput 
        label="Event Name" 
        name="name" 
        type="text" 
        value={event.name} 
        placeholder="Your event name" 
        onChange={handleChange} 
        required 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput 
          label="Date" 
          name="date" 
          type="date" 
          value={event.date} 
          onChange={handleChange} 
          required 
        />
        <FormInput 
          label="Time" 
          name="time" 
          type="time" 
          value={event.time} 
          onChange={handleChange} 
        />
      </div>

      <FormInput 
        label="Time Zone" 
        name="timezone" 
        type="select" 
        options={["Select Time Zone", "PST", "EST", "GMT"]} 
        value={event.timezone} 
        onChange={handleChange} 
      />

      <FormTextArea 
        label="Description" 
        name="description" 
        value={event.description} 
        placeholder="Add event description..." 
        onChange={handleChange} 
        required 
      />

      <FormInput 
        label="Video Link" 
        name="videoLink" 
        type="url" 
        value={event.videoLink} 
        placeholder="Add video link..." 
        onChange={handleChange} 
      />

      <FileUploader label="Banner Image" onFileChange={handleFileSelect} />

      <SubmitButtons /> 
    </form>
  );
};

export default EventForm;