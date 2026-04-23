import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block group">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <div className="absolute inset-1 rounded-[14px] border border-white/20"></div>
          <span className="text-xl font-extrabold text-white">D</span>
        </div>

        {/* Text */}
        <div className="leading-tight">
          <h1 className="text-[1.6rem] sm:text-[1.8rem] font-extrabold tracking-tight text-slate-900 transition duration-300 group-hover:text-blue-600">
            Digi<span className="text-blue-600">-Note</span>
          </h1>
          <p className="text-[0.68rem] sm:text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Makes life easier
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
