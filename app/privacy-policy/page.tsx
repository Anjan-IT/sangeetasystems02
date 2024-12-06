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
    <div className="min-h-screen">
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
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
          
          <div className="mb-16 mt-16">
            <h2 className="text-xl font-semibold mb-3">Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We currently do not offer refunds. Please review our policy carefully before making a purchase.
            </p>
          </div>
          

         
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{" "}
              <span className="font-semibold">info@sangeetasystems.com</span> or call us at{" "}
              <span className="font-semibold">+91 7396691030</span>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Registered Office: </span>
              Plot No.1579 V R Colony, Gopal, Serilingampally, Hyderabad,
              Telangana-500085.
            </p>
          </div>

          {/* <div className="mb-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Branch Office: </span>
              Plot no 185, Flat 402, Ragannaguda, Sagar Highway Rd. Hyderabad,
              Rangareddy, Telangana- 501510
            </p>
          </div> */}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
