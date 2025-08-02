"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Command,
  Cpu,
  Server,
  Code,
  Github,
  Globe,
  Mail,
  User,
  Info,
  Sparkles,
  Zap,
  FileCode,
  Briefcase,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/src/contexts/theme-context"
import { div } from "framer-motion/client"

type CommandResult = {
  command: string
  output: React.ReactNode
}

type CommandSuggestion = {
  command: string
  description: string
  icon: React.ReactNode
}

export function Terminal({ onClose }: { onClose?: () => void }) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandResult[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [suggestions, setSuggestions] = useState<CommandSuggestion[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const isDark = theme === "dark"

  // Initialize with welcome message based on theme
  useEffect(() => {
    setHistory([
      {
        command: "welcome",
        output: (
          <div className={`space-y-3 ${isDark ? "text-green-400" : "text-gray-700"}`}>
            <div
              className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}
            >
              <Command className="w-5 h-5" />
              <span>Welcome to My Terminal</span>
            </div>
            <p className="mb-2">Type commands to explore my portfolio.</p>
            <div
              className={`text-xs italic rounded-r ${
                isDark
                  ? "text-blue-300/70 border-l-2 border-blue-500/30 pl-3 py-1"
                  : "text-gray-500 border-l-2 border-gray-300 pl-3 py-1 bg-gray-50"
              }`}
            >
              Tip: Use arrow keys to navigate command history
            </div>
          </div>
        ),
      },
    ])
  }, [isDark])

  const allCommands: CommandSuggestion[] = [
    {
      command: "help",
      description: "Show available commands",
      icon: <Info className="w-4 h-4" />,
    },
    {
      command: "about",
      description: "Learn about me",
      icon: <User className="w-4 h-4" />,
    },
    {
      command: "skills",
      description: "View my technical skills",
      icon: <Code className="w-4 h-4" />,
    },
    {
      command: "projects",
      description: "See my recent projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      command: "contact",
      description: "Get my contact information",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      command: "social",
      description: "View my social media links",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      command: "github",
      description: "Open my GitHub profile",
      icon: <Github className="w-4 h-4" />,
    },
    {
      command: "clear",
      description: "Clear the terminal",
      icon: <X className="w-4 h-4" />,
    },
    {
      command: "whoami",
      description: "Display user information",
      icon: <User className="w-4 h-4" />,
    },
    {
      command: "date",
      description: "Show current date and time",
      icon: <Command className="w-4 h-4" />,
    },
    {
      command: "echo",
      description: "Print text to the terminal",
      icon: <Command className="w-4 h-4" />,
    },
    {
      command: "ls",
      description: "List directory contents",
      icon: <FileCode className="w-4 h-4" />,
    },
  ]

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    // Filter suggestions based on input
    if (input.trim()) {
      const filtered = allCommands.filter((cmd) => cmd.command.startsWith(input.trim().toLowerCase()))
      setSuggestions(filtered)
      setSelectedSuggestion(0)
      setShowSuggestions(filtered.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [input])

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const commandParts = input.trim().split(" ")
    const command = commandParts[0].toLowerCase()
    const args = commandParts.slice(1)
    let output: React.ReactNode

    // Process commands with theme-aware styling
    switch (command) {
      case "help":
        output = (
          <div className="space-y-4">
            <p className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <Command className="w-4 h-4" />
              <span>Available commands:</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {allCommands.map((cmd) => (
                <div
                  key={cmd.command}
                  className={`flex items-center gap-3 group p-2 rounded ${
                    isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-colors ${
                      isDark ? "text-gray-400 group-hover:text-blue-400" : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {cmd.icon}
                  </div>
                  <span className={`font-mono font-medium ${isDark ? "text-yellow-300" : "text-gray-900"}`}>
                    {cmd.command}
                  </span>
                  <span className={isDark ? "text-gray-400" : "text-gray-400"}>-</span>
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{cmd.description}</span>
                </div>
              ))}
            </div>
            <div
              className={`text-xs italic rounded-r ${
                isDark
                  ? "text-blue-300/70 border-l-2 border-blue-500/30 pl-3 py-1 mt-3"
                  : "text-gray-500 border-l-2 border-gray-300 pl-3 py-1 mt-3 bg-gray-50"
              }`}
            >
              Tip: Type a partial command and press Tab to autocomplete
            </div>
          </div>
        )
        break
      case "about":
        output = (
          <div className="space-y-4">
            <div className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <User className="w-4 h-4" />
              <span>About Me:</span>
            </div>
            <div
              className={`p-4 rounded-lg border ${
                isDark
                  ? "bg-gradient-to-r from-blue-950/30 to-purple-950/30 border-blue-500/20"
                  : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
              }`}
            >
              <p className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {"I'm Hemanth Raja, a full-stack developer passionate about creating elegant and functional web applications."}
              </p>
              <p className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                With expertise in both frontend and backend technologies, I build scalable solutions that deliver
                exceptional user experiences.
              </p>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {
                  "When I’m not coding, I enjoy exploring new technologies, crafting beautiful user interfaces, and playing sports like badminton and football."
                }
              </p>
            </div>
          </div>
        )
        break
      case "skills":
        output = (
          <div className="space-y-5">
            <div className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <span>Technical Skills:</span>
            </div>

            {/* Frontend */}
            <div>
              <p className={`font-medium mb-3 flex items-center gap-2 ${isDark ? "text-purple-400" : "text-blue-700"}`}>
                <Code className="w-4 h-4" />
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Redux",
                  "Zustand",
                  "Framer Motion",
                  "ShadCN",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={
                      isDark ? "border-purple-500/30 text-purple-300" : "border-blue-200 text-blue-700 bg-blue-50"
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <p className={`font-medium mb-3 flex items-center gap-2 ${isDark ? "text-green-400" : "text-green-700"}`}>
                <Server className="w-4 h-4" />
                Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "REST APIs",
                  "Prisma",
                  "Drizzle",
                  "JWT",
                  "Redis",
                  "Postman",
                  "Bruno",
                  "Ollama",
                  "Hugging Face",
                  "OpenAI",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={
                      isDark ? "border-green-500/30 text-green-300" : "border-green-200 text-green-700 bg-green-50"
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <p
                className={`font-medium mb-3 flex items-center gap-2 ${isDark ? "text-orange-400" : "text-orange-700"}`}
              >
                <Cpu className="w-4 h-4" />
                DevOps
              </p>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Azure", "CI/CD", "Docker Compose", "Nginx", "Grafana", "Prometheus"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={
                      isDark ? "border-orange-500/30 text-orange-300" : "border-orange-200 text-orange-700 bg-orange-50"
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className={`font-medium mb-3 flex items-center gap-2 ${isDark ? "text-blue-400" : "text-purple-700"}`}>
                <Cpu className="w-4 h-4" />
                Programming Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "Javascript", "Typescript", "Haskell", "C", "C++"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={
                      isDark ? "border-blue-500/30 text-blue-300" : "border-purple-200 text-purple-700 bg-purple-50"
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )
        break
      case "projects":
        output = (
          <div className="space-y-4">
            <div className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <Briefcase className="w-4 h-4" />
              <span>Recent Projects:</span>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Interview AI",
                  description: "An AI Based Interview Training Platform",
                  tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Drizzle", "Tailwind CSS", "clerk.io"],
                  color: isDark ? "from-blue-500/20 to-cyan-500/20" : "from-blue-50 to-cyan-50",
                  border: isDark ? "border-blue-500/30" : "border-blue-200",
                },
                {
                  name: "AI Research Agent",
                  description: "Real-time AI Research Agent with additional tools support",
                  tech: ["Langchain", "Python", "Ollama", "LLama-3"],
                  color: isDark ? "from-purple-500/20 to-pink-500/20" : "from-purple-50 to-pink-50",
                  border: isDark ? "border-purple-500/30" : "border-purple-200",
                },
                {
                  name: "Chronos",
                  description: "A self-hostable time table mobile app",
                  tech: ["React-Native", "Nativewind"],
                  color: isDark ? "from-green-500/20 to-emerald-500/20" : "from-green-50 to-emerald-50",
                  border: isDark ? "border-green-500/30" : "border-green-200",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${project.color} p-4 rounded-lg ${project.border} border`}
                >
                  <p className={`font-semibold mb-2 ${isDark ? "text-yellow-300" : "text-gray-900"}`}>{project.name}</p>
                  <p className={`mb-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs ${
                          isDark
                            ? "bg-black/20 border-gray-500/30 text-gray-300"
                            : "bg-white/50 border-gray-300 text-gray-700"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        break
      case "contact":
        output = (
          <div className="space-y-4">
            <div className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <Mail className="w-4 h-4" />
              <span>Contact Information:</span>
            </div>
            <div
              className={`p-4 rounded-lg border ${
                isDark
                  ? "bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border-blue-500/20"
                  : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Mail className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <a
                  href="mailto:hemanthraja72@gmail.com"
                  className={`hover:underline ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  hemanthraja72@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className={`w-4 h-4 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>Banglore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-600"}`} />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Open to freelance and full-time opportunities
                </span>
              </div>
            </div>
          </div>
        )
        break
      case "social":
        output = (
          <div className="space-y-4">
            <div className={`font-semibold flex items-center gap-2 ${isDark ? "text-blue-400" : "text-gray-900"}`}>
              <Globe className="w-4 h-4" />
              <span>Social Media:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="https://github.com/HEMANTHRAJA7"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  isDark
                    ? "bg-gray-900/50 hover:bg-gray-800/50 border-white/10"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <Github className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-700"}`} />
                <div>
                  <div className={`font-medium ${isDark ? "text-blue-400" : "text-gray-900"}`}>GitHub</div>
                  <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>github.com/HEMANTHRAJA7</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/hemanthraja7"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  isDark
                    ? "bg-gray-900/50 hover:bg-gray-800/50 border-white/10"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  in
                </div>
                <div>
                  <div className={`font-medium ${isDark ? "text-blue-400" : "text-gray-900"}`}>LinkedIn</div>
                  <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    linkedin.com/in/hemanthraja7
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/hemanth_raja_7"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  isDark
                    ? "bg-gray-900/50 hover:bg-gray-800/50 border-white/10"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <div className="w-5 h-5 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full"></div>
                <div>
                  <div className={`font-medium ${isDark ? "text-blue-400" : "text-gray-900"}`}>Instagram</div>
                  <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>instagram.com/hemanth_raja_7</div>
                </div>
              </a>
            </div>
          </div>
        )
        break
      case "github":
        window.open("https://github.com/HEMANTHRAJA7", "_blank")
        output = <p className={isDark ? "text-green-400" : "text-green-700"}>Opening GitHub profile in a new tab...</p>
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "whoami":
        output = (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              HR
            </div>
            <div>
              <div className={`font-medium ${isDark ? "text-green-400" : "text-gray-900"}`}>Hemanth Raja</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Full Stack Developer</div>
            </div>
          </div>
        )
        break
      case "date":
        output = (
          <div className={`font-mono ${isDark ? "text-green-400" : "text-gray-700"}`}>
            {new Date().toLocaleString()}
          </div>
        )
        break
      case "echo":
        output = (
          <div className={`font-mono ${isDark ? "text-blue-300" : "text-gray-700"}`}>{args.join(" ") || "<empty>"}</div>
        )
        break
      case "ls":
        output = (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { name: "projects", color: isDark ? "text-blue-400" : "text-blue-600" },
              { name: "resume.pdf", color: isDark ? "text-green-400" : "text-green-600" },
              { name: "blog", color: isDark ? "text-blue-400" : "text-blue-600" },
              { name: "contact.txt", color: isDark ? "text-green-400" : "text-green-600" },
              { name: "skills.json", color: isDark ? "text-green-400" : "text-green-600" },
              { name: "about.md", color: isDark ? "text-green-400" : "text-green-600" },
              { name: "images", color: isDark ? "text-blue-400" : "text-blue-600" },
              { name: "config.js", color: isDark ? "text-green-400" : "text-green-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.color} flex items-center gap-1`}>
                <FileCode className="w-4 h-4" />
                {item.name}
              </div>
            ))}
          </div>
        )
        break
      default:
        output = (
          <div>
            <p className={`mb-2 ${isDark ? "text-red-400" : "text-red-600"}`}>Command not found: {command}</p>
            <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Type{" "}
              <Badge
                variant="outline"
                className={
                  isDark
                    ? "bg-black/30 text-yellow-300 border-yellow-500/30"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }
              >
                help
              </Badge>{" "}
              to see available commands.
            </div>
          </div>
        )
    }

    setHistory([...history, { command: input, output }])
    setInput("")
    setHistoryIndex(-1)
    setShowSuggestions(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showSuggestions && (e.key === "Tab" || e.key === "ArrowRight")) {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion].command)
        setShowSuggestions(false)
      }
    } else if (showSuggestions && e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedSuggestion((prev) => (prev + 1) % suggestions.length)
    } else if (showSuggestions && e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedSuggestion((prev) => (prev - 1 + suggestions.length) % suggestions.length)
    } else if (!showSuggestions && e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].command)
      }
    } else if (!showSuggestions && e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].command)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (

    <motion.div
      className={`backdrop-blur-xl border rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen ? "fixed inset-4 z-50 rounded-xl" : "w-full max-w-6xl mx-auto" 
      } ${isDark ? "bg-black/90 border-white/10" : "bg-white/95 border-gray-200"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={focusInput}
    >
      {/* Terminal header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b ${
          isDark ? "bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-white/10" : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full ${isDark ? "bg-red-500" : "bg-red-400"}`}></div>
            <div className={`w-3 h-3 rounded-full ${isDark ? "bg-yellow-500" : "bg-yellow-400"}`}></div>
            <div className={`w-3 h-3 rounded-full ${isDark ? "bg-green-500" : "bg-green-400"}`}></div>
          </div>
          <div className={`w-px h-4 mx-2 ${isDark ? "bg-white/10" : "bg-gray-300"}`}></div>
          <TerminalIcon className={`w-4 h-4 ${isDark ? "text-green-400" : "text-gray-600"}`} />
          <span className={`text-sm font-mono ${isDark ? "text-gray-300" : "text-gray-700"}`}>hemanth@portfolio</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className={`p-1 transition-colors ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
            }`}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className={`p-1 transition-colors ${
                isDark ? "text-gray-400 hover:text-red-400" : "text-gray-500 hover:text-red-500"
              }`}
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className={`p-4 overflow-y-auto font-mono text-base space-y-4 transition-colors duration-300 ${
          isFullscreen ? "h-[calc(100vh-8rem)]" : "h-[700px]" // Changed from h-[500px] to h-[700px]
        } ${isDark ? "bg-gradient-to-b from-gray-950 to-black text-gray-300" : "bg-white text-gray-700"}`}
      >
        <AnimatePresence>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {item.command !== "welcome" && (
                <div className="flex items-center gap-2 text-base">
                  <span className={isDark ? "text-purple-400" : "text-blue-600"}>guest@portfolio</span>
                  <span className={isDark ? "text-gray-500" : "text-gray-400"}>~$</span>
                  <span className={isDark ? "text-white" : "text-gray-900"}>{item.command}</span>
                </div>
              )}
              <div className="pl-4">{item.output}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 relative text-base">
          <span className={isDark ? "text-purple-400" : "text-blue-600"}>guest@portfolio</span>
          <span className={isDark ? "text-gray-500" : "text-gray-400"}>~$</span>
          <div className="flex-1 flex items-center relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-1 bg-transparent border-none outline-none ${isDark ? "text-white" : "text-gray-900"}`}
              autoFocus
            />
            <span className={`animate-pulse ${isDark ? "text-white" : "text-gray-900"}`}>▋</span>

            {showSuggestions && suggestions.length > 0 && (
              <div
                className={`absolute top-full left-0 mt-1 w-full border rounded-md shadow-lg z-10 overflow-hidden ${
                  isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.command}
                    className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                      index === selectedSuggestion
                        ? isDark
                          ? "bg-gray-800"
                          : "bg-gray-50"
                        : isDark
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setInput(suggestion.command)
                      setShowSuggestions(false)
                      inputRef.current?.focus()
                    }}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {suggestion.icon}
                    </div>
                    <span className={`font-medium ${isDark ? "text-yellow-300" : "text-gray-900"}`}>
                      {suggestion.command}
                    </span>
                    <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                      {suggestion.description}
                    </span>
                    {index === selectedSuggestion && (
                      <span className={`ml-auto text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        Tab to complete
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Terminal footer */}
      <div
        className={`px-4 py-2 border-t flex justify-between items-center text-xs ${
          isDark ? "bg-gray-900/80 border-white/10 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-500"
        }`}
      >
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3" />
          <span>{"Type 'help' for commands"}</span>
        </div>
        <div>Press ESC to exit suggestions</div>
      </div>
    </motion.div>
  )
}
