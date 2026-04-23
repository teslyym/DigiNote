import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block group">
      <div className="flex items-center gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg transition duration-300 group-hover:scale-105">
          <span className="text-lg font-extrabold text-white">D</span>
        </div>

        <div className="leading-tight">
          <h1 className="text-[1.5rem] font-extrabold tracking-tight text-slate-900 transition duration-300 group-hover:text-blue-600">
            Digi<span className="text-blue-600">-Note</span>
          </h1>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">
            Makes life easier
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
