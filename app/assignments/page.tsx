import React from "react";

const leetCodeAssignments = [
  { id: 1, title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
  { id: 2, title: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
  { id: 3, title: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
  { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
  { id: 5, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 6, title: "Binary Tree Inorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
  { id: 7, title: "Path Sum", difficulty: "Easy", link: "https://leetcode.com/problems/path-sum/" },
  { id: 8, title: "Symmetric Tree", difficulty: "Easy", link: "https://leetcode.com/problems/symmetric-tree/" },
  { id: 9, title: "Maximum Subarray", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 10, title: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },

  { id: 11, title: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
  { id: 12, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: 13, title: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
  { id: 14, title: "Letter Combinations of a Phone Number", difficulty: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
  { id: 15, title: "Generate Parentheses", difficulty: "Medium", link: "https://leetcode.com/problems/generate-parentheses/" },
  { id: 16, title: "Swap Nodes in Pairs", difficulty: "Medium", link: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
  { id: 17, title: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
  { id: 18, title: "Word Search", difficulty: "Medium", link: "https://leetcode.com/problems/word-search/" },
  { id: 19, title: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
  { id: 20, title: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/" },

  { id: 21, title: "Merge k Sorted Lists", difficulty: "Hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
  { id: 22, title: "Trapping Rain Water", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/" },
  { id: 23, title: "First Missing Positive", difficulty: "Hard", link: "https://leetcode.com/problems/first-missing-positive/" },
  { id: 24, title: "Longest Valid Parentheses", difficulty: "Hard", link: "https://leetcode.com/problems/longest-valid-parentheses/" },
  { id: 25, title: "Edit Distance", difficulty: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
];

export default function LeetCodeAssignmentsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">LeetCode Assignments 📚</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leetCodeAssignments.map((assignment) => (
            <div key={assignment.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{assignment.title}</h2>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                assignment.difficulty === "Easy"
                  ? "bg-green-100 text-green-700"
                  : assignment.difficulty === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {assignment.difficulty}
              </span>
              <a
                href={assignment.link}
                className="block text-indigo-500 hover:underline text-sm"
                target="_blank"
              >
                Solve Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
