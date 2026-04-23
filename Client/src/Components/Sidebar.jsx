import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Notes", path: "/notes", icon: "📝" },
    { name: "Reminders", path: "/reminders", icon: "⏰" },
    { name: "Archive", path: "/archive", icon: "📦" },
  ];

  return (
    <aside className="w-[260px] min-h-screen border-r border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-5">
        <Logo />
      </div>

      <div className="px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <div className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.name} to={item.path}>
                <div
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="px-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Notebooks
        </p>

        <div className="flex flex-col gap-2">
          <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100">
            📒 Personal
          </div>
          <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100">
            💼 Work
          </div>
          <div className="cursor-pointer rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100">
            📚 Study
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
