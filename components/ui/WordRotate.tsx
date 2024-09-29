// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

// import { cn } from "@/lib/utils";

// interface WordRotateProps {
//   words: string[];
//   duration?: number;
//   framerProps?: HTMLMotionProps<"h1">;
//   className?: string;
// }

// export default function WordRotate({
//   words,
//   duration = 2500,
//   framerProps = {
//     initial: { opacity: 0, y: -50 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 50 },
//     transition: { duration: 0.25, ease: "easeOut" },
//   },
//   className,
// }: WordRotateProps) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, duration);

//     // Clean up interval on unmount
//     return () => clearInterval(interval);
//   }, [words, duration]);

//   return (
//     <div className="overflow-hidden font-bold py-2">
//       <AnimatePresence mode="wait">
//         <motion.h1
//           key={words[index]}
//           className={cn(className)}
//           {...framerProps}
//         >
//           {words[index]}
//         </motion.h1>
//       </AnimatePresence>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
  staticText?: string; // Add a prop for the static text
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
  staticText, // Destructure the static text prop
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden   font-bold dark:text-white text-black  leading-snug tracking-wide">
      {staticText && <div className="static-text">{staticText}</div>}
      {"Driving Business Value with Innovative  "}
      {/* Render static text */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}


