import React from "react";
import Input from "./Input";
import PriorityList from "./PriorityList";

const Filters = () => {
  return (
    <div className="col-span-3 leading-tight">
      <p className="text-xl">Filter By:-</p>
      <div className="grid grid-cols-10 gap-x-4 mt-2 mb-2">
        <Input
          type="text"
          placeholder="Assignee"
          className="sm:placeholder:pl-4 py-1 placeholder:text-md sm:col-span-2 col-span-3 rounded"
        />

        <div className="sm:col-span-2 col-span-3">
          <PriorityList />
        </div>
        <div className="sm:col-span-2 col-span-3">date range</div>
      </div>
      <div className="grid grid-cols-12 my-4">
        <p className="text-xl col-span-1">Sort By:-</p>
        <PriorityList className="col-span-2" />
      </div>
    </div>
  );
};

export default Filters;
