"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/vijay-sb",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/vijaysb06",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/_jay_418",
      label: "Instagram",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vijaysb2006@gmail.com",
      label: "Email",
    },
  ];

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <footer
      className={`relative mt-20 backdrop-blur-lg border-t pt-16 pb-8 px-6 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-transparent to-black/80 border-white/10"
          : "bg-gradient-to-b from-transparent to-gray-100/80 border-gray-200/50"
      }`}
    >
      {/* Decorative elements */}
      <div
        className={`absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10 transition-colors duration-500 ${
          isDark ? "bg-purple-500/10" : "bg-purple-200/20"
        }`}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl -z-10 transition-colors duration-500 ${
          isDark ? "bg-blue-500/10" : "bg-blue-200/20"
        }`}
      />

      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16">
        {/* Main Footer Content - Following design pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[40vh] flex items-center justify-between mb-12"
        >
          {/* Left Side - Main Title */}
          <div className="max-w-2xl">
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              LET&apos;S
              <br />
              CONNECT
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mt-6 text-lg font-mono transition-colors duration-500 ${
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
                READY FOR NEW OPPORTUNITIES
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
            <h3
              className={`text-3xl xl:text-4xl font-black leading-none tracking-tight mb-4 transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              GET IN
              <br />
              <span
                className={`transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                TOUCH
              </span>
            </h3>
            <div
              className={`text-sm font-mono leading-relaxed transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ● vijaysb2006@gmail.com
              <br />● BANGLORE, INDIA
              <br />● OPEN TO REMOTE WORK
            </div>
          </motion.div>
        </motion.div>

        {/* Links and Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                    "0 0 0 4px rgba(147, 51, 234, 0.3)",
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500"
              >
                <span className="text-white font-bold">HR</span>
              </motion.div>
              <span
                className={`font-black text-transparent bg-clip-text bg-gradient-to-r text-xl font-mono tracking-wider transition-colors duration-500 ${
                  isDark
                    ? "from-purple-400 to-blue-400"
                    : "from-purple-600 to-blue-600"
                }`}
              >
                VIJAY.PORTFOLIO
              </span>
            </Link>
            <p
              className={`text-sm transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A full-stack developer blending elegant UIs with scalable backend
              systems. Building tools, products & ideas – one line at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className={`font-black mb-4 text-lg font-mono tracking-wider transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors flex items-center gap-1 group font-mono text-sm ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span className="group-hover:underline">
                      {link.label.toUpperCase()}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4
              className={`font-black mb-4 text-lg font-mono tracking-wider transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              CONNECT
            </h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: isDark ? "#a855f7" : "#7c3aed" }}
                  className={`transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p
              className={`text-sm transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {
                "I'm always open to connecting, collaborating, or just having a chat."
              }
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500 ${
            isDark ? "border-white/10" : "border-gray-200/50"
          }`}
        >
          <p
            className={`text-sm font-mono transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
             VIJAY.PORTFOLIO. Made with{" "}
            <Heart className="inline-block w-4 h-4 text-red-500" />
          </p>
          <div className="flex gap-6 text-sm font-mono">
            <p
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
