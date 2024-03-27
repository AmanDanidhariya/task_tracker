import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="h-screen w-screen p-8"
      style={{
        backgroundImage: `linear-gradient(to right bottom, #ffcaf9, #f1c4fa, #e1bffb, #d0bafb, #bcb6fb)`,
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
