"use client";

import React, { useState } from "react";

// Random human names
const randomNames = [
  "Alex Carter", "Maya Singh", "Liam Johnson", "Olivia Brown", "Noah Lee",
  "Emma Davis", "Ethan Wilson", "Ava Moore", "James Taylor", "Sophia Anderson",
  "Lucas Thomas", "Isabella Martin", "Mason Jackson", "Mia White", "Logan Harris",
  "Charlotte Lewis", "Daniel Walker", "Amelia Hall", "Benjamin Young", "Harper Hernandez",
];

// Student/Mentor random profile pics
const userPics = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
  "https://randomuser.me/api/portraits/men/47.jpg",
  "https://randomuser.me/api/portraits/women/48.jpg",
];

const techProjects = [
  { title: "Machine Learning" },
  { title: "Artificial Intelligence" },
  { title: "Data Science" },
  { title: "Deep Learning" },
  { title: "Blockchain" },
  { title: "Cybersecurity" },
  { title: "Cloud Computing" },
  { title: "Internet of Things" },
  { title: "Computer Vision" },
  { title: "Big Data" },
];

// Generate Projects
const projects = Array.from({ length: 100 }, (_, i) => {
  const tech = techProjects[Math.floor(Math.random() * techProjects.length)];
  return {
    id: `p${i + 1}`,
    type: "project",
    title: tech.title,
    description: `A deep dive into ${tech.title}.`,
    firstLetter: tech.title.charAt(0), // Only the first letter for "avatar"
  };
});

// Generate Students
const students = Array.from({ length: 100 }, (_, i) => ({
  id: `s${i + 1}`,
  type: "student",
  name: randomNames[Math.floor(Math.random() * randomNames.length)],
  course: `Course ${((i % 5) + 1)}`,
  profilePic: userPics[Math.floor(Math.random() * userPics.length)],
}));

// Generate Mentors
const mentors = Array.from({ length: 100 }, (_, i) => ({
  id: `m${i + 1}`,
  type: "mentor",
  name: randomNames[Math.floor(Math.random() * randomNames.length)],
  expertise: `Expertise Area ${((i % 7) + 1)}`,
  profilePic: userPics[Math.floor(Math.random() * userPics.length)],
}));

const allFeed = [...projects, ...students, ...mentors];

// Shuffle function
function shuffleArray(array: any[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"all" | "project" | "student" | "mentor">("all");

  const shuffledFeed = shuffleArray(allFeed);

  const filteredFeed = shuffledFeed.filter((item) => {
    const combinedFields =
      (item.title ?? "") +
      (item.name ?? "") +
      (item.description ?? "") +
      (item.course ?? "") +
      (item.expertise ?? "");

    const matchesSearch = combinedFields.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = selectedTab === "all" || item.type === selectedTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      {/* Search and Tabs */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search projects, students, mentors..."
          className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          {["all", "project", "student", "mentor"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as any)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1) + "s"}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeed.length > 0 ? (
          filteredFeed.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition space-y-4 text-center"
            >
              {/* Image or First Letter */}
              {item.type === "project" ? (
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                  {item.firstLetter}
                </div>
              ) : (
                <img
                  src={item.profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              )}

              {/* Content */}
              {item.type === "project" && (
                <>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
                    View Project
                  </button>
                </>
              )}
              {item.type === "student" && (
                <>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">Student - {item.course}</p>
                  <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full">
                    View Profile
                  </button>
                </>
              )}
              {item.type === "mentor" && (
                <>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">Mentor - {item.expertise}</p>
                  <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 w-full">
                    Connect
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}
