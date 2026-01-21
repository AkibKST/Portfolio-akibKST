import { useEffect, useRef } from "react";

export const Text3D = ({
  text,
  className = "",
  depth = 20,
  perspective = "1200px",
}: {
  text: string;
  className?: string;
  depth?: number;
  perspective?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / rect.height) * 20;
      const rotateY = ((e.clientX - centerX) / rect.width) * 20;

      container.style.transform = `perspective(${perspective}) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(${perspective}) rotateX(0deg) rotateY(0deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [perspective]);

  return (
    <div
      ref={containerRef}
      className={`${className}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Shadow layers for 3D depth */}
      {Array.from({ length: depth }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${i * 0.5}px`,
            top: `${i * 0.5}px`,
            opacity: Math.max(0.1, 1 - i / depth),
            transform: `translateZ(${-i * 10}px)`,
            WebkitTextStroke: `0.5px rgba(0, 212, 255, ${0.3 - i * 0.01})`,
            color: `rgba(0, 212, 255, ${0.2 - i * 0.008})`,
          }}
          className="whitespace-nowrap font-bold"
        >
          {text}
        </div>
      ))}

      {/* Main text */}
      <div
        style={{
          position: "relative",
          WebkitTextStroke: "1px rgba(0, 212, 255, 0.8)",
          textShadow: `
            0 0 10px rgba(0, 212, 255, 0.8),
            0 0 20px rgba(49, 120, 198, 0.6),
            0 0 30px rgba(118, 75, 188, 0.4)
          `,
        }}
      >
        {text}
      </div>
    </div>
  );
};
