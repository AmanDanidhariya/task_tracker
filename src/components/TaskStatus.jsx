import React from "react";

const TaskStatus = ({ bgHeader }) => {
  return (
    <div className="col-span-2">
      <h1
        className={` text-white font-bold rounded-t-lg text-center p-2 ${bgHeader}`}
      >
        Pending
      </h1>
      <div className="h-full bg-white ">ls</div>
    </div>
  );
};

export default TaskStatus;
