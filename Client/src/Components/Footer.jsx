import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Digi-Note helps you capture ideas, organize notes, and stay
              productive wherever you are.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Product
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link to="/" className="transition hover:text-blue-600">
                Home
              </Link>
              <Link to="/login" className="transition hover:text-blue-600">
                Login
              </Link>
              <Link to="/register" className="transition hover:text-blue-600">
                Sign Up
              </Link>
              <Link to="/notes" className="transition hover:text-blue-600">
                Notes
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#" className="transition hover:text-blue-600">
                About
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Privacy
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Terms
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a
                href="mailto:support@diginote.com"
                className="hover:text-blue-600"
              >
                support@diginote.com
              </a>
              <a href="#" className="hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Digi-Note. All rights reserved.</p>
          <p>Built for simple, smart, and secure note-taking.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
