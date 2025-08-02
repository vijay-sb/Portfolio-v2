"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  UserRound,
  MessageCircle,
  PenLine,
  BadgeCheck,
  FileBadge,
  Sun,
  Moon,
  Github,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "/about", icon: <UserRound className="w-4 h-4" />, label: "About" },
    {
      href: "/projects",
      icon: <Rocket className="w-4 h-4" />,
      label: "Projects",
    },
    {
      href: "/experience",
      icon: <PenLine className="w-4 h-4" />,
      label: "Experience",
    },
    {
      href: "/contact",
      icon: <MessageCircle className="w-4 h-4" />,
      label: "Contact",
    },
    {
      href: "/skills",
      icon: <BadgeCheck className="w-4 h-4" />,
      label: "Skills",
    },

    {
      href: "/resume",
      icon: <FileBadge className="w-4 h-4" />,
      label: "Resume",
    },
  ];

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full h-16 backdrop-blur-xl z-50 flex items-center px-6 lg:px-8 justify-between transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-black/80 border-b border-white/10 shadow-lg"
            : "bg-white/80 border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className={`font-mono text-sm font-bold transition-colors ${
            isDark
              ? "text-white hover:text-gray-300"
              : "text-gray-900 hover:text-gray-600"
          }`}
        >
          HEM
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link, index) => (
          <Link key={link.href} href={link.href} className="group relative">
            <motion.div
              className={`text-sm font-mono transition-colors duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {link.label.toUpperCase()}
              <motion.div
                className={`absolute -bottom-1 left-0 h-px rounded-full ${
                  isDark ? "bg-white" : "bg-gray-900"
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`transition-colors p-2 ${
            isDark
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Right Side Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <Link
          href="https://github.com/HEMANTHRAJA7"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${
            isDark
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Github className="w-4 h-4" />
        </Link>
        <motion.button
          onClick={toggleTheme}
          className={`transition-colors ${
            isDark
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isDark ? 0 : 360 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </motion.div>
        </motion.button>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 text-sm font-mono transition-colors duration-300 ${
              isDark
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            HIRE_ME
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 left-0 w-full backdrop-blur-xl py-6 px-6 flex flex-col gap-4 lg:hidden shadow-lg ${
              isDark
                ? "bg-black/95 border-b border-white/10"
                : "bg-white/95 border-b border-gray-200/50"
            }`}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 transition-colors py-2 font-mono text-sm ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label.toUpperCase()}</span>
                </Link>
              </motion.div>
            ))}
            <div
              className={`h-px my-2 ${isDark ? "bg-white/10" : "bg-gray-200"}`}
            ></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="https://github.com/HEMANTHRAJA7"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors py-2 font-mono text-sm ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </Link>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.1 }}
              onClick={toggleTheme}
              className={`flex items-center gap-3 transition-colors py-2 font-mono text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span>TOGGLE THEME</span>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 2) * 0.1 }}
              className="mt-4"
            >
              <Link href="/contact" className="block">
                <button
                  className={`w-full py-3 font-mono text-sm transition-colors ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  HIRE_ME
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
