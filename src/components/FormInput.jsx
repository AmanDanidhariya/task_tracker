import React from "react";

const FormInput = ({ label, onChange }) => {
  return (
    <div className="grid sm:grid-cols-12 sm:mt-4">
      <div className="sm:col-span-3">
        <label className="sm:text-lg text-md ">{label} :</label>
      </div>
      <div className="sm:col-span-9">
        <input className="w-full bg-stone-200" onChange={onChange} />
      </div>
    </div>
  );
};

export default FormInput;
