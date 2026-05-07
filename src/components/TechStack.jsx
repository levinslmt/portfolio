import React, { useState } from "react";
import { TechStack } from "../datas/TechStack";

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tools" },
];

const TechStackSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStack =
    activeFilter === "all"
      ? TechStack
      : TechStack.filter((tech) => tech.category === activeFilter);

  return (
    <section id="TechStack" className="px-6 md:px-0 py-12 scroll-mt-16">
      <div className="w-full">
        {/* Heading */}
        <h2 className="font-mono text-sm mb-2 text-gray-500 uppercase tracking-[0.3em]">
          Skills
        </h2>
        <h3 className="text-4xl font-semibold mb-10">Tech Stack</h3>

        {/* Filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-md text-sm transition border
            ${
              activeFilter === filter.value
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
            }
          `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
          {filteredStack.map((tech) => {
            const Icon = tech.icon; // icon is now a component
            return (
              <div
                key={tech.id}
                className=" rounded-xl py-3 flex flex-col items-center justify-center"
              >
                <Icon size={40} color={tech.color} className="mb-3" />
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
