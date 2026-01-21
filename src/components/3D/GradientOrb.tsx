import { useEffect, useRef } from "react";

export const GradientOrb = ({
  className = "",
  size = 300,
  blur = 80,
}: {
  className?: string;
  size?: number;
  blur?: number;
}) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const rect = orb.getBoundingClientRect();
      const orbCenterX = rect.left + rect.width / 2;
      const orbCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(mouseY - orbCenterY, mouseX - orbCenterX);
      const distance = 50;

      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={orbRef}
      className={`absolute rounded-full pointer-events-none transition-transform ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.8), rgba(49, 120, 198, 0.4), rgba(118, 75, 188, 0.2))`,
        filter: `blur(${blur}px)`,
        opacity: 0.6,
      }}
    />
  );
};
