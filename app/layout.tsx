import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EduSphere - Academic Collaboration Platform",
  description: "Connect, collaborate, and innovate with students and educators across India",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <SidebarProvider>
              <div className="flex min-h-screen">
                <AppSidebar />
                <main className="flex-1">{children}</main>
              </div>
              <Toaster />
            </SidebarProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
