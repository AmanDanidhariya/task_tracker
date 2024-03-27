import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" w-full text-2xl flex justify-between">
      <div className="font-bold ">TaskBoard</div>
      <div className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
