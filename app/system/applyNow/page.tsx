"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import React from "react";

function ApplyNow() {
  return (
    <>
      <main style={{ backgroundColor: "#f0f4f8" }}>
        <Navbar />

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
            Apply Now
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeDb9w1LG3s7Cb2LBGfgqNVYuK_L4l9PJ1HtCCfMI2iDlttsg/viewform?embedded=true"
              width="100%"
              height={956}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ApplyNow;
