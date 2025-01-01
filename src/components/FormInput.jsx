import React from "react";

const FormInput = ({ label, name, type, value, placeholder, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block text-sm mb-2">{label}</label>
    {type === "select" ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-gray-700 rounded-lg text-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 bg-gray-700 rounded-lg text-white "
        required={required}
      />
    )}
  </div>
);

export default FormInput;