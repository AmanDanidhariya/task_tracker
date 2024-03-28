import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "./Button";
import TaskCard from "./TaskCard";

const TaskStatus = ({ bgHeader, mainHeader, key }) => {
  return (
    <div
      className="col-span-2 flex flex-col"
      key={key}
    >
      <h1
        className={`text-white font-bold rounded-t-lg text-center p-2 ${bgHeader}`}
      >
        {mainHeader}
      </h1>
      <div className=" bg-white flex-1 p-2">
        {/* task card start*/}
        <TaskCard />
        {/* task card end */}
      </div>
    </div>
  );
};

export default TaskStatus;
