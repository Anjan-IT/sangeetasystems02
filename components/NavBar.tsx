"use client"; // Ensures this component runs on the client-side
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/system/about", label: "About us" },
    { href: "/system/services", label: "Services" },
    { href: "/system/careers", label: "Careers" },
    { href: "/system/caseStudies", label: "Case Studies" },
  ];

  return (
    <header className="bg-background/[0.2] backdrop-blur dark:bg-black-200 fixed inset-x-0 top-0 z-[5000] text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          title="sangeeta-systems"
          className="relative flex items-center space-x-2"
        >
          <motion.img
            src="/SANGEETA.png"
            alt="SANGEETA Logo"
            width={80}
            height={80}
            className="w-auto h-[50px]"
            whileHover={{ scale: 1.1 }}
          />
          <div className="flex items-center">
            <span className="font-bold text-xl">SANGEETA</span>
            <span className="text-md ml-2">Systems</span>
          </div>
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex items-center mx-8 space-x-10 text-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <motion.span
                className="text-sm font-medium hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
          <Link href="/system/contact">
            <motion.span
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="mobile-menu lg:hidden bg-white dark:bg-black-200 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/system/contact">
              <motion.span
                className="block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.span>
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
