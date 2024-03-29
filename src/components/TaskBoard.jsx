import React, { useEffect, useRef, useState } from "react";
import Filters from "./Filters";
import AddNewTask from "./AddNewTask";
import CurrentTaskStatus from "./CurrentTaskStatus";
import CreateTaskModal from "./CreateTaskModal";

const TaskBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const taskStatusArray = [
    { statusHeader: "pending", bgHeader: "bg-slate-400" },
    {
      statusHeader: "in progress",
      bgHeader: "bg-orange-600",
    },
    {
      statusHeader: "completed",
      bgHeader: "bg-lime-600",
    },
    {
      statusHeader: "deployed",
      bgHeader: "bg-indigo-950",
    },
    {
      statusHeader: "deffered",
      bgHeader: "bg-rose-500",
    },
  ];

  const closeModal = () => setShowModal(false);

  return (
    <section className="mt-4 mb-4 w-full border-4 border-white h-full flex flex-col  rounded-xl p-4">
      <div className="sm:grid grid-cols-4 gap-4">
        <Filters />
        <div>
          <AddNewTask onClick={() => setShowModal(true)} />
          {showModal && <CreateTaskModal closeModal={closeModal} />}
        </div>
      </div>
      {/* status component start */}
      {/* <div className="grid grid-cols-10 gap-x-2">
        <CurrentTaskStatus bgHeader="bg-slate-400" />
        <CurrentTaskStatus bgHeader="bg-orange-600" />
        <CurrentTaskStatus bgHeader="bg-lime-600" />
        <CurrentTaskStatus bgHeader="bg-indigo-950" />
        <CurrentTaskStatus bgHeader="bg-rose-500" />
      </div> */}
      <div className="grid grid-cols-10 gap-x-2 flex-1">
        {taskStatusArray.map((status) => (
          <CurrentTaskStatus
            key={status.id}
            bgHeader={status.bgHeader}
            mainHeader={status.statusHeader}
          />
        ))}
      </div>
      {/* stats component end */}
    </section>
  );
};

export default TaskBoard;
