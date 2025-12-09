import { Download, Mail } from "lucide-react";
import Logo from "@/assets/icons/Logo";
import { useNavigate } from "react-router";
import LiquidEther from "@/components/LiquidEther";
import StarBorder from "@/components/StarBorder";
import AnimatedTechLogos from "@/components/AnimatedTechLogos";
import "@/styles/animations.css";

const HeroSection = () => {
  const navigate = useNavigate();

  // Tech logos for animation - customize with your technologies
  const techLogos = [
    { name: "React", icon: "⚛️", color: "bg-blue-500/30" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600/30" },
    { name: "Node.js", icon: "⬢", color: "bg-green-500/30" },
    { name: "Tailwind", icon: "🎨", color: "bg-cyan-500/30" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-600/30" },
    { name: "Next.js", icon: "▲", color: "bg-black/30" },
  ];

  const handleDownloadCV = () => {
    // Create a link to download CV - update with your actual CV path
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Update with your actual CV path
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "calc(100vh - 64px)",
        }}
        className="relative backdrop-blur-xl bg-black/30 w-full opacity-97 flex flex-col overflow-y-auto"
      >
        <section className="relative overflow-hidden flex-1 mx-auto container w-full flex flex-col justify-center py-4 sm:py-8 px-4 sm:px-6">
          {/* Logo at top */}
          <div
            className="flex justify-center mb-6 sm:mb-8 md:mb-12 pt-2 sm:pt-6 md:pt-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-background/30 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm backdrop-blur-sm hover:bg-background/40 hover:shadow-md hover:scale-105 transition-all duration-500 scale-75 sm:scale-100 origin-top">
              <Logo />
            </div>
          </div>

          {/* Main content - Two flex sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center flex-1">
            {/* Left section - Text content */}
            <div
              className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 animate-slide-left"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Name and Designation */}
              <div className="space-y-1 sm:space-y-2">
                <h1
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight animate-slide-up"
                  style={{ animationDelay: "0.25s" }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow">
                    akib
                  </span>
                </h1>
                <p
                  className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-muted-foreground leading-snug animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  Full Stack Developer & Designer
                </p>
              </div>

              {/* Description */}
              <div className="space-y-1 sm:space-y-2 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl">
                <p
                  className="animate-slide-up"
                  style={{ animationDelay: "0.35s" }}
                >
                  I craft beautiful, functional web experiences that solve real
                  problems. Specializing in React, TypeScript, and modern web
                  technologies.
                </p>
                <p
                  className="hidden sm:block animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  Let's build something extraordinary together. I'm passionate
                  about creating digital solutions that make an impact.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 mb-8 sm:mb-10 md:mb-12 flex-wrap">
                <StarBorder
                  as="div"
                  className="custom-class animate-slide-up w-full xs:flex-1"
                  color="cyan"
                  speed="5s"
                  style={{ animationDelay: "0.45s" }}
                >
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 py-2 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" />
                    Hire Me
                  </button>
                </StarBorder>

                <StarBorder
                  as="div"
                  className="custom-class animate-slide-up w-full xs:flex-1"
                  color="purple"
                  speed="5s"
                  style={{ animationDelay: "0.5s" }}
                >
                  <button
                    onClick={handleDownloadCV}
                    className="w-full inline-flex items-center justify-center gap-1 xs:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary shadow-xs h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 py-2 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" />
                    <span className="hidden xs:inline">Download CV</span>
                    <span className="xs:hidden">CV</span>
                  </button>
                </StarBorder>
              </div>
            </div>

            {/* Right section - Photo with animated tech logos */}
            <div
              className="hidden sm:flex justify-center items-center mt-4 sm:mt-0 animate-slide-right"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Profile image with frame */}
                <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 hover:border-primary/60">
                  <img
                    src="/src/assets/image/19199517.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-all duration-500" />
                </div>

                {/* Animated tech logos around the image */}
                <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 lg:-inset-24 transition-all duration-500">
                  <AnimatedTechLogos logos={techLogos} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { HeroSection };
