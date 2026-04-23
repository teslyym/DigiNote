import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-12">
        {/* Top nav/logo */}
        <div className="animate-fadeInDown flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Background glow effects */}
        <div className="pointer-events-none absolute left-[-80px] top-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-10 right-[-60px] h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl"></div>

        {/* Hero content */}
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-2 lg:py-16">
          {/* Left text section */}
          <div className="animate-fadeInUp text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              Smarter note-taking starts here
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Capture your ideas,
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                anytime, anywhere.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Digi-Note helps you organize your thoughts, save important ideas,
              and access your notes whenever you need them. Fast, simple, and
              built for productivity.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/signup">
                <button className="w-full rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:w-auto">
                  Get Started Free
                </button>
              </Link>

              <Link to="/login">
                <button className="w-full rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 sm:w-auto">
                  Login
                </button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 lg:justify-start">
              <span>Fast access</span>
              <span className="hidden sm:inline">•</span>
              <span>Secure storage</span>
              <span className="hidden sm:inline">•</span>
              <span>Simple experience</span>
            </div>
          </div>

          {/* Right visual card section */}
          <div className="animate-float relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-white/40 bg-white/70 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800">
                  Your Notes Dashboard
                </h2>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 p-5 text-white shadow-md">
                  <p className="text-sm opacity-90">Today’s Focus</p>
                  <h3 className="mt-2 text-xl font-bold">
                    Build, write, and stay organized
                  </h3>
                  <p className="mt-2 text-sm opacity-90">
                    Keep all your important thoughts in one place.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Quick Note
                    </p>
                    <h4 className="mt-2 font-semibold text-slate-800">
                      Project Ideas
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Draft, edit, and revisit your ideas anytime.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Productivity
                    </p>
                    <h4 className="mt-2 font-semibold text-slate-800">
                      Easy Access
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Your notes are always available when you need them.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Why Digi-Note?
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <h5 className="font-semibold text-slate-700">Simple</h5>
                      <p className="mt-1 text-xs text-slate-500">
                        Clean and easy to use
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <h5 className="font-semibold text-slate-700">Secure</h5>
                      <p className="mt-1 text-xs text-slate-500">
                        Safe access to notes
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <h5 className="font-semibold text-slate-700">Fast</h5>
                      <p className="mt-1 text-xs text-slate-500">
                        Smooth experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating small card */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <p className="text-xs text-slate-400">Saved Notes</p>
              <h3 className="text-2xl font-bold text-blue-600">1,284</h3>
            </div>

            <div className="absolute -bottom-4 right-0 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <p className="text-xs text-slate-400">Productivity</p>
              <h3 className="text-lg font-bold text-slate-800">Stay focused</h3>
            </div>
          </div>
        </div>

        {/* Mobile auth buttons */}
        <div className="mt-2 flex flex-col gap-3 md:hidden">
          <Link to="/login">
            <button className="w-full rounded-full border border-blue-200 bg-white py-3 font-semibold text-slate-700 shadow-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full rounded-full bg-blue-600 py-3 font-semibold text-white shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.9s ease-out;
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.8s ease-out;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
