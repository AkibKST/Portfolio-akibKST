interface AnimatedTechLogosProps {
  logos: Array<{
    name: string;
    icon: React.ReactNode;
    color: string;
  }>;
}

const AnimatedTechLogos = ({ logos }: AnimatedTechLogosProps) => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Center circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
          <div className="text-2xl md:text-3xl font-bold text-white">A</div>
        </div>
      </div>

      {/* Orbiting logos */}
      {logos.map((logo, index) => {
        const angle = (index / logos.length) * 360;
        const radius = 90;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              left: "50%",
              top: "50%",
              animation: `orbit-${index} 20s linear infinite`,
            }}
          >
            <style>{`
              @keyframes orbit-${index} {
                from {
                  transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(0deg);
                }
                to {
                  transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(360deg);
                }
              }
            `}</style>
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${logo.color} backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 text-white`}
              title={logo.name}
            >
              {logo.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedTechLogos;
