// "use client"

// import { useState } from "react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

// export default function PlagiarismPage() {
//   const [file1, setFile1] = useState<File | null>(null)
//   const [file2, setFile2] = useState<File | null>(null)
//   const [similarity, setSimilarity] = useState<number | null>(null)
//   const [loading, setLoading] = useState(false)

//   const handleCompare = async () => {
//     if (!file1 || !file2) return

//     setLoading(true)

//     const text1 = await file1.text()
//     const text2 = await file2.text()

//     const tfidfVector = (text: string) => {
//       const words = text.toLowerCase().match(/\b\w+\b/g) || []
//       const freqMap = new Map<string, number>()
//       words.forEach((word) => {
//         freqMap.set(word, (freqMap.get(word) || 0) + 1)
//       })
//       return freqMap
//     }

//     const cosineSimilarity = (map1: Map<string, number>, map2: Map<string, number>) => {
//       const allWords = new Set([...map1.keys(), ...map2.keys()])
//       let dotProduct = 0
//       let mag1 = 0
//       let mag2 = 0

//       allWords.forEach((word) => {
//         const a = map1.get(word) || 0
//         const b = map2.get(word) || 0
//         dotProduct += a * b
//         mag1 += a * a
//         mag2 += b * b
//       })

//       return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2))
//     }

//     const vector1 = tfidfVector(text1)
//     const vector2 = tfidfVector(text2)

//     const similarityScore = cosineSimilarity(vector1, vector2)

//     setSimilarity(similarityScore * 100)
//     setLoading(false)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
//       <Card className="w-full max-w-2xl shadow-2xl rounded-3xl border-none bg-white">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold text-blue-700">🔍 Plagiarism Checker</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col gap-6">
//           <div className="flex flex-col gap-4">
//             <label className="text-lg font-semibold text-gray-700">Upload Your Project:</label>
//             <Input 
//               type="file" 
//               accept=".txt,.js,.py,.java,.ts,.tsx" 
//               className="border-2 border-blue-300 rounded-lg"
//               onChange={(e) => setFile1(e.target.files?.[0] || null)} 
//             />
//           </div>

//           <div className="flex flex-col gap-4">
//             <label className="text-lg font-semibold text-gray-700">Upload Comparison Project:</label>
//             <Input 
//               type="file" 
//               accept=".txt,.js,.py,.java,.ts,.tsx" 
//               className="border-2 border-blue-300 rounded-lg"
//               onChange={(e) => setFile2(e.target.files?.[0] || null)} 
//             />
//           </div>

//           <Button 
//             onClick={handleCompare} 
//             disabled={!file1 || !file2 || loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl"
//           >
//             {loading ? "Checking..." : "Check Similarity"}
//           </Button>

//           {similarity !== null && (
//             <Alert className="mt-6 border border-blue-300 bg-blue-50 text-blue-700">
//               <AlertTitle className="text-2xl font-bold">
//                 Similarity Score: {similarity.toFixed(2)}%
//               </AlertTitle>
//               <AlertDescription className="text-lg mt-2">
//                 {similarity > 80
//                   ? "⚠️ High similarity detected! Possible plagiarism."
//                   : "✅ No major plagiarism found."}
//               </AlertDescription>
//             </Alert>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function PlagiarismPage() {
  const [file1, setFile1] = useState<File | null>(null)
  const [file2, setFile2] = useState<File | null>(null)
  const [similarity, setSimilarity] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCompare = async () => {
    if (!file1 || !file2) return

    setLoading(true)

    const text1 = await file1.text()
    const text2 = await file2.text()

    const tfidfVector = (text: string) => {
      const words = text.toLowerCase().match(/\b\w+\b/g) || []
      const freqMap = new Map<string, number>()
      words.forEach((word) => {
        freqMap.set(word, (freqMap.get(word) || 0) + 1)
      })
      return freqMap
    }

    const cosineSimilarity = (map1: Map<string, number>, map2: Map<string, number>) => {
      const allWords = new Set([...map1.keys(), ...map2.keys()])
      let dotProduct = 0
      let mag1 = 0
      let mag2 = 0

      allWords.forEach((word) => {
        const a = map1.get(word) || 0
        const b = map2.get(word) || 0
        dotProduct += a * b
        mag1 += a * a
        mag2 += b * b
      })

      return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2))
    }

    const vector1 = tfidfVector(text1)
    const vector2 = tfidfVector(text2)

    const similarityScore = cosineSimilarity(vector1, vector2)

    setSimilarity(similarityScore * 100)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">🔍 Plagiarism Checker</h1>
      
      <div className="flex flex-col max-w-4xl w-full mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <label className="text-xl font-semibold text-gray-700">Upload Your Project:</label>
          <Input 
            type="file" 
            accept=".txt,.js,.py,.java,.ts,.tsx" 
            className="border-2 border-blue-300 rounded-lg bg-white"
            onChange={(e) => setFile1(e.target.files?.[0] || null)} 
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-xl font-semibold text-gray-700">Upload Comparison Project:</label>
          <Input 
            type="file" 
            accept=".txt,.js,.py,.java,.ts,.tsx" 
            className="border-2 border-blue-300 rounded-lg bg-white"
            onChange={(e) => setFile2(e.target.files?.[0] || null)} 
          />
        </div>

        <Button 
          onClick={handleCompare} 
          disabled={!file1 || !file2 || loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl rounded-xl"
        >
          {loading ? "Checking..." : "Check Similarity"}
        </Button>

        {similarity !== null && (
          <Alert className="mt-6 border border-blue-300 bg-blue-50 text-blue-700">
            <AlertTitle className="text-2xl font-bold">
              Similarity Score: {similarity.toFixed(2)}%
            </AlertTitle>
            <AlertDescription className="text-lg mt-2">
              {similarity > 80
                ? "⚠️ High similarity detected! Possible plagiarism."
                : "✅ No major plagiarism found."}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
