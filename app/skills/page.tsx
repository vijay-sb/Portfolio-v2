"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/src/components/sidebar";
import { Footer } from "@/src/components/footer";
import { Code, Database, Server, Globe, Cpu, BarChart } from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";

// Enhanced geometric background with pulsing shapes
function GeometricBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute border-2 ${
            isDark
              ? i % 3 === 0
                ? "border-purple-500/10"
                : i % 3 === 1
                ? "border-blue-500/10"
                : "border-pink-500/10"
              : i % 3 === 0
              ? "border-purple-400/10"
              : i % 3 === 1
              ? "border-blue-400/10"
              : "border-pink-400/10"
          } ${i % 2 === 0 ? "rounded-full" : ""}`}
          style={{
            width: Math.random() * 150 + 80,
            height: Math.random() * 150 + 80,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 0.7, 1],
            borderWidth: [2, 4, 2],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulsing dots */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute w-3 h-3 rounded-full ${
            isDark ? "bg-white/10" : "bg-gray-600/15"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Connecting lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className={`absolute h-px ${
            isDark
              ? "bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20"
              : "bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-pink-400/30"
          }`}
          style={{
            width: Math.random() * 300 + 200,
            left: `${Math.random() * 70}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

   const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux","Zustand", "ShadCn","Bootstrap"],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-green-400" />,
      color: "from-green-500 to-teal-500",
      borderColor: "border-green-500/30",
      skills: ["Node.js", "Express", "REST API", "Authentication", "JWT", "Flask", "Go", "Gin", "Elysia"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/30",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "MySQL", "SQLite", "Drizzle ORM", "Supabase", "Firebase"],
    },
    {
      title: "DevOps & Deployment",
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      skills: ["Docker", "AWS", "Google Cloud", "Grafana", "Prometheus", "MCP", "Azure"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design",],
    },
    {
      title: "Tools & Analytics",
      icon: <BarChart className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-purple-500",
      borderColor: "border-pink-500/30",
      skills: ["Git", "Linux", "Postman", "Bruno", "ELK Stack", "Snowflake", "Vim"],
    },
  ]

  const additionalSkills = [
                "Responsive Design",
                "UI/UX Design",
                "RESTful APIs",
                "OAuth",
                "JWT",
                "Version Control",
                "Database Management Systems",
                "Problem Solving",
                "Data Structures",
                "Algorithms",
                "Operating Systems",
                "Java",
                "Python",
                "Go",
                "TypeScript",
                "Haskel",
                "C++",
                "C",
              ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Creativity",
    "Attention to Detail",
    "Problem Solving",
  ];

  return (
    <main
      className={`min-h-screen relative transition-colors duration-500 ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
    >
      <GeometricBackground isDark={isDark} />
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
              SKILLS
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
                TECHNICAL EXPERTISE
              </div>
            </motion.div>
          </div>

          {/* Right Side - Skills Count */}
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
              {skillCategories.length}
              <br />
              <span
                className={`transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                CATEGORIES
              </span>
            </h2>
            <div
              className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ● FRONTEND & BACKEND
              <br />● DATABASE & DEVOPS
              <br />● TOOLS & FRAMEWORKS
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2
            className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            CORE TECHNOLOGIES
          </h2>

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 text-purple-400">{category.icon}</div>
                    <h3
                      className={`text-lg font-black font-mono tracking-wider transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * skillIndex }}
                        className={`px-4 py-2 font-mono text-sm border transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                            : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Additional Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2
            className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            ADDITIONAL EXPERTISE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div
                className={`text-sm font-mono transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                GENERAL SKILLS & CONCEPTS
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.03 * index }}
                    className={`px-4 py-2 font-mono text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div
                className={`text-sm font-mono transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                SOFT SKILLS
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.03 * index }}
                    className={`px-4 py-2 font-mono text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
