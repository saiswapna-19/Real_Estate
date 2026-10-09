import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white px-6 py-5 shadow-sm md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          RealEstate
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>

          <Link to="/properties" className="hover:text-gray-500">
            Properties
          </Link>

          <Link to="/search" className="hover:text-gray-500">
            Search
          </Link>

          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>

          <Link
            to="/login-signup"
            className="rounded-lg bg-black px-5 py-2.5 text-white"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white p-6 shadow-md md:hidden">
          <div className="flex flex-col gap-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/properties" onClick={() => setMenuOpen(false)}>
              Properties
            </Link>

            <Link to="/search" onClick={() => setMenuOpen(false)}>
              Search
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link
              to="/login-signup"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-black px-5 py-2.5 text-center text-white"
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}