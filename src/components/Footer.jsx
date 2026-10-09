import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">RealEstate</h2>

          <p className="mt-3 max-w-sm text-gray-400">
            Find your perfect property and discover a place you will love
            to call home.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/search">Search</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>

          <div className="space-y-2 text-gray-400">
            <p>info@realestate.com</p>
            <p>+91 98765 43210</p>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © 2026 RealEstate. All rights reserved.
      </div>
    </footer>
  );
}