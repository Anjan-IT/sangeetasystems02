/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 1,
            y: 0,
            x: 10,
            duration: 0.2,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: " bottom-=100",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }
  }, []);

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Our <span className="text-blue-700">Services</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 AAB396">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex"
          >
            <Link href="/system/contact">
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black bg-gray-100 dark:bg-slate-800 dark:text-white border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center p-6 gap-4">
                  <motion.img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-24 h-24 object-contain"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.h1
                    className="text-center text-xl md:text-2xl font-bold"
                    whileHover={{ scale: 1.2 }}
                  >
                    {card.title}
                  </motion.h1>
                  <motion.p
                    className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2"
                    whileHover={{ y: -5 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
