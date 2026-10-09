import React from "react";
import { Link } from "react-router-dom";
import {MapPin,BedDouble,Bath,Square,ArrowUpRight,} from "lucide-react";

export default function PropertyCard({ property }) {
return (
<Link
to={`/property/${property.id}`}
className="group overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>
{/* Image */} <div className="relative h-60 overflow-hidden bg-[#F0EFEB]">
<img
src={property.image}
alt={property.title}
onError={(e) => {
console.error(
"Property image failed to load:",
e.currentTarget.src
);
e.currentTarget.alt = "Property image unavailable";
}}
className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>
    {/* Property Type */}
    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#172033]">
      {property.type}
    </span>

    {/* Arrow */}
    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#172033]">
      <ArrowUpRight size={17} />
    </div>
  </div>

  {/* Content */}
  <div className="p-5">
    <h3 className="text-lg font-semibold text-[#172033]">
      {property.title}
    </h3>

    <div className="mt-2 flex items-center gap-2 text-sm text-[#667085]">
      <MapPin size={16} />
      {property.location}
    </div>

    <p className="mt-5 text-xl font-bold text-[#172033]">
      {property.price}
    </p>

    {/* Property Details */}
    <div className="mt-5 flex flex-wrap gap-4 border-t border-[#E7E5E0] pt-4 text-sm text-[#667085]">
      <div className="flex items-center gap-1.5">
        <BedDouble size={16} />
        {property.beds} Beds
      </div>

      <div className="flex items-center gap-1.5">
        <Bath size={16} />
        {property.baths} Baths
      </div>

      <div className="flex items-center gap-1.5">
        <Square size={16} />
        {property.area}
      </div>
    </div>
  </div>
</Link>
);
}
