"use client"

import {
  Home,
  Users,
  MessageCircle,
  Wallet,
  Sun,
  Moon,
  Workflow,
  LogOut,
  LogOutIcon,
  BriefcaseBusiness,
} from "lucide-react"
import { useState } from "react"
import clsx from "clsx"

import { createFileRoute } from '@tanstack/react-router'
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { LoginForm } from "./login"

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("Home")

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode)
    }
  }

  const menu = [
    { label: "Home", icon: <Home size={20} /> },
    { label: "Works", icon: <BriefcaseBusiness size={20} /> },
    { label: "Team", icon: <Users size={20} /> },
    { label: "Messages", icon: <MessageCircle size={20} /> },
    { label: "Finance", icon: <Wallet size={20} /> },
    { label: "Logout", icon: <LogOutIcon size={20} /> },

  ]

  const renderContent = () => {
    switch (activeSection) {
      case "Works":
        return <LoginForm />
      case "Team":
        return <p>This is the Team section.</p>
      case "Messages":
        return <p>This is the Messages section.</p>
      case "Finance":
        return <p>This is the Finance section.</p>
      default:
        return <p>Select a section from the sidebar.</p>
    }
  }

  return (
    <div className={clsx("flex min-h-screen", darkMode ? "bg-gray-900 text-white" : "bg-white text-black")}>
      {/* Sidebar */}
      <aside className="relative w-64 bg-bg-indigo-900 p-6 space-y-6 flex flex-col justify-between">
        {/* Flickering Background */}
        <div className="absolute w-full left-0 right-0 top-0 h-full z-0">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/90 to-transparent" />
        </div>

        {/* Top Section with Theme Toggle */}
        <div className="relative z-10 space-y-4">
          <div className="flex justify-center items-center">
            <img src="/vikacodes03.png" alt="VikaCodes Logo" className="h-auto w-auto" />
          
          </div>

          <nav className="space-y-2 mt-0">
             
            {menu.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(item.label)}
                className={clsx(
                  "flex items-center space-x-3 w-full text-left px-2 py-2 rounded-md transition bg-[#4c148d]/10 hover:bg-white/10",
                  "text-white hover:text-orange-400",
                  activeSection === item.label && "bg-white/10"
                )}
              >
                <div className="p-2  ">{item.icon}</div>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-0">
        {/* <h2 className="text-2xl font-semibold mb-6">{activeSection}</h2> */}
        {renderContent()}
      </main>
    </div>
  )
}
