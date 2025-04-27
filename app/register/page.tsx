"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Mail, Lock, User, School, Building2, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("student")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/login")
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto rounded-full bg-primary p-2">
            <BookOpen className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an Account</h1>
          <p className="text-sm text-muted-foreground">Join India's premier academic collaboration platform</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Register for EduSphere</CardTitle>
            <CardDescription>Fill in your details to create your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>I am a</Label>
                <RadioGroup
                  defaultValue="student"
                  className="flex space-x-4"
                  onValueChange={setUserType}
                  value={userType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student" className="cursor-pointer">
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="faculty" id="faculty" />
                    <Label htmlFor="faculty" className="cursor-pointer">
                      Faculty
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="first-name" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    placeholder={userType === "student" ? "name@university.edu" : "name@institution.edu"}
                    type="email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">{userType === "student" ? "University/College" : "Institution"}</Label>
                <div className="relative">
                  {userType === "student" ? (
                    <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  )}
                  <Input id="institution" className="pl-10" required />
                </div>
              </div>

              {userType === "student" && (
                <div className="space-y-2">
                  <Label htmlFor="degree">Degree Program</Label>
                  <Select required>
                    <SelectTrigger id="degree">
                      <SelectValue placeholder="Select your degree program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {userType === "faculty" && (
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" required />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} className="pl-10 pr-10" required />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
