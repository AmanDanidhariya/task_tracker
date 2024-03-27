import React from "react";

const PriorityList = ({ className }) => {
  const priorityOption = ["p0", "P1", "P2"];
  return (
    <>
      <select
        name="{priority"
        className={`bg-white w-full py-1 rounded ${className}`}
      >
        {priorityOption.map((priority) => (
          <option key={priority.id}>{priority}</option>
        ))}
      </select>
    </>
  );
};

export default PriorityList;
