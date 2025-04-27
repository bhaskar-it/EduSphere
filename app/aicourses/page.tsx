"use client";

import React from "react";

// 50+ Artificial Intelligence Courses
const aiCourses = Array.from({ length: 55 }, (_, i) => ({
  id: `ai-course${i + 1}`,
  title: `AI Course ${i + 1}: Master ${[
    "Deep Learning",
    "Neural Networks",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Computer Vision",
    "Machine Learning",
    "Generative AI",
    "Robotics",
    "AI Ethics",
    "AI in Healthcare",
  ][i % 10]}`,
  link: "#", // Replace "#" with real course URLs
}));

export default function AICoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-purple-700">🤖 Artificial Intelligence Courses</h1>
        <p className="text-center text-gray-600">
          Explore 50+ curated AI courses to become an expert in Machine Learning, Deep Learning, NLP, and more!
        </p>

        {/* Grid of Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {aiCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-6xl text-center mb-4">🧠</div>
              <h2 className="text-lg font-bold text-center mb-2">{course.title}</h2>
              <div className="flex justify-center">
                <a
                  href={course.link}
                  className="text-purple-500 hover:underline text-sm"
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
