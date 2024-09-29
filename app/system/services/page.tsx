/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/NavBar";
import HyperText from "@/components/ui/HyperText";
import { motion } from "framer-motion";
import { services, servicesData } from "@/data";
import Footer from "@/components/Footer";
import Link from "next/link";
         


gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const servicesCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP Animations with ScrollTrigger
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        opacity: 25,
        y: 20,
        duration: 0,
        stagger: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% center top",
          toggleActions: "play pause reverse reset",
        },
      });
    }
    if (servicesCardRef.current) {
      gsap.fromTo(
        servicesCardRef.current.querySelectorAll(".service-card"),
        {
          opacity: 1,
          scale: 1.5,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesCardRef.current,
            start: "20% center top",
            toggleActions: "play repeat play none",
            invalidateOnRefresh: true,
          },
        }
      );
    }

    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        opacity: 25,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play pause reverse reset",
          invalidateOnRefresh: true,
        },
      });
    }

    if (testimonialsRef.current) {
      gsap.from(testimonialsRef.current.querySelectorAll(".testimonial"), {
        opacity: 30,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play pause reverse reset",
          invalidateOnRefresh: true,
        },
      });
    }
    if (servicesRef.current) {
      const sections = servicesRef.current.querySelectorAll(".service-section");

      sections.forEach((section, index) => {
        const content = section.querySelector(".service-content");
        const image = section.querySelector(".service-image");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "10% bottom",
              end: " 40%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          })
          .fromTo(
            content,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2 }
          )
          .fromTo(
            image,
            { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.2 },
            "-=0.3"
          );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="text-black w-full overflow-x-hidden"
      style={{
        backgroundColor: "#FEDCCE",
      }}
    >
      <Navbar />
      <div id="smooth-content" className="w-full">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          >
            <source src="/servicesBG.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-screen">
            <HyperText
              className="animate-hero text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]"
              text="IT Solutions for Tomorrow"
            />
            <p className="animate-hero text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-2 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
              Empowering businesses with cutting-edge technology
            </p>
            <Link href="/system/contact">
              <button className="animate-hero bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-xs sm:text-sm md:text-base">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesCardRef}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: "#FEDCCE",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service: any, index: any) => (
              <div
                key={index}
                className="service-card p-6 rounded-lg shadow-lg"
                style={{
                  backgroundColor: "#CDC2C4",
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-black">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          ref={servicesRef}
          className="min-h-screen"
          style={{
            backgroundColor: "#FEDCCE",
          }}
        >
          {services.map((service, index) => (
            <section
              key={service.title}
              className={`service-section flex flex-col md:flex-row items-center justify-between py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="service-content w-full md:w-1/2 mb-8 md:mb-0 md:px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  {service.description}
                </p>
              </div>

              <motion.div
                className="service-image w-full md:w-1/2 md:px-4"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </section>
          ))}
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
