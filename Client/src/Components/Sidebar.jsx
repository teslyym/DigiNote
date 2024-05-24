import React from "react";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div>
      <div className="items-center flex  max-w-[1000px]  mx-auto justify-center">
        <Logo />
      </div>
      <div className="bg-[#10a6e9] w-[250px] px-5">
        <p>Notebooks</p>
        <h1>Untitled</h1>
        <h1>Notes</h1>
        <h1>Reminders</h1>
      </div>
    </div>
  );
};

export default Sidebar;
