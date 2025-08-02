"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/src/components/sidebar"
import { Footer } from "@/src/components/footer"
import { Mail, MapPin, Send, Phone, Github, Linkedin, Instagram } from "lucide-react"
import { useTheme } from "@/src/contexts/theme-context"

// Floating orbs background
function FloatingOrbsBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="min-h-[1800px] absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-xl ${
            isDark
              ? i % 3 === 0
                ? "bg-purple-500/10"
                : i % 3 === 1
                  ? "bg-blue-500/10"
                  : "bg-pink-500/10"
              : i % 3 === 0
                ? "bg-purple-300/20"
                : i % 3 === 1
                  ? "bg-blue-300/20"
                  : "bg-pink-300/20"
          }`}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 120 - 10}%`,
            top: `${Math.random() * 120 - 10}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines between orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className={`absolute h-px ${isDark ? "bg-gradient-to-r from-transparent via-white/10 to-transparent" : "bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"}`}
          style={{
            width: Math.random() * 200 + 100,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            transformOrigin: "center",
          }}
          animate={{
            rotate: [0, 360],
            scaleX: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting] = useState(false)
  const [isSubmitted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
    >
      <FloatingOrbsBackground isDark={isDark} />
      <Navbar />

      <div className="pt-24 pb-16 px-8 sm:px-12 lg:px-16 max-w-none">
        {/* Hero Section - Matching design pattern */}
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
              GET IN
              <br />
              TOUCH
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
                LET'S BUILD SOMETHING TOGETHER
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Info */}
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
              CONTACT
              <br />
              <span className={`transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                INFO
              </span>
            </h2>
            <div
              className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ● hemanthraja72@gmail.com
              <br />● +91 8610364790
              <br />● BANGLORE, INDIA
            </div>
          </motion.div>
        </motion.div>

        {/* Content Grid - Clean layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form - Takes up more space */}
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
              SEND MESSAGE
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`border rounded-lg p-6 transition-colors duration-500 ${
                  isDark
                    ? "bg-green-500/20 border-green-500/30 text-green-400"
                    : "bg-green-100 border-green-300 text-green-700"
                }`}
              >
                <p className="font-black text-lg">MESSAGE SENT!</p>
                <p className="text-sm mt-2 font-mono">{"I'll get back to you as soon as possible."}</p>
              </motion.div>
            ) : (
              <form className="space-y-8" action="https://formsubmit.co/cf65bb2776f35eabece1df2903d71ba5" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-black font-mono mb-3 tracking-wider transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full border-0 border-b-2 bg-transparent px-0 py-3 text-lg transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                        isDark
                          ? "border-white/20 text-white placeholder:text-gray-500"
                          : "border-gray-300 text-gray-900 placeholder:text-gray-400"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-black font-mono mb-3 tracking-wider transition-colors duration-500 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full border-0 border-b-2 bg-transparent px-0 py-3 text-lg transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                        isDark
                          ? "border-white/20 text-white placeholder:text-gray-500"
                          : "border-gray-300 text-gray-900 placeholder:text-gray-400"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-black font-mono mb-3 tracking-wider transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={`w-full border-0 border-b-2 bg-transparent px-0 py-3 text-lg transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                      isDark
                        ? "border-white/20 text-white placeholder:text-gray-500"
                        : "border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-black font-mono mb-3 tracking-wider transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full border-0 border-b-2 !bg-transparent px-0 py-3 text-lg transition-colors duration-500 focus:outline-none focus:border-purple-500 resize-none ${
                      isDark
                        ? "border-white/20 text-white placeholder:text-gray-500"
                        : "border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-mono text-sm tracking-wider transition-all duration-300 px-8 py-4 ${
                    isDark ? "bg-white text-black hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      SEND_MESSAGE
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.section>

          {/* Contact Details Sidebar */}
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
              CONTACT DETAILS
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <div
                    className={`font-mono text-sm font-black mb-2 tracking-wider transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    EMAIL
                  </div>
                  <a
                    href="mailto:vijaysb2006@example.com"
                    className={`text-lg hover:text-purple-400 transition-colors ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    hemanthraja72@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <div
                    className={`font-mono text-sm font-black mb-2 tracking-wider transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    PHONE
                  </div>
                  <a
                    href="tel:+918610364790"
                    className={`text-lg hover:text-purple-400 transition-colors ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    +91 8610364790
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <div
                    className={`font-mono text-sm font-black mb-2 tracking-wider transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    LOCATION
                  </div>
                  <div
                    className={`text-lg transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Banglore, India
                  </div>
                  <div
                    className={`text-sm mt-1 font-mono transition-colors duration-500 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Available for remote work worldwide
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Social Links - Clean horizontal layout */}
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
            CONNECT WITH ME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://github.com/HEMANTHRAJA7"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-6 transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-gray-100/50"
              }`}
            >
              <Github className={`w-8 h-8 transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`} />
              <div>
                <div
                  className={`font-black text-lg transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  GITHUB
                </div>
                <div
                  className={`font-mono text-sm transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  github.com/HEMANTHRAJA7
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/hemanthraja7"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-6 transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-gray-100/50"
              }`}
            >
              <Linkedin className="w-8 h-8 text-blue-400" />
              <div>
                <div
                  className={`font-black text-lg transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  LINKEDIN
                </div>
                <div
                  className={`font-mono text-sm transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  linkedin.com/in/hemanthraja7
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/hemanth_raja_7"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-6 transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-gray-100/50"
              }`}
            >
              <Instagram className="w-8 h-8 text-pink-400" />
              <div>
                <div
                  className={`font-black text-lg transition-colors duration-500 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  INSTAGRAM
                </div>
                <div
                  className={`font-mono text-sm transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  instagram.com/hemanth_raja_7
                </div>
              </div>
            </a>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}
