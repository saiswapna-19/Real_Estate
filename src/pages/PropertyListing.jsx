import React from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function PropertyListing() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            Properties
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
            Explore Our Properties
          </h1>

          <p className="mt-4 max-w-2xl text-[#667085]">
            Discover beautiful houses, apartments and villas in some
            of the most desirable locations.
          </p>
        </div>

        {/* Properties */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

      </div>
    </div>
  );
}