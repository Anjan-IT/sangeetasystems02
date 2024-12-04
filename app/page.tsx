"use client";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { TabsDemo } from "@/components/services";
import { MarqueeDemo } from "@/components/Logoscroll";
import OurServices from "@/components/OurServices";
import CoreServices from "@/components/OurCoreServices";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main
        className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 no-scrollbar"
        style={{
          backgroundColor: "#faefe0",
          // backgroundColor: "#DEE5D4",
          // background: "linear-gradient(180deg, #faefe0,#fff7ad)", 
        }}
      >
        <div className="max-w-7xl w-screen">
          <Navbar />
          <Hero />
          <MarqueeDemo />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Affordable Solutions for Your Business
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Our services start from just{" "}
              <span className="text-blue-700 font-bold">₹4,999/-</span>*
            </p>
            <Link href="/terms&conditions" className="text-sm text-gray-500 hover:text-gray-700  mt-2 inline-block">
              *Terms & Conditions Apply
            </Link>
          </motion.div>

          <OurServices />
          <CoreServices services={[]} />
          <TabsDemo />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
