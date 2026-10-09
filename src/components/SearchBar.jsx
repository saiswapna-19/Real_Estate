import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home as HomeIcon } from "lucide-react";

export default function SearchBar() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    navigate("/search", {
      state: {
        location,
        type,
      },
    });
  };

  return (
    <div className="rounded-xl bg-white p-3 shadow-lg">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

        <div className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-3">
          <MapPin size={19} />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-3">
          <HomeIcon size={19} />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent outline-none"
          >
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-white"
        >
          <Search size={18} />
          Search
        </button>

      </div>
    </div>
  );
}