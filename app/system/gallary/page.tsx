"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const GalleryPage = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null); // Specify the type explicitly

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      gsap.fromTo(
        gallery.querySelectorAll(".gallery-item"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gallery,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);



  const galleryItems = [
    { type: "image", src: "/gallary/meet1.jpg", alt: "Company event" },
    // { type: "video", src: "/gallary/video1.mp4" },
    { type: "image", src: "/gallary/cameras.jpg", alt: "Product launch" },
    { type: "image", src: "/gallary/meet2.jpg", alt: "Team building" },
    { type: "image", src: "/gallary/meet3.jpg", alt: "Office space" },
    // { type: "video", src: "/gallary/video2.mp4" },
    { type: "image", src: "/gallary/meet4.jpg", alt: "Product launch" },
    { type: "image", src: "/gallary/meet5.jpg", alt: "Product launch" },
    { type: "image", src: "/gallary/meet6.jpg", alt: "Product launch" },
    { type: "image", src: "/gallary/meet7.jpg", alt: "Product launch" },
  ];

  return (
    <div
      className="min-h-screen "
      style={{
        backgroundColor: "#faefe0",
      }}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-12 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Gallery
        </motion.h1>
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery Image"}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
