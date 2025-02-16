import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import Navbar from "../components/ui/Navbar"
import LeftSidebar from "../components/ui/LeftSidebar"
import RightSidebar from "../components/ui/RightSidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: "A basic Facebook clone built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex justify-center min-h-screen pt-16 bg-gray-100">
          <div className="flex w-full max-w-6xl">
            <LeftSidebar />
            <main className="flex-grow px-4 py-6">{children}</main>
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  )
}

