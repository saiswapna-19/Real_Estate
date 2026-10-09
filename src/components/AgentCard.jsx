import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

export default function AgentCard({ agent }) {
  return (
    <Link
      to={`/agent/${agent.id}`}
      className="group relative overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Arrow */}
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F7F5] text-[#172033] transition group-hover:bg-[#B08D57] group-hover:text-white">
        <ArrowUpRight size={17} />
      </div>
      {/* Agent Image */}
      <img
        src={agent.image}
        alt={agent.name}
        className="h-24 w-24 rounded-full object-cover ring-4 ring-[#F7F7F5]"
      />
      {/* Agent Information */}
      <h3 className="mt-5 text-lg font-semibold text-[#172033]">
        {agent.name}
      </h3>
      <p className="mt-1 text-sm text-[#667085]">
        {agent.role}
      </p>
      {/* Properties */}
      <div className="mt-5 flex items-center gap-2 border-t border-[#E7E5E0] pt-4 text-sm text-[#667085]">
        <BriefcaseBusiness size={16} />
        <span>{agent.properties} Properties</span>
      </div>
    </Link>
  );
}
