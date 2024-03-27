import React from "react";
import Button from "./Button";

const AddNewTask = () => {
  return (
    <Button className="sm:w-[80%] sm:leading-tight sm:py-2 sm:mt-3 text-white bg-blue-900  w-full py-1 rounded-md font-bold text-md hover:bg-white hover:text-blue-900 hover:duration-200">
      Add New task
    </Button>
  );
};

export default AddNewTask;
