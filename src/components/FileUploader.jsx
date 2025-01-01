import React from "react";

const FileUploader = ({ label, onFileChange }) => (
  <div className="mb-4">
    <label className="block text-sm mb-2">{label}</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onFileChange(e.target.files[0])}
      className="w-full p-2 bg-grey-700 rounded-lg text-white "
    />
  </div>
);

export default FileUploader;