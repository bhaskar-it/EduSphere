"use client"

import {
  Home,
  Search,
  BookOpen,
  Users,
  MessageSquare,
  Lightbulb,
  BookMarked,
  Bell,
  Settings,
  LogOut,
  GraduationCap,
  FileText,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()
  const { user, status, signOut } = useAuth()

  // Skip rendering sidebar on login and register pages
  if (pathname === "/login" || pathname === "/register") {
    return null
  }

  const commonNavItems = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Explore", icon: Search, href: "/explore" },
    { title: "Projects", icon: Lightbulb, href: "/projects" },
    { title: "Queries", icon: MessageSquare, href: "/queries" },
    { title: "Resources", icon: BookMarked, href: "/resources" },
    { title: "Network", icon: Users, href: "/explore" },
  ]

  const studentNavItems = [
    { title: "Courses", icon: BookOpen, href: "/courses" },
    { title: "Assignments", icon: FileText, href: "/assignments" },
  ]

  const facultyNavItems = [
    { title: "My Courses", icon: BookOpen, href: "/faculty/courses" },
    { title: "Research", icon: GraduationCap, href: "/faculty/research" },
    { title: "Students", icon: Users, href: "/faculty/students" },
  ]

  const navItems =
    user?.role === "faculty" ? [...commonNavItems, ...facultyNavItems] : [...commonNavItems, ...studentNavItems]

  const userNavItems = [
    { title: "Notifications", icon: Bell, href: "/notifications" },
    { title: "Settings", icon: Settings, href: "/settings" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">EduSphere</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>My Topics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/aicourses">
                    <span>Artificial Intelligence</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/topics/web-dev">
                    <span>Web Development</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/topics/robotics">
                    <span>Robotics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {status === "authenticated" && (
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => signOut()} tooltip="Logout">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        {user ? (
          <div className="p-4">
            <Link href="/profile" className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar || "/placeholder.svg?height=40&width=40"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.institution}</span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="p-4 flex flex-col gap-2">
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
