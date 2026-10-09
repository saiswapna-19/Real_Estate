import React from "react";
import { Link, useParams } from "react-router-dom";
import {MapPin,BedDouble,Bath,Square,ArrowLeft,Phone,Mail,} from "lucide-react";
import { properties, agents } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#172033]">
          Property Not Found
        </h1>

        <Link
          to="/properties"
          className="mt-5 inline-block rounded-xl bg-[#172033] px-5 py-3 text-white"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  const agent = agents.find(
    (item) => item.id === property.agent
  );

  return (
    <div className="min-h-screen bg-[#F7F7F5] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          to="/properties"
          className="mb-7 flex items-center gap-2 text-sm font-medium text-[#667085] transition hover:text-[#172033]"
        >
          <ArrowLeft size={17} />
          Back to Properties
        </Link>

        {/* Property Image */}
        <div className="overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white shadow-sm">
          <img
            src={property.image}
            alt={property.title}
            className="h-[300px] w-full object-cover md:h-[520px]"
          />
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">

          {/* Property Information */}
          <div className="rounded-2xl border border-[#E7E5E0] bg-white p-6 shadow-sm md:p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              {property.type}
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-[#172033] md:text-4xl">
              {property.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-[#667085]">
              <MapPin size={18} />
              {property.location}
            </div>

            <p className="mt-6 text-3xl font-bold text-[#172033]">
              {property.price}
            </p>

            {/* Property Features */}
            <div className="mt-7 grid grid-cols-1 gap-4 border-y border-[#E7E5E0] py-6 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F7F5]">
                  <BedDouble size={19} />
                </div>

                <div>
                  <p className="text-xs text-[#667085]">
                    Bedrooms
                  </p>
                  <p className="mt-1 font-medium text-[#172033]">
                    {property.beds} Beds
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F7F5]">
                  <Bath size={19} />
                </div>

                <div>
                  <p className="text-xs text-[#667085]">
                    Bathrooms
                  </p>
                  <p className="mt-1 font-medium text-[#172033]">
                    {property.baths} Baths
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F7F5]">
                  <Square size={19} />
                </div>

                <div>
                  <p className="text-xs text-[#667085]">
                    Area
                  </p>
                  <p className="mt-1 font-medium text-[#172033]">
                    {property.area}
                  </p>
                </div>
              </div>

            </div>

            {/* Description */}
            <h2 className="mt-8 text-xl font-semibold text-[#172033]">
              About This Property
            </h2>

            <p className="mt-3 leading-7 text-[#667085]">
              {property.description}
            </p>

          </div>

          {/* Agent */}
          {agent && (
            <div className="h-fit rounded-2xl border border-[#E7E5E0] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Listed By
              </p>

              <div className="mt-5 flex items-center gap-4">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-[#172033]">
                    {agent.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#667085]">
                    {agent.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 text-sm text-[#667085]">
                  <Phone size={17} />
                  {agent.phone}
                </div>

                <div className="flex items-center gap-3 text-sm text-[#667085]">
                  <Mail size={17} />
                  {agent.email}
                </div>

              </div>

              <Link
                to={`/agent/${agent.id}`}
                className="mt-6 block rounded-xl bg-[#172033] px-5 py-3 text-center font-medium text-white transition hover:bg-[#26344D]"
              >
                View Agent
              </Link>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
