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
    title: "Software Developer · Lead",
    company: "Pragati'26 | Amrita School of Business",
    period: "Jan. 2026 – Feb. 2026",
    location: "Coimbatore, India",
    description:
      "Led a 10-member dev team to ship Pragati 2026 end-to-end, managed sprint planning, and delivered registration, payment, and event management modules. Integrated PayU payment gateway with webhook validation and failure-handling. Managed production infrastructure with reverse proxies and Grafana + Prometheus monitoring, maintaining uptime during peak operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "PayU",
      "Grafana",
      "Prometheus",
      "Docker",
    ],
    type: "Internship",
  },
  {
    title: "Software Developer",
    company: "Anokha 2026 | Amrita Vishwa Vidyapeetham",
    period: "Dec. 2025 – Jan. 2026",
    location: "Coimbatore, India",
    description:
      "Built the primary public-facing site for Anokha 2026, handling peak concurrent registrations for 5,000+ participants. Developed admin panels for 100+ organizers to manage participant approvals and event workflows. Deployed and monitored production servers using Grafana dashboards to maintain uptime during high traffic spikes.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "Grafana",
      "PostgreSQL",
    ],
    type: "Internship",
  },
  {
    title: "Full-Stack Developer",
    company: "Association for Computing Machinery | Amrita (ACM)",
    period: "Nov. 2024 – June 2025",
    location: "Coimbatore, India",
    description:
      "Led development of two open-source platforms (Winter of Code & Summer of Code) serving 1,000+ users. Built a real-time leaderboard using Server-Sent Events (SSE) for sub-second updates. Architected the frontend with React, Zustand, and GitHub OAuth; configured Redis caching and containerized the environment with Docker.",
    technologies: [
      "React",
      "Zustand",
      "PostgreSQL",
      "Redis",
      "SSE",
      "GitHub OAuth",
      "Docker",
      "TypeScript",
    ],
    type: "Part-Time",
  },
  {
    title: "Full-Stack Developer",
    company: "Amrita Center for Entrepreneurship (ACE)",
    period: "Sept. 2024 – Jan. 2025",
    location: "Coimbatore, India",
    description:
      "Built the ACE club website and admin panel using React, enabling management for 1,000+ users. Implemented a real-time ticketing system with QR code generation and scan validation for event check-ins. Created analytics dashboards with Chart.js to improve event visibility.",
    technologies: [
      "React.js",
      "Next.js",
      "Recoil",
      "Tailwind CSS",
      "TypeScript",
      "ShadCN",
      "Chart.js",
    ],
    type: "Internship",
  },
  {
    title: "Front-End Developer",
    company: "Loop.in | Event-Ticketing",
    period: "May 2025 – Present",
    location: "Remote",
    description:
      "Developed responsive event booking flows and payment integrations. Integrated 60+ backend API endpoints for authentication, payments, and event operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
    ],
    type: "Internship",
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
                ● Full Stack Development <br />● Mobile Development <br />●
                Modern Tools & Frameworks <br />● AI and Web 3 <br />● Problem Solving
                 <br />● Communication Skills
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
  {/* ACM Amsoc */}
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
      REAL-TIME OPEN SOURCE TRACKING
    </h3>
    <p
      className={`text-sm leading-relaxed transition-colors duration-500 ${
        isDark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      Led full-stack development of Winter & Summer of Code platforms for 1000+
      users. Built GitHub OAuth, state management, real-time leaderboards via
      SSE, and Dockerized local dev. Integrated PostgreSQL and Redis for
      scalable tracking across 100+ repositories.
    </p>
  </div>

  {/* ACE */}
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
      EVENT PLATFORM & TICKETING SYSTEM
    </h3>
    <p
      className={`text-sm leading-relaxed transition-colors duration-500 ${
        isDark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      Built ACE’s main website and admin panel using Next.js and Zustand.
      Developed a real-time ticketing system with QR-based check-ins and
      analytics dashboards, enhancing event management for 300+ participants.
    </p>
  </div>

  {/* Loop.in */}
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
      FRONTEND FOR EVENT BOOKING
    </h3>
    <p
      className={`text-sm leading-relaxed transition-colors duration-500 ${
        isDark ? "text-gray-300" : "text-gray-700"
      }`}
    >
      Developed responsive pages for user profiles, booking flow, and payment
      handling. Integrated 60+ backend APIs for seamless authentication,
      payments, and event operations on Loop.in&apos;s event-ticketing platform.
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
