import { useState } from "react";
import { useLocation } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import AgentCard from "../components/AgentCard";
import { properties, agents } from "../data/properties";

const images = [
  "/assets/properties/search1.png",
  "/assets/properties/search2.png",
  "/assets/properties/search3.png",
  "/assets/properties/search4.png",
  "/assets/properties/search5.png",
  "/assets/properties/search6.png",
];

export default function PropertySearch() {
  const  state = useLocation().state ||{};

  const [location, setLocation] = useState(state.location || "");
  const [type, setType] = useState(state.type || "");
  const [price, setPrice] = useState(state.price || "");
  const [bedrooms, setBedrooms] = useState(state.bedrooms || "");

  const filtered = properties.filter((p) => {
    const loc = !location ||
      String(p.location || "").toLowerCase().includes(location.toLowerCase());

    const typ = !type ||
      String(p.type || "").toLowerCase() === type.toLowerCase();

    const beds = !bedrooms ||
      (bedrooms === "4+"
        ? Number(p.beds ?? p.bedrooms ?? 0) >= 4
        : Number(p.beds ?? p.bedrooms ?? 0) === Number(bedrooms));

    const amount = Number(
      String(p.price || "").replace(/[₹,\s]/g, "")
    );

    const cost = !price ||
      (price === "under50" && amount < 50) ||
      (price === "50to100" && amount >= 50 && amount <= 100) ||
      (price === "above100" && amount > 100);

    return loc && typ && beds && cost;
  });

  const reset = () => {
    setLocation("");
    setType("");
    setPrice("");
    setBedrooms("");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Search Properties
        </h1>
        <p className="mb-8 text-gray-500">
          Find a property that suits you.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search location"
            className="rounded-xl border p-3 outline-indigo-500"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl border bg-white p-3"
          >
            <option value="">All property types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-xl border bg-white p-3"
          >
            <option value="">Any price</option>
            <option value="under50">Under ₹50 Lakhs</option>
            <option value="50to100">₹50–100 Lakhs</option>
            <option value="above100">Above ₹1 Crore</option>
          </select>

          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="rounded-xl border bg-white p-3"
          >
            <option value="">Any bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4+">4+ Bedrooms</option>
          </select>

          <div className="sm:col-span-2 lg:col-span-4">
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              <RotateCcw size={16} /> Reset Filters
            </button>
          </div>
        </div>

        <h2 className="mb-5 text-xl font-bold text-gray-900">
          Available Properties ({filtered.length})
        </h2>

        {filtered.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const i = properties.findIndex((item) => item.id === p.id);
              return (
                <PropertyCard
                  key={p.id}
                  property={{
                    ...p,
                    image: images[(i < 0 ? 0 : i) % images.length],
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-10 text-center text-gray-500">
            No properties found. Try changing the filters.
          </div>
        )}

        {agents?.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Meet Our Agents
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent, i) => (
                <AgentCard key={agent.id ?? i} agent={agent} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
