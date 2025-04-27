"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const students = [
  { name: "Ananya Sharma", interests: { "Artificial Intelligence": 92, "Machine Learning": 85, "Web Development": 76, "Blockchain": 60, "Data Science": 80 } },
  { name: "Rohan Mehta", interests: { "Artificial Intelligence": 68, "Machine Learning": 82, "Web Development": 88, "Blockchain": 55, "Data Science": 74 } },
  { name: "Sneha Patel", interests: { "Artificial Intelligence": 80, "Machine Learning": 70, "Web Development": 90, "Blockchain": 45, "Data Science": 85 } },
  { name: "Aryan Gupta", interests: { "Artificial Intelligence": 77, "Machine Learning": 65, "Web Development": 72, "Blockchain": 50, "Data Science": 78 } },
  { name: "Ishita Verma", interests: { "Artificial Intelligence": 88, "Machine Learning": 82, "Web Development": 79, "Blockchain": 62, "Data Science": 90 } },
  { name: "Karan Kapoor", interests: { "Artificial Intelligence": 60, "Machine Learning": 75, "Web Development": 80, "Blockchain": 58, "Data Science": 65 } },
  { name: "Priya Nair", interests: { "Artificial Intelligence": 85, "Machine Learning": 90, "Web Development": 72, "Blockchain": 63, "Data Science": 87 } },
  { name: "Aditya Rao", interests: { "Artificial Intelligence": 70, "Machine Learning": 78, "Web Development": 85, "Blockchain": 48, "Data Science": 73 } },
  { name: "Neha Joshi", interests: { "Artificial Intelligence": 82, "Machine Learning": 74, "Web Development": 77, "Blockchain": 55, "Data Science": 80 } },
  { name: "Rahul Deshmukh", interests: { "Artificial Intelligence": 75, "Machine Learning": 79, "Web Development": 82, "Blockchain": 60, "Data Science": 76 } },
  { name: "Meera Iyer", interests: { "Artificial Intelligence": 91, "Machine Learning": 87, "Web Development": 68, "Blockchain": 52, "Data Science": 88 } },
  { name: "Siddharth Jain", interests: { "Artificial Intelligence": 65, "Machine Learning": 72, "Web Development": 84, "Blockchain": 47, "Data Science": 70 } },
  { name: "Pooja Reddy", interests: { "Artificial Intelligence": 78, "Machine Learning": 80, "Web Development": 73, "Blockchain": 59, "Data Science": 79 } },
  { name: "Arjun Sinha", interests: { "Artificial Intelligence": 69, "Machine Learning": 68, "Web Development": 76, "Blockchain": 50, "Data Science": 71 } },
  { name: "Tanya Agarwal", interests: { "Artificial Intelligence": 87, "Machine Learning": 84, "Web Development": 79, "Blockchain": 64, "Data Science": 86 } },
  { name: "Vikram Khanna", interests: { "Artificial Intelligence": 63, "Machine Learning": 70, "Web Development": 81, "Blockchain": 53, "Data Science": 67 } },
  { name: "Divya Menon", interests: { "Artificial Intelligence": 84, "Machine Learning": 89, "Web Development": 74, "Blockchain": 61, "Data Science": 83 } },
  { name: "Nikhil Bansal", interests: { "Artificial Intelligence": 72, "Machine Learning": 77, "Web Development": 80, "Blockchain": 56, "Data Science": 75 } },
  { name: "Riya Sen", interests: { "Artificial Intelligence": 90, "Machine Learning": 86, "Web Development": 69, "Blockchain": 58, "Data Science": 89 } },
  { name: "Aman Choudhary", interests: { "Artificial Intelligence": 74, "Machine Learning": 76, "Web Development": 83, "Blockchain": 49, "Data Science": 72 } },
  { name: "Sanya Malhotra", interests: { "Artificial Intelligence": 79, "Machine Learning": 81, "Web Development": 75, "Blockchain": 54, "Data Science": 77 } },
  { name: "Harshita Dubey", interests: { "Artificial Intelligence": 86, "Machine Learning": 88, "Web Development": 71, "Blockchain": 65, "Data Science": 85 } },
  { name: "Kabir Thakur", interests: { "Artificial Intelligence": 67, "Machine Learning": 69, "Web Development": 78, "Blockchain": 52, "Data Science": 68 } },
  { name: "Lavanya Mishra", interests: { "Artificial Intelligence": 89, "Machine Learning": 85, "Web Development": 70, "Blockchain": 63, "Data Science": 87 } },
  { name: "Yash Arora", interests: { "Artificial Intelligence": 76, "Machine Learning": 73, "Web Development": 82, "Blockchain": 51, "Data Science": 74 } },
]

export default function KnowledgeGraphPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">🏆 Student Leaderboard - Knowledge Graph</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-600">{index + 1}. {student.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {Object.entries(student.interests).map(([interest, score], idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-md font-semibold text-gray-700">{interest}</span>
                    <span className="text-sm text-gray-500">{score}%</span>
                  </div>
                  <Progress value={score} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

