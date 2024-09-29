/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import { jobListings, benefits} from "@/data";
import Footer from "@/components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);


const CareersPage = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const jobListingsRef = useRef<HTMLDivElement | null>(null);
  const benefitsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    const jobListings = jobListingsRef.current;
    const benefits = benefitsRef.current;

    // Use optional chaining to handle null values safely
    gsap.fromTo(
      heroSection?.querySelector("h1") ?? [],
      { opacity: 1, y: 50 },
      { opacity: 2, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      heroSection?.querySelector("p") ?? [],
      { opacity: 1, y: 30 },
      { opacity: 2, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      heroSection?.querySelector("button") ?? [],
      { opacity: 1, y: 20 },
      { opacity: 2, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.from(jobListings?.querySelectorAll(".job-card") ?? [], {
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: jobListings,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    gsap.from(benefits?.querySelectorAll(".benefit-card") ?? [], {
      opacity: 1,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefits,
        start: "top 70%",
      },
    });
  }, []);

  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLElement | null>
  ) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 min-h-screen">
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-white"
        >
          <Image
            src="/careers2.png"
            alt="Tech Workspace"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Join Our Team of Innovators
            </h1>
            <p className="text-xl mb-8">
              At TechSolutions, we're looking for bright, driven individuals who
              are passionate about pushing the boundaries of technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              onClick={() => scrollToSection(jobListingsRef)}
            >
              View Open Positions
            </motion.button>
          </div>
        </section>

        <section
          ref={jobListingsRef}
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                className="job-card bg-gray-200 rounded-lg shadow-md overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <Link href="/system/applyNow">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
                      // onClick={() => scrollToSection(benefitsRef)}
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          ref={benefitsRef}
          className="bg-blue-800  py-20 px-4 sm:px-6 lg:px-8 text-white"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card bg-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-200 text-blue-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
                onClick={() => scrollToSection(jobListingsRef)}
              >
                Join Our Team
              </motion.button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
