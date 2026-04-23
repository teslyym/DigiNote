import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    { name: "Notes", path: "/notes", icon: "📝" },
    { name: "Reminders", path: "/reminders", icon: "⏰" },
    { name: "Archive", path: "/archive", icon: "📦" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 z-50 min-h-screen border-r border-slate-200 bg-white shadow-sm transition-all duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        ${isCollapsed ? "lg:w-[90px]" : "lg:w-[260px]"}
        w-[260px] lg:static lg:translate-x-0`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-5">
          <div className={`${isCollapsed ? "lg:hidden" : "block"}`}>
            <Logo />
          </div>

          {isCollapsed && (
            <div className="hidden lg:flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-extrabold text-white shadow-lg">
              D
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 lg:block"
            >
              {isCollapsed ? "→" : "←"}
            </button>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-3 py-6">
          {!isCollapsed && (
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>
          )}

          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition duration-200 ${
                      isCollapsed ? "justify-center" : "gap-3"
                    } ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {!isCollapsed && <span>{item.name}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-auto px-3 pb-4">
          {!isCollapsed && user && (
            <div className="mb-3 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-sm font-semibold text-slate-800">
                {user.name || "User"}
              </p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
          )}

          <button
            onClick={handleLogout}
            className={`w-full rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 ${
              isCollapsed ? "text-center" : ""
            }`}
          >
            {isCollapsed ? "↩" : "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
