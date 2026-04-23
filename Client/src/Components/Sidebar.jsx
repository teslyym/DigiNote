import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Notes", path: "/notes", icon: "📝" },
    { name: "Reminders", path: "/reminders", icon: "⏰" },
    { name: "Archive", path: "/archive", icon: "📦" },
  ];

  return (
    <div className="h-screen w-[260px] bg-white border-r border-slate-200 flex flex-col justify-between shadow-sm">
      {/* Top section */}
      <div>
        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-100">
          <Logo />
        </div>

        {/* Menu */}
        <div className="mt-6 flex flex-col gap-2 px-4">
          <p className="px-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Workspace
          </p>

          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={index} to={item.path}>
                <div
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Notebooks Section */}
        <div className="mt-8 px-4">
          <p className="px-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Notebooks
          </p>

          <div className="mt-3 flex flex-col gap-2">
            <div className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 cursor-pointer">
              📒 Personal
            </div>
            <div className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 cursor-pointer">
              💼 Work
            </div>
            <div className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 cursor-pointer">
              📚 Study
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-4 py-4 border-t border-slate-100">
        <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
          <p className="font-semibold">Digi-Note</p>
          <p className="text-xs mt-1">
            Stay organized and productive every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
