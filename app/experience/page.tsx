"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/src/components/sidebar";
import { Footer } from "@/src/components/footer";
import { Briefcase, MapPin } from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";

// Professional timeline dots - representing career progression
function TimelineBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Timeline dots representing career milestones */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`milestone-${i}`}
          className={`absolute w-3 h-3 rounded-full ${
            isDark ? "bg-orange-400/20" : "bg-orange-500/25"
          }`}
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Connecting career path lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`path-${i}`}
          className={`absolute h-px ${
            isDark
              ? "bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
              : "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          }`}
          style={{
            width: 180 + Math.random() * 80,
            left: `${Math.random() * 60 + 20}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating achievement indicators */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`achievement-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            isDark ? "bg-green-400/30" : "bg-green-500/40"
          }`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Air Works India",
      period: "May 2025 – Jun. 2025",
      location: "Hosur, India",
      description:
        "Engineered a customer portal using React, Tailwind, and Recharts, enabling users to view and manage 10,000+ NRCs. Integrated real-time communication between engineers and clients, reducing resolution time by 40%. Optimized dynamic dashboard filters and graphs to improve data retrieval speed by 60%.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Recharts",
        "Real-time Communication",
      ],
      type: "Internship",
    },
    {
      title: "FrontEnd Intern",
      company: "SyncHubb, VIT Vellore",
      period: "Feb. 2025 – Apr. 2025",
      location: "Vellore, India",
      description:
        "Transformed 25+ Figma mockups into a responsive React/Tailwind app, cutting UI dev time by 30%. Built a central hackathon hub to manage team formation and event discovery for 300+ students. Improved internal team coordination by developing reusable components and clean layouts.",
      technologies: ["React", "Tailwind CSS", "Figma", "UI Development"],
      type: "Internship",
    },
    {
      title: "Placement Coordinator",
      company: "VIT Vellore",
      period: "Jul. 2025 – Present",
      location: "Vellore, India",
      description:
        "Coordinating placement drives for 1000+ students and liaising with recruiting firms to streamline onboarding. Managing pre-placement data, student outreach, and internal documentation processes.",
      technologies: ["Communication", "Coordination", "Data Management"],
      type: "Leadership",
    },
    {
      title: "Senior Operations & Research Executive",
      company: "Entrepreneurship Cell, VIT Vellore",
      period: "Jun. 2024 – May 2025",
      location: "Vellore, India",
      description:
        "Orchestrated 10+ experiential events for 200+ students, maintaining 100% on-time delivery. Created 5 gamified modules from market research, boosting participant retention by 20%. Executed logistics across vendor deals, venue planning, and volunteer assignments.",
      technologies: [
        "Event Management",
        "Market Research",
        "Logistics",
        "Gamification",
      ],
      type: "Leadership",
    },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
    >
      <TimelineBackground isDark={isDark} />
      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 pb-16 px-8 sm:px-12 lg:px-16 max-w-none">
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
                EXPERIENCE
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
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  PROFESSIONAL JOURNEY
                </div>
              </motion.div>
            </div>

            {/* Right Side - Experience Stats */}
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
                {experiences.length}+
                <br />
                <span
                  className={`transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ROLES
                </span>
              </h2>
              <div
                className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                ● Full Stack Development <br />● FRONTEND SPECIALIZATION <br />●
                Modern Tools & Frameworks <br />● Process Management <br />●
                Event Planning <br />● Communication Skills
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
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
              WORK EXPERIENCE
            </h2>

            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Timeline and Period */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <span
                        className={`font-mono text-xs px-2 py-1 rounded transition-colors duration-500 ${
                          isDark
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : "bg-purple-100 text-purple-700 border border-purple-200"
                        }`}
                      >
                        {experience.type.toUpperCase()}
                      </span>
                    </div>
                    <div
                      className={`font-mono text-sm mb-2 transition-colors duration-500 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span
                        className={`text-sm transition-colors duration-500 ${
                          isDark ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-9">
                    <h3
                      className={`text-2xl font-black mb-2 transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <div className="text-purple-400 font-mono text-lg mb-4">
                      {experience.company}
                    </div>
                    <p
                      className={`text-lg leading-relaxed mb-6 transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {experience.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4
                        className={`font-mono text-sm font-black mb-3 tracking-wider transition-colors duration-500 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        TECHNOLOGIES USED
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs font-mono border transition-colors duration-500 ${
                              isDark
                                ? "border-white/20 text-gray-400"
                                : "border-gray-300 text-gray-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Separator line */}
                    {index < experiences.length - 1 && (
                      <div
                        className={`h-px mt-8 transition-colors duration-500 ${
                          isDark ? "bg-white/10" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Gained Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <h2
              className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              KEY ACHIEVEMENTS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Air Works */}
              <div
                className={`p-6 border transition-colors duration-500 ${
                  isDark
                    ? "border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                    : "border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50"
                }`}
              >
                <h3
                  className={`text-lg font-black mb-3 transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  ENTERPRISE DASHBOARD ENGINEERING
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Built a dynamic portal for managing 10,000+ NRCs and
                  integrated real-time engineer-client communication, reducing
                  resolution time by 40%.
                </p>
              </div>

              {/* SyncHubb */}
              <div
                className={`p-6 border transition-colors duration-500 ${
                  isDark
                    ? "border-white/10 bg-gradient-to-br from-green-500/5 to-blue-500/5"
                    : "border-gray-200 bg-gradient-to-br from-green-50 to-blue-50"
                }`}
              >
                <h3
                  className={`text-lg font-black mb-3 transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  UI DEVELOPMENT & OPTIMIZATION
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Translated 25+ Figma mockups into responsive components and
                  launched a hackathon hub used by 300+ students, improving UI
                  dev speed by 30%.
                </p>
              </div>

              {/* Placement + E-Cell */}
              <div
                className={`p-6 border transition-colors duration-500 ${
                  isDark
                    ? "border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                    : "border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50"
                }`}
              >
                <h3
                  className={`text-lg font-black mb-3 transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  COORDINATION & EVENT MANAGEMENT
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Oversaw 10+ placement drives and student events; streamlined
                  documentation, improved outreach, and ensured 100% on-time
                  execution.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
