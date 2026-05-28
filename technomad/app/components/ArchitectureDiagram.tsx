"use client";
import { useState } from "react";

export default function ArchitectureDiagram() {
  const [active, setActive] = useState("domain");

  const layers = {
    domain: {
      name: "Domain Layer",
      color: "bg-blue-500",
      desc: "Business entities & rules",
    },
    application: {
      name: "Application Layer",
      color: "bg-green-500",
      desc: "Use cases & orchestration",
    },
    infrastructure: {
      name: "Infrastructure Layer",
      color: "bg-yellow-500",
      desc: "DB, APIs, file systems",
    },
    presentation: {
      name: "Presentation Layer",
      color: "bg-purple-500",
      desc: "Controllers, endpoints",
    },
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 my-8">
      <h3 className="text-2xl font-bold mb-6">Clean Architecture Layers</h3>
      <div className="space-y-3 mb-6">
        {Object.entries(layers).map(([key, layer]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`w-full p-4 rounded text-white font-semibold transition ${
              active === key ? layer.color : "bg-gray-400"
            }`}
          >
            {layer.name}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border-2 border-gray-300 rounded">
        <p className="text-lg font-semibold">
          {layers[active as keyof typeof layers].name}
        </p>
        <p className="text-gray-700 mt-2">
          {layers[active as keyof typeof layers].desc}
        </p>
      </div>
    </div>
  );
}
