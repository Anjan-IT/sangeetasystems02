"use client";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { TabsDemo } from "@/components/services";
import { MarqueeDemo } from "@/components/Logoscroll";
import OurServices from "@/components/OurServices";
import CoreServices from "@/components/OurCoreServices";


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
