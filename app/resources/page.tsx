"use client";

import React, { useState } from "react";

// Dummy data
const courses = Array.from({ length: 25 }, (_, i) => ({
  id: `course${i + 1}`,
  title: `Course ${i + 1}: Learn ${["AI", "ML", "Blockchain", "Web Dev", "Cybersecurity"][i % 5]}`,
  type: "course",
  link: "#",
}));

const hackathons = Array.from({ length: 25 }, (_, i) => ({
  id: `hackathon${i + 1}`,
  title: `Hackathon ${i + 1}: ${["InnovateX", "HackSprint", "BuildIt", "TechRun", "CodeWave"][i % 5]}`,
  type: "hackathon",
  link: "#",
}));

const tools = Array.from({ length: 25 }, (_, i) => ({
  id: `tool${i + 1}`,
  title: `Tool ${i + 1}: ${["GitHub", "Figma", "Postman", "VS Code", "Docker"][i % 5]}`,
  type: "tool",
  link: "#",
}));

const workshops = Array.from({ length: 25 }, (_, i) => ({
  id: `workshop${i + 1}`,
  title: `Workshop ${i + 1}: ${["AI Bootcamp", "Web3 Session", "DSA Workshop", "DevOps Crash Course", "Data Science Weekend"][i % 5]}`,
  type: "workshop",
  link: "#",
}));

const allResources = [...courses, ...hackathons, ...tools, ...workshops];

// Shuffle utility
function shuffleArray<T>(array: T[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ResourcesPage() {
  const [selectedTab, setSelectedTab] = useState<"all" | "course" | "hackathon" | "tool" | "workshop">("all");

  const shuffledResources = shuffleArray(allResources);

  const filteredResources = shuffledResources.filter((item) =>
    selectedTab === "all" ? true : item.type === selectedTab
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600">📚 Resources Center</h1>
        <p className="text-center text-gray-600">Explore Courses, Hackathons, Tools, and Workshops to boost your journey!</p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mt-8">
          {["all", "course", "hackathon", "tool", "workshop"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as any)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              {tab === "all"
                ? "All"
                : tab.charAt(0).toUpperCase() + tab.slice(1) + "s"}
            </button>
          ))}
        </div>

        {/* Grid of Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-6xl text-center mb-4">
                {/* Emoji based on type */}
                {resource.type === "course" && "🎓"}
                {resource.type === "hackathon" && "🚀"}
                {resource.type === "tool" && "🛠️"}
                {resource.type === "workshop" && "🎤"}
              </div>
              <h2 className="text-xl font-bold text-center mb-2">{resource.title}</h2>
              <div className="flex justify-center">
                <a
                  href={resource.link}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
