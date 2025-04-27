"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Brain, Send, ThumbsUp, ThumbsDown, Bookmark, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EdubotPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! I'm EduBot, your AI academic assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Predefined responses to example questions
    const responses: { [key: string]: string } = {
      "What are the latest advancements in quantum computing?":
        "Quantum computing has seen several advancements in recent years. One of the key developments is the improvement of qubit coherence times and the development of error correction protocols. Companies like Google and IBM have made strides in building larger quantum computers with more qubits. Additionally, quantum supremacy has been demonstrated, where quantum computers solve specific problems faster than classical supercomputers. Researchers are also working on hybrid quantum-classical algorithms that combine quantum speedups with classical computing to solve real-world problems.",
      
      "How can I implement federated learning for privacy-preserving ML?":
        "Federated learning is an approach to machine learning that allows model training to happen across multiple decentralized devices or servers without sharing raw data. In federated learning, each device trains a local model using its data, and then only the model updates (gradients) are shared and aggregated to improve a global model. To implement federated learning for privacy, you can use techniques like differential privacy to ensure that sensitive information isn't inadvertently learned by the model. Frameworks such as TensorFlow Federated and PySyft make implementing federated learning easier, and there are also techniques like secure multi-party computation (SMPC) for additional privacy protection.",
      
      "What research methodologies are best for interdisciplinary studies?":
        "Interdisciplinary research often benefits from mixed-methods approaches, combining both qualitative and quantitative research methodologies. Qualitative methods, such as case studies, ethnography, and interviews, allow for deep understanding of context and human factors. On the other hand, quantitative methods, such as surveys, statistical modeling, and experiments, provide data-driven insights. Combining these methods allows for a holistic view of the research problem. Additionally, systematic reviews and meta-analyses are great tools to synthesize findings from multiple disciplines and create a comprehensive understanding of the topic.",
      
      "Can you recommend resources for learning about sustainable architecture?":
        "For learning about sustainable architecture, there are several valuable resources:\n" +
        "- *Books*: 'The Green House: New Directions in Sustainable Architecture' by Alanna Stang and Christopher Hight, and 'Sustainable Architecture: Sustainable Design for the Future' by David Bergman.\n" +
        "- *Courses*: The *Sustainable Architecture* course on Coursera, and *Energy-Efficient Buildings* by MIT OpenCourseWare.\n" +
        "- *Websites*: The U.S. Green Building Council (USGBC) provides numerous resources, including guidelines for LEED certification. The Green Building Council of Australia (GBCA) also offers a wealth of information on sustainable design practices.\n" +
        "- *Journals*: Publications like the 'Journal of Green Building' and 'Sustainable Cities and Society' are great for exploring cutting-edge research in the field.",
    }

    // Check if the user input matches any of the predefined example questions
    const botResponse = responses[input.trim()]

    if (botResponse) {
      const botMessage = {
        role: "bot",
        content: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    } else {
      // Default response when the input doesn't match any predefined questions
      setTimeout(() => {
        const botMessage = {
          role: "bot",
          content: "Sorry, I didn't understand your question. Could you rephrase it?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsLoading(false)
      }, 1500)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="rounded-full bg-primary p-2">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">EduBot</h1>
            <p className="text-muted-foreground">Your AI-powered academic assistant</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ask EduBot</CardTitle>
            <CardDescription>
              Get instant answers to your academic questions, research guidance, and learning resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto p-1">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <Avatar className="h-8 w-8">
                      {message.role === "bot" ? (
                        <>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="EduBot" />
                          <AvatarFallback>EB</AvatarFallback>
                        </>
                      ) : (
                        <>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>US</AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div>
                      <div
                        className={`rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                      >
                        <p>{message.content}</p>
                      </div>
                      <div
                        className={`text-xs text-muted-foreground mt-1 ${message.role === "user" ? "text-right" : "text-left"}`}
                      >
                        {message.timestamp}
                      </div>
                      {message.role === "bot" && (
                        <div className="flex gap-2 mt-2">
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="EduBot" />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce delay-75"></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="cursor-pointer">Machine Learning</Badge>
                <Badge className="cursor-pointer">Quantum Computing</Badge>
                <Badge className="cursor-pointer">Renewable Energy</Badge>
                <Badge className="cursor-pointer">Biotechnology</Badge>
                <Badge className="cursor-pointer">Robotics</Badge>
                <Badge className="cursor-pointer">Nanotechnology</Badge>
                <Badge className="cursor-pointer">Sustainable Architecture</Badge>
                <Badge className="cursor-pointer">Data Science</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
