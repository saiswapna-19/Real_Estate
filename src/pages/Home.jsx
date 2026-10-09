import React from "react";
import { Link } from "react-router-dom";
import {ArrowRight,ArrowUpRight,MapPin,ShieldCheck,Users,Search,} from "lucide-react";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import AgentCard from "../components/AgentCard";
import { properties, agents } from "../data/properties";

export default function Home() {
  return (
    <div className="bg-[#F7F7F5]">
      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden">
        <img
          src="/assets/hero/hero.jpg"
          alt="Beautiful modern home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#172033]/65" />

        <div className="relative mx-auto flex min-h-[650px] max-w-6xl items-center px-6 py-16 md:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6B77A]">
              Find your place
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Find a home that feels
              <span className="block text-[#D6B77A]">
                right for you.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Discover beautiful homes, modern apartments and luxury villas
              in locations you will love.
            </p>
            <div className="mt-9 max-w-3xl text-[#172033]">
              <SearchBar />
            </div>
            <div className="mt-8 flex flex-wrap gap-8 text-sm text-white/80">
              <div>
                <p className="text-2xl font-semibold text-white">500+</p>
                <p className="mt-1">Properties</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="mt-1">Locations</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">100+</p>
                <p className="mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Featured
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">
                Properties worth seeing
              </h2>
              <p className="mt-3 max-w-xl text-[#667085]">
                Explore some of our handpicked properties available for you.
              </p>
            </div>
            <Link
              to="/properties"
              className="hidden items-center gap-2 text-sm font-semibold text-[#172033] transition hover:text-[#B08D57] md:flex"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
          <Link
            to="/properties"
            className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[#172033] md:hidden"
          >
            View all properties
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      {/* Popular Locations */}
      <section className="border-y border-[#E7E5E0] bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              Explore
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">
              Popular locations
            </h2>
            <p className="mt-3 max-w-xl text-[#667085]">
              Find your next home in some of the most popular cities.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Hyderabad", "Bangalore", "Chennai", "Mumbai"].map(
              (city) => (
                <Link
                  key={city}
                  to="/properties"
                  className="group relative overflow-hidden rounded-2xl border border-[#E7E5E0] bg-[#F7F7F5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                      <MapPin size={19} className="text-[#172033]" />
                    </div>
                    <ArrowUpRight
                      size={19}
                      className="text-[#667085] transition group-hover:text-[#B08D57]"
                    />
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[#172033]">
                    {city}
                  </h3>
                  <p className="mt-1 text-sm text-[#667085]">
                    Explore properties
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      {/* Our Agents */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Our Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">
                Meet our experts
              </h2>
              <p className="mt-3 max-w-xl text-[#667085]">
                Work with experienced professionals who can help you find
                the right property.
              </p>
            </div>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}
          </div>

        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-[#172033] px-6 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B77A]">
              Why choose us
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A simpler way to find your next home
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              Everything you need to discover, compare and explore properties
              is right at your fingertips.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={22} />
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Verified Properties
              </h3>

              <p className="mt-2 leading-6 text-white/60">
                Browse carefully selected properties with clear information
                and useful details.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Users size={22} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                Expert Agents
              </h3>
              <p className="mt-2 leading-6 text-white/60">
                Connect with experienced agents who understand the local
                property market.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Search size={22} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                Easy Search
              </h3>
              <p className="mt-2 leading-6 text-white/60">
                Use simple search and filters to quickly discover properties
                that match your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-3xl bg-[#B08D57] px-6 py-14 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Your next move
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Ready to find your dream home?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
              Explore our collection of properties and discover a place
              that feels right for you.
            </p>
            <Link
              to="/properties"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#172033] transition hover:bg-[#F7F7F5]"
            >
              Explore Properties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
