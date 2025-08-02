"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/src/components/sidebar";
import { Footer } from "@/src/components/footer";
import { Calendar, MapPin, School, Heart, Globe } from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";

// Gentle breathing dots - representing life and growth
function BreathingDotsBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gentle breathing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute w-2 h-2 rounded-full ${
            isDark ? "bg-blue-400/15" : "bg-blue-500/20"
          }`}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle connecting lines that fade in and out */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className={`absolute h-px ${
            isDark
              ? "bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-500/15 to-transparent"
          }`}
          style={{
            width: 200 + Math.random() * 100,
            left: `${Math.random() * 60 + 20}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
    >
      <BreathingDotsBackground isDark={isDark} />
      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 pb-16 px-8 sm:px-12 lg:px-16 max-w-none">
          {/* Hero Section - Matching original design */}
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
                ABOUT
                <br />
                DEVELOPER
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
                  GET TO KNOW THE PERSON
                </div>
              </motion.div>
            </div>

            {/* Right Side - Profile Info */}
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
                HEMANTH
                <br />
                <span
                  className={`transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  RAJA
                </span>
              </h2>
              <div
                className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                ● FULL STACK DEVELOPER
                <br />● DEVOPS ENTHUSIAST
                <br />● IT UNDERGRADUATE
              </div>
            </motion.div>
          </motion.div>

          {/* Content Grid - Clean and minimal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Bio Section - Takes up more space */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-8"
            >
              <h2
                className={`text-2xl font-black mb-8 font-mono tracking-wider transition-colors duration-500 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                MY JOURNEY
              </h2>
              <div
                className={`space-y-6 text-lg leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  {
                    "Hello! I'm Hemanth Raja — a dedicated full-stack developer with a strong focus on crafting efficient, elegant, and user-centric web applications."
                  }
                </p>
                <p>
                  Passionate about developing scalable, efficient, and
                  user-centric software solutions, with expertise in web
                  development. Currently exploring DevOps technologies to push
                  the boundaries of what's possible.
                </p>
                <p>
                  Outside of development, I enjoy exploring emerging
                  technologies, crafting beautiful user interfaces, and playing
                  sports to maintain a healthy work-life balance.
                </p>
              </div>
            </motion.section>

            {/* Quick Info Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4"
            >
              <h3
                className={`text-2xl font-black mb-8 font-mono tracking-wider transition-colors duration-500 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                QUICK INFO
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <div
                      className={`font-mono text-sm font-bold transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      LOCATION
                    </div>
                    <div
                      className={`text-sm transition-colors duration-500 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Banglore, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <div
                      className={`font-mono text-sm font-bold transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      STATUS
                    </div>
                    <div
                      className={`text-sm transition-colors duration-500 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Open to Work
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <div
                      className={`font-mono text-sm font-bold transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      EDUCATION
                    </div>
                    <div
                      className={`text-sm transition-colors duration-500 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      IT Undergraduate
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Education - Simple and clean */}
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
              EDUCATION
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3
                  className={`text-xl font-black mb-2 transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  BTECH INFORMATION TECHNOLOGY
                </h3>
                <div className="text-purple-400 font-mono text-sm mb-4">
                  VELLORE INSTITUTE OF TECHNOLOGY, VELLORE • 2023 - 2027
                </div>
                <p
                  className={`leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Focused on programming fundamentals, algorithms, and data
                  structures. Building a strong foundation in computer science
                  principles.
                </p>
              </div>

              <div>
                <h3
                  className={`text-xl font-black mb-2 transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  HIGHER SECONDARY
                </h3>
                <div className="text-purple-400 font-mono text-sm mb-4">
                  MAHARISHI VIDYA MANDIR, HOSUR • 2021 - 2023
                </div>
                <p
                  className={`leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Completed with a focus on science and mathematics. Achieved
                  94% with strong performance in analytical subjects.
                </p>
              </div>
            </div>
          </motion.section>

          {/* What I Love Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20"
          >
            <h2
              className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              WHAT I LOVE
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-red-400" />
                  <h3
                    className={`text-lg font-black transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ENTERTAINMENT
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-purple-400 font-mono text-sm mb-1">
                      MOVIES & WEB SERIES
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Love exploring different genres from thrillers to comedy
                      series. Always up for a good Netflix binge session.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-red-400" />
                  <h3
                    className={`text-lg font-black transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    SPORTS & FITNESS
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-purple-400 font-mono text-sm mb-1">
                      FOOTBALL & FITNESS
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Passionate about football and maintaining an active
                      lifestyle. Regular gym sessions help me stay focused and
                      energized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Languages Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h2
              className={`text-2xl font-black mb-12 font-mono tracking-wider transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              LANGUAGES KNOWN
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Mother Tongue */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <h3
                    className={`text-lg font-black transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    MOTHER TONGUE
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-9">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className={`px-4 py-2 font-mono text-sm border transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  Kannada
                </motion.span>
              </div>

              {/* Others */}
              <div className="lg:col-span-3 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <h3
                    className={`text-lg font-black transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    OTHERS
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-9 mt-8">
                <div className="flex flex-wrap gap-3">
                  {["English", "Tamil", "Hindi"].map((language, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                      className={`px-4 py-2 font-mono text-sm border transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                      }`}
                    >
                      {language}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Beginner */}
              <div className="lg:col-span-3 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <h3
                    className={`text-lg font-black transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    BEGINNER
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-9 mt-8">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className={`px-4 py-2 font-mono text-sm border transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  Telugu
                </motion.span>
              </div>
            </div>
          </motion.section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
