import { useState } from "react";

interface Card3DProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  autoFlip?: boolean;
  flipDelay?: number;
}

export const Card3D = ({
  frontContent,
  backContent,
  className = "",
  autoFlip = false,
  flipDelay = 5000,
}: Card3DProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto flip functionality
  if (autoFlip) {
    setTimeout(() => {
      setIsFlipped((prev) => !prev);
    }, flipDelay);
  }

  return (
    <div
      className={`relative w-full h-full cursor-pointer perspective ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0"
        >
          {frontContent}
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0"
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};
