import React from "react";

const SubmitButtons = () => {
  return (
    <div className="flex justify-between mt-4">
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700"
      >
        Create Event
      </button>
      <button
        type="reset"
        className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
      >
        Cancel
      </button>
    </div>
  );
};

export default SubmitButtons;
