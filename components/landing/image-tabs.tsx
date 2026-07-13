"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ImageTabs() {
  const [activeTab, setActveTab] = useState<"organize" | "hired" | "manage">(
    "organize",
  )

  const handleClick = (tab: "organize" | "hired" | "manage") => {
    setActveTab(tab)
  }

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        {/** Tabs */}
        <div className="flex gap-2 justify-center mb-8">
          <Button
            onClick={() => handleClick("organize")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Organize Applications
          </Button>
          <Button
            onClick={() => handleClick("hired")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Get Hired
          </Button>
          <Button
            onClick={() => handleClick("manage")}
            className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "manage" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Manage Boards
          </Button>
        </div>

        {/** Images */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
          {activeTab === "organize" && (
            <Image
              src="/hero-images/hero1.png"
              alt="hero1"
              width={1200}
              height={800}
            />
          )}
          {activeTab === "hired" && (
            <Image
              src="/hero-images/hero2.png"
              alt="hero2"
              width={1200}
              height={800}
            />
          )}
          {activeTab === "manage" && (
            <Image
              src="/hero-images/hero3.png"
              alt="hero3"
              width={1200}
              height={800}
            />
          )}
        </div>
      </div>
    </section>
  )
}
