/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { coreServicesData } from '@/data';
// Content data to be moved to data.index.ts
/*

*/

const Card: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full rounded-2xl h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      {children}
    </motion.div>
  );
};

interface Service {
  id: string;
  imageUrl: string;
  // Add other properties of the service object if needed
}

const CoreServices: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 w-full"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="heading pb-6"
      >
        Our <span className="text-blue-700">core Services</span>
      </motion.h1>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 w-full max-w-6xl mx-auto">
          {coreServicesData.map((coreServicesData, index) => (
            <Link href="/system/contact" key={coreServicesData.id}>
              <Card delay={index * 0.1}>
                <div
                  className="p-4 relative z-20 h-full text-white group-hover:text-white transition-colors duration-500 flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${coreServicesData.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h4>
                      <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
                        <span
                          className="flex flex-col min-w-[4px]"
                          style={{
                            transform: "translateY(0%) translateZ(0px)",
                          }}
                        >
                          <span>{coreServicesData.title}</span>
                        </span>
                      </div>
                    </h4>
                    <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 p-2 rounded">
                      {coreServicesData.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CoreServices;

