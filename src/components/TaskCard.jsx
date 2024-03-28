import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "./Button";

const TaskCard = () => {
  const Task = {
    id: 8308,
    name: "Task 1",
    priority: "P0",
    description:
      "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    assignee: "pravin",
    currentStatus: "Assign",
  };

  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <div className="grid grid-cols-4 leading-tight">
        <p className="text-lg font-semibold col-span-3">{Task.name}</p>
        <p className="px-1 justify-self-end bg-blue-900 w-8 text-white text-sm flex justify-center items-center font-bold rounded-sm">
          {Task.priority}
        </p>
        <span className="border-b border-zinc-900 col-span-4 my-2"></span>
      </div>
      <div>
        <p className="text-justify text-sm tracking-tighter">
          {Task.description}
        </p>
        <div className="grid grid-cols-4 leading-tight mt-2">
          <p className="text-md text-lg font-semibold col-span-3">
            @{Task.assignee}
          </p>
          <Button className="p-1 justify-self-end bg-blue-900 w-8 text-white flex justify-center items-center font-bold rounded-sm hover:bg-white hover:text-blue-900 hover:duration-100">
            <BsThreeDotsVertical className="text-xl" />
          </Button>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <Button className="bg-blue-900 px-6 text-white col-span-1 rounded font-bold">
            {Task.currentStatus}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
