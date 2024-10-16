"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { privacyPolicySections } from "@/data";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  

  return (
    <div className="min-h-screen ">
      <Navbar />
      <motion.main
        className="container mx-auto px-4 mt-16 py-20 max-w-5xl"
        {...fadeIn}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg">
          {privacyPolicySections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
