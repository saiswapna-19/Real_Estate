import React from "react";

export default function FilterSidebar() {
  return (
    <aside className="rounded-xl bg-white p-5 shadow-sm">

      <h2 className="text-lg font-semibold">
        Filters
      </h2>

      {/* Location */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>

        <select className="w-full rounded-lg border border-gray-200 px-3 py-3 outline-none">
          <option>All Locations</option>
          <option>Hyderabad</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Mumbai</option>
        </select>
      </div>

      {/* Property Type */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Property Type
        </label>

        <select className="w-full rounded-lg border border-gray-200 px-3 py-3 outline-none">
          <option>All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>
      </div>

      {/* Price */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Price Range
        </label>

        <select className="w-full rounded-lg border border-gray-200 px-3 py-3 outline-none">
          <option>Any Price</option>
          <option>Under ₹50 Lakhs</option>
          <option>₹50 - ₹1 Crore</option>
          <option>Above ₹1 Crore</option>
        </select>
      </div>

      {/* Bedrooms */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">
          Bedrooms
        </label>

        <select className="w-full rounded-lg border border-gray-200 px-3 py-3 outline-none">
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
        </select>
      </div>

      <button className="mt-6 w-full rounded-lg bg-black px-4 py-3 font-medium text-white">
        Apply Filters
      </button>
    </aside>
  );
}