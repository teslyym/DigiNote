import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Digi-Note helps you capture ideas, organize notes, and stay
              productive wherever you are.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Product
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link to="/" className="transition hover:text-blue-600">
                Home
              </Link>
              <Link to="/signup" className="transition hover:text-blue-600">
                Sign Up
              </Link>
              <Link to="/login" className="transition hover:text-blue-600">
                Login
              </Link>
              <Link to="/notes" className="transition hover:text-blue-600">
                Notes
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link to="/about" className="transition hover:text-blue-600">
                About Us
              </Link>
              <Link to="/contact" className="transition hover:text-blue-600">
                Contact
              </Link>
              <Link to="/privacy" className="transition hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social / Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a
                href="mailto:support@diginote.com"
                className="transition hover:text-blue-600"
              >
                support@diginote.com
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="transition hover:text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-blue-600">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Digi-Note. All rights reserved.</p>
          <p className="text-center md:text-right">
            Built for simple, smart, and secure note-taking.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
