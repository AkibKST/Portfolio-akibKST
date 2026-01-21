import type { ReactNode } from "react";

interface Canvas3DProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

export const Canvas3D = ({
  children,
  className = "",
  height = "h-96",
}: Canvas3DProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden backdrop-blur-sm border border-primary/20 ${height} ${className}`}
    >
      {children}
    </div>
  );
};
