import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        {/* Mobile top bar */}
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-100 transition"
          >
            ☰ Menu
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
