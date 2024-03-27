import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div
      className="h-screen w-screen p-4 overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(to right bottom, #ffcaf9, #f1c4fa, #e1bffb, #d0bafb, #bcb6fb)`,
      }}
    >
      <Navbar />
      <TaskBoard />
    </div>
  );
}

export default App;
