import React from "react";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-slate-50 min-h-screen">{children}</div>
    </div>
  );
};

export default AppLayout;
