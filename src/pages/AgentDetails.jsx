import React from "react";
import { Link, useParams } from "react-router-dom";
import {ArrowLeft,Mail,Phone,Building2,} from "lucide-react";
import { agents, properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function AgentDetails() {
  const { id } = useParams();

  const agent = agents.find(
    (item) => item.id === Number(id)
  );
  if (!agent) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#172033]">
          Agent Not Found
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
  const agentProperties = properties.filter(
    (property) => property.agent === agent.id
  );
  return (
    <div className="min-h-screen bg-[#F7F7F5] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          to="/properties"
          className="flex items-center gap-2 text-sm font-medium text-[#667085] transition hover:text-[#172033]"
        >
          <ArrowLeft size={17} />
          Back to Properties
        </Link>
        {/* Agent Profile */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white shadow-sm">
          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Image */}
            <div className="flex items-center justify-center bg-[#172033] p-8">
              <img
                src={agent.image}
                alt={agent.name}
                className="h-40 w-40 rounded-full object-cover ring-4 ring-white/20"
              />
            </div>
            {/* Information */}
            <div className="p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Real Estate Professional
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-[#172033] md:text-4xl">
                {agent.name}
              </h1>
              <p className="mt-2 text-[#667085]">
                {agent.role}
              </p>
              <p className="mt-5 max-w-2xl leading-7 text-[#667085]">
                {agent.description}
              </p>
              {/* Contact */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-[#F7F7F5] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#667085]">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#172033]">
                      {agent.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#F7F7F5] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#172033]">
                      {agent.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Properties */}
        <section className="mt-16">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Portfolio
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#172033]">
                Properties by {agent.name}
              </h2>

              <p className="mt-3 text-[#667085]">
                Explore properties currently handled by this agent.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-[#667085] md:flex">
              <Building2 size={17} />
              {agentProperties.length} Properties
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}

