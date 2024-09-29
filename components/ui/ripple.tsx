
import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 250,
  mainCircleOpacity = 0.8,
  numCircles = 5,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute  center transform -translate-y-1/2", // Position the ripples to the left side
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 100;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full dark:bg-foreground/25 bg-foreground/5 shadow-xl`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                top: "50%",
                left: "0%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
