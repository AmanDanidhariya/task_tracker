import React from "react";
import Filters from "./Filters";
import AddNewTask from "./AddNewTask";
import TaskStatus from "./TaskStatus";

const TaskBoard = () => {
  return (
    <section className="mt-4 mb-4 h-full w-full border-4 border-white rounded-xl p-4">
      <div className="sm:grid grid-cols-4 gap-4">
        <Filters />
        <div>
          <AddNewTask />
        </div>
      </div>
      {/* status component start */}
      <div className="grid grid-cols-10 gap-x-2">
        <TaskStatus bgHeader="bg-slate-400" />
        <TaskStatus bgHeader="bg-orange-600" />
        <TaskStatus bgHeader="bg-lime-600" />
        <TaskStatus bgHeader="bg-indigo-950" />
        <TaskStatus bgHeader="bg-rose-500" />
      </div>
      {/* stats component end */}
    </section>
  );
};

export default TaskBoard;
