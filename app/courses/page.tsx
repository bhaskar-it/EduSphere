"use client";

import React, { useState } from "react";

// Only Courses Data
const courses = Array.from({ length: 25 }, (_, i) => ({
  id: `course${i + 1}`,
  title: `Course ${i + 1}: Learn ${["AI", "ML", "Blockchain", "Web Dev", "Cybersecurity"][i % 5]}`,
  link: "#", // Replace # with actual course links if you have them
}));

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600">🎓 Courses Hub</h1>
        <p className="text-center text-gray-600">Discover top free and paid courses to elevate your skills!</p>

        {/* Grid of Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-6xl text-center mb-4">🎓</div>
              <h2 className="text-xl font-bold text-center mb-2">{course.title}</h2>
              <div className="flex justify-center">
                <a
                  href={course.link}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
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
