"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalIcon } from "lucide-react";
import { Terminal } from "@/src/components/terminal";
import { useTheme } from "@/src/contexts/theme-context";

// Guitar String Grid Component
function GuitarStringGrid({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Use consistent viewport dimensions across browsers
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    // Initial resize
    resizeCanvas();

    const gridSize = 60;
    const dampening = 0.95;
    const springStrength = 0.02;
    const maxDisplacement = 50;

    // Create grid points with displacement tracking
    const gridPoints: Array<
      Array<{
        x: number;
        y: number;
        originalX: number;
        originalY: number;
        vx: number;
        vy: number;
      }>
    > = [];

    const initializeGrid = () => {
      gridPoints.length = 0;
      const rect = canvas.getBoundingClientRect();

      for (let x = 0; x <= rect.width + gridSize; x += gridSize) {
        const column = [];
        for (let y = 0; y <= rect.height + gridSize; y += gridSize) {
          column.push({
            x,
            y,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
          });
        }
        gridPoints.push(column);
      }
    };

    initializeGrid();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      resizeCanvas();
      initializeGrid();
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const mouse = mouseRef.current;

      // Update grid points based on mouse influence
      gridPoints.forEach((column) => {
        column.forEach((point) => {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 150);

          if (influence > 0) {
            const force = influence * influence * 2;
            const angle = Math.atan2(dy, dx);
            point.vx += Math.cos(angle + Math.PI) * force;
            point.vy += Math.sin(angle + Math.PI) * force;
          }

          // Spring back to original position
          const restoreForceX = (point.originalX - point.x) * springStrength;
          const restoreForceY = (point.originalY - point.y) * springStrength;

          point.vx += restoreForceX;
          point.vy += restoreForceY;

          // Apply dampening
          point.vx *= dampening;
          point.vy *= dampening;

          // Update position
          point.x += point.vx;
          point.y += point.vy;

          // Limit displacement
          const displaceX = point.x - point.originalX;
          const displaceY = point.y - point.originalY;
          const totalDisplace = Math.sqrt(
            displaceX * displaceX + displaceY * displaceY
          );

          if (totalDisplace > maxDisplacement) {
            const ratio = maxDisplacement / totalDisplace;
            point.x = point.originalX + displaceX * ratio;
            point.y = point.originalY + displaceY * ratio;
          }
        });
      });

      // Draw grid lines with consistent styling
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.15)";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw vertical lines
      for (let colIndex = 0; colIndex < gridPoints.length; colIndex++) {
        const column = gridPoints[colIndex];
        if (column.length > 1) {
          ctx.beginPath();
          ctx.moveTo(column[0].x, column[0].y);

          for (let i = 1; i < column.length; i++) {
            ctx.lineTo(column[i].x, column[i].y);
          }

          ctx.stroke();
        }
      }

      // Draw horizontal lines
      for (
        let rowIndex = 0;
        rowIndex < gridPoints[0]?.length || 0;
        rowIndex++
      ) {
        ctx.beginPath();
        let started = false;

        for (let colIndex = 0; colIndex < gridPoints.length; colIndex++) {
          const point = gridPoints[colIndex][rowIndex];
          if (point) {
            if (!started) {
              ctx.moveTo(point.x, point.y);
              started = true;
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }

        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const roles = ["FULL STACK", "REACT EXPERT", "NODE.JS DEV", "UI CREATOR"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full transition-colors duration-500 ${
        isDark
          ? "bg-black"
          : "bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50"
      }`}
      style={{
        minHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
            : "bg-transparent"
        }`}
      />

      {/* Guitar String Grid */}
      <GuitarStringGrid isDark={isDark} />

      {/* Mouse follower effect */}
      <motion.div
        className={`fixed w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-r from-blue-500/35 to-purple-500/35"
            : "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        }`}
        style={{ zIndex: 2 }}
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 500 }}
      />

      {/* Top Right Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-4 pt-[50px] lg:pt-0 right-4 sm:top-8 sm:right-8 lg:top-20 lg:right-8 z-10 text-right"
      >
        <div
          className={`text-xs sm:text-sm lg:text-md font-mono leading-relaxed transition-colors duration-500 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          ● BANGALORE, INDIA
          <br />● AVAILABLE FOR WORK
          <br />● FULL-TIME & FREELANCE
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between w-full max-w-none">
          {/* Left Side - Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 max-w-2xl"
          >
            <h1
              className={`text-6xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none tracking-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              SOFTWARE
              <br />
              DEVELOPER
              <div className="relative h-[60px] sm:h-[80px] lg:h-[100px]">
                <motion.span
                  className={`absolute right-0 top-0 text-[60px] sm:text-[80px] lg:text-[100px] transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  *
                </motion.span>
              </div>
            </h1>

            {/* Subtitle with rotating roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-lg lg:text-xl font-mono h-6 sm:h-7 lg:h-8 overflow-hidden transition-colors duration-500 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2"
                >
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
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              onClick={() => setShowTerminal(true)}
              className={`group mt-8 sm:mt-10 lg:mt-12 px-6 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <TerminalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                OPEN_TERMINAL
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 flex items-center justify-center gap-2 text-white font-mono text-xs sm:text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <TerminalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                OPEN_TERMINAL
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Side - Name */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block text-right flex-shrink-0 ml-8"
          >
            <motion.h2
              className={`text-4xl xl:text-5xl 2xl:text-6xl font-black leading-none tracking-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              VIJAY
              <br />
              <span
                className={`transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                DEVELOPER
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info - Fixed positioning to prevent overlap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 right-4 sm:left-8 sm:right-8 z-10"
      >
        <div className="flex justify-between items-end gap-4">
          <motion.div
            className={`text-xs sm:text-sm lg:text-md font-mono max-w-[calc(100%-60px)] lg:max-w-2xl lg:pl-8 transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <motion.div
              animate={{ x: [0, -100] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="inline-block"
            >
              ● FULL STACK  ● MOBILE APPLICATION DEV ● AI ● UI/UX
               ● PROBLEM SOLVER ● WEB3 ENTHUSIAST&nbsp;&nbsp;&nbsp;&nbsp;
            </motion.div>
          </motion.div>

          <motion.button
            onClick={scrollToNext}
            className={`flex-shrink-0 transition-colors ${
              isDark
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-500 hover:text-gray-700"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {/* Add scroll indicator if needed */}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Name - Shows on smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="lg:hidden absolute bottom-[80px] sm:bottom-[100px] right-4 sm:right-8 text-right z-10"
      >
        <h2
          className={`text-4xl sm:text-3xl md:text-4xl font-black leading-none tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          VIJAY
          <br />
          <span
            className={`transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            DEVELOPER
          </span>
        </h2>
      </motion.div>

      {/* Terminal Modal - Enhanced for cross-browser compatibility */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            style={{
              zIndex: 9999,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh", // Dynamic viewport height
            }}
            onClick={() => setShowTerminal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl overflow-hidden"
              style={{
                margin: "auto",
                position: "relative",
              }}
            >
              <Terminal onClose={() => setShowTerminal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}