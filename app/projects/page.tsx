"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/src/components/sidebar"
import { Footer } from "@/src/components/footer"
import { ExternalLink, Github, Search, Code2, Smartphone, Globe, Brain, Server, Chrome, Bot } from "lucide-react"
import { useTheme } from "@/src/contexts/theme-context"

// Enhanced floating particles with trails
function FloatingParticles({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full ${
            isDark
              ? i % 2 === 0
                ? "bg-purple-400/20"
                : "bg-blue-400/20"
              : i % 2 === 0
                ? "bg-purple-500/30"
                : "bg-blue-500/30"
          }`}
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [0.3, 0.8, 0.3, 0.3],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Particle trails */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className={`absolute w-px ${isDark ? "bg-white/20" : "bg-gray-400/40"}`}
          style={{
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scaleY: [1, 2, 1],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const getProjectIcon = (tags: string[]) => {
    if (tags.some((tag) => tag.toLowerCase().includes("react native") || tag.toLowerCase().includes("expo"))) {
      return <Smartphone className="w-6 h-6" />
    }
    if (
      tags.some(
        (tag) =>
          tag.toLowerCase().includes("ai") ||
          tag.toLowerCase().includes("gemini") ||
          tag.toLowerCase().includes("llama"),
      )
    ) {
      return <Brain className="w-6 h-6" />
    }
    if (tags.some((tag) => tag.toLowerCase().includes("chrome") || tag.toLowerCase().includes("extension"))) {
      return <Chrome className="w-6 h-6" />
    }
    if (tags.some((tag) => tag.toLowerCase().includes("flask") || tag.toLowerCase().includes("express"))) {
      return <Server className="w-6 h-6" />
    }
    if (tags.some((tag) => tag.toLowerCase().includes("bot") || tag.toLowerCase().includes("chat"))) {
      return <Bot className="w-6 h-6" />
    }
    if (tags.some((tag) => tag.toLowerCase().includes("java"))) {
      return <Code2 className="w-6 h-6" />
    }
    return <Globe className="w-6 h-6" />
  }

  const projects = [
    {
      title: "Interview-AI",
      description:
        "An AI-powered interview preparation platform using Gemini APIs for role-specific questions and AI-driven webcam/audio feedback. Integrated Clerk for auth and Neon PostgreSQL for scalable storage.",
      tags: ["Next.js", "Express.js", "Node.js", "PostgreSQL", "Clerk", "Gemini API", "TypeScript", "Tailwind CSS", "Drizzle"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/Interview-AI",
      category: "ai",
      featured: true,
    },
    {
      title: "ACE Club Website",
      description:
        "Built the ACE club website and admin panel, implementing a real-time ticketing system with QR code generation and scan validation for event management.",
      tags: ["React.js", "Next.js", "Recoil", "Tailwind CSS", "ShadCN", "TypeScript"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb",
      category: "web",
      featured: true,
    },
    {
      title: "LeetPath Chrome Extension",
      description:
        "A Chrome extension for a LeetCode recommendation platform with personalized problem suggestions and Firebase synchronized login.",
      tags: ["React", "Tailwind CSS", "Firebase", "Flask", "Express.js", "JavaScript", "Manifest V3"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/LeetPath",
      category: "extension",
      featured: true,
    },
    {
      title: "AI Agent",
      description: "An AI agent that can support in research task with tool support",
      tags: ["Python", "langchain", "Ollama", "LLAMA"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/AI-Research-agent",
      category: "ai",
      featured: false,
    },
    {
      title: "Lox-Interpreter",
      description: "A interpreter from scratch, built with Java (Under-Development)",
      tags: ["Java"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/lox-interpreter",
      category: "compiler",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCn", "Framer Motion"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/Portfolio",
      category: "web",
      featured: false,
    },
    {
      title: "Meditation App",
      description: "A Mobile app for guided meditation with audio sessions",
      tags: ["ReactNative", "NativeWind", "Expo", "Android-Studio", "JavaScript"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/Meditate",
      category: "mobile",
      featured: false,
    },
    {
      title: "Paste Jet",
      description:
        "Backend for Paste Jet, a pastebin application built with Node.js and Express. It allows users to create, share, and manage text snippets securely using a private URL.",
      tags: ["JavaScript", "Express.js", "Node.js"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/pasteJet",
      category: "backend",
      featured: false,
    },
    {
      title: "AI Chatbot",
      description:
        "Built an AI Chat Bot using Hugging Face Transformers, Flask, and React. The chatbot can answer questions and engage in natural conversations.",
      tags: ["React", "Hugging Face", "Flask", "Python", "JavaScript"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/AIChatBot",
      category: "ai",
      featured: false,
    },
    {
      title: "To-do List Application",
      description: "A simple Todo application built using Flask, HTML, CSS",
      tags: ["Flask", "Python", "HTML", "CSS"],
      demoUrl: "",
      githubUrl: "https://github.com/vijay-sb/Todo-App-Flask-",
      category: "web",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", name: "ALL", count: projects.length },
    { id: "ai", name: "AI & ML", count: projects.filter((p) => p.category === "ai").length },
    { id: "mobile", name: "MOBILE", count: projects.filter((p) => p.category === "mobile").length },
    { id: "web", name: "WEB", count: projects.filter((p) => p.category === "web").length },
    { id: "extension", name: "EXTENSIONS", count: projects.filter((p) => p.category === "extension").length },
    { id: "backend", name: "BACKEND", count: projects.filter((p) => p.category === "backend").length },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main
      className={`min-h-screen relative transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
    >
      <FloatingParticles isDark={isDark} />
      <Navbar />

      <div className="pt-24 pb-16 px-8 sm:px-12 lg:px-16 max-w-none relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[60vh] flex items-center justify-between mb-20"
        >
          {/* Left Side - Main Title */}
          <div className="max-w-2xl">
            <h1
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              MY
              <br />
              PROJECTS
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mt-8 text-lg font-mono transition-colors duration-500 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    isDark ? "bg-green-400" : "bg-red-500"
                  }`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
                SHOWCASE OF MY WORK
              </div>
            </motion.div>
          </div>

          {/* Right Side - Project Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block text-right"
          >
            <h2
              className={`text-5xl xl:text-6xl font-black leading-none tracking-tight mb-4 transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {projects.length}+
              <br />
              <span className={`transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                PROJECTS
              </span>
            </h2>
            <div
              className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ● AI & MACHINE LEARNING
              <br />● WEB APPLICATIONS
              <br />● MOBILE DEVELOPMENT
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="relative">
                <Search
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="SEARCH PROJECTS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full border-0 border-b-2 bg-transparent pl-12 pr-4 py-4 text-lg font-mono tracking-wider transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                    isDark
                      ? "border-white/20 text-white placeholder:text-gray-500"
                      : "border-gray-300 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 font-mono text-sm tracking-wider transition-all duration-300 ${
                      selectedCategory === category.id
                        ? isDark
                          ? "bg-white text-black"
                          : "bg-gray-900 text-white"
                        : isDark
                          ? "text-gray-300 hover:text-white border border-white/20 hover:border-white/40"
                          : "text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2
            className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            ALL PROJECTS ({filteredProjects.length})
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div
                className={`text-2xl font-black mb-4 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                NO PROJECTS FOUND
              </div>
              <p className={`font-mono transition-colors duration-500 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 text-purple-400">{getProjectIcon(project.tags)}</div>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-black mb-2 transition-colors duration-500 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.title.toUpperCase()}
                      </h3>
                      {project.featured && (
                        <div className="text-purple-400 font-mono text-sm mb-2">FEATURED PROJECT</div>
                      )}
                      <p
                        className={`text-lg leading-relaxed mb-4 transition-colors duration-500 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-mono border transition-colors duration-500 ${
                              isDark ? "border-white/20 text-gray-400" : "border-gray-300 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 font-mono text-sm tracking-wider transition-colors ${
                              isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            DEMO
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 font-mono text-sm tracking-wider transition-colors ${
                            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          CODE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`h-px transition-colors duration-500 ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}
