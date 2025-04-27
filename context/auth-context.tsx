"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type UserRole = "student" | "faculty" | null
type AuthStatus = "authenticated" | "unauthenticated" | "loading"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  institution: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  status: AuthStatus
  role: UserRole
  signIn: (email: string, password: string, role: UserRole) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>("loading")

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage or cookies)
    const storedUser = localStorage.getItem("edusphere_user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setStatus("authenticated")
    } else {
      setStatus("unauthenticated")
    }
  }, [])

  const signIn = async (email: string, password: string, role: UserRole) => {
    setStatus("loading")

    // This would be an API call in a real application
    // Simulating authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock user data based on role
    const mockUser: User = {
      id: "user123",
      name: role === "student" ? "Rahul Sharma" : "Dr. Priya Patel",
      email,
      role,
      institution: role === "student" ? "IIT Delhi" : "Delhi University",
      avatar: "/placeholder.svg?height=40&width=40",
    }

    setUser(mockUser)
    setStatus("authenticated")
    localStorage.setItem("edusphere_user", JSON.stringify(mockUser))
  }

  const signOut = () => {
    setUser(null)
    setStatus("unauthenticated")
    localStorage.removeItem("edusphere_user")
  }

  return (
    <AuthContext.Provider value={{ user, status, role: user?.role || null, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
