/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#faefe0";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#faefe0] text-black">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-9xl font-bold mb-4">404</h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-1 bg-black mx-auto mb-8"
                />
                <h2 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
                <p className="text-xl mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link href="/" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Return to Homepage
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
