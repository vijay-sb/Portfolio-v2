"use client";
import type React from "react";
import { Navbar } from "@/src/components/sidebar";
import { motion } from "framer-motion";
import Hero from "./hero/hero";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-pink-25 to-blue-50">
      <motion.div
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Navbar />
        <Hero />
      </motion.div>
    </div>
  );
};

export default Home;
