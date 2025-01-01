import React from "react";

const FormTextArea = ({ label, name, value, placeholder, onChange, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows="4"
        className="w-full p-2 bg-gray-700 rounded-lg text-white"
        required={required}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
