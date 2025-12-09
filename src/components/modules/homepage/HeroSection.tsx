import { Download, Mail } from "lucide-react";
import Logo from "@/assets/icons/Logo";
import { useNavigate } from "react-router";
import LiquidEther from "@/components/LiquidEther";
import StarBorder from "@/components/StarBorder";
import { Button } from "@/components/ui/button";
import AnimatedTechLogos from "@/components/AnimatedTechLogos";

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
        className="relative backdrop-blur-xl bg-black/30 w-full opacity-97 flex flex-col"
      >
        <section className="relative overflow-hidden flex-1 mx-auto container w-full flex flex-col justify-center">
          {/* Logo at top */}
          <div className="flex justify-center mb-8 md:mb-12 pt-6 md:pt-8">
            <div className="bg-background/30 rounded-xl p-4 shadow-sm backdrop-blur-sm hover:bg-background/40 transition-all duration-300">
              <Logo />
            </div>
          </div>

          {/* Main content - Two flex sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1">
            {/* Left section - Text content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Name and Designation */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Akib
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                  Full Stack Developer & Designer
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-base md:text-lg text-muted-foreground max-w-xl">
                <p>
                  I craft beautiful, functional web experiences that solve real
                  problems. Specializing in React, TypeScript, and modern web
                  technologies.
                </p>
                <p>
                  Let's build something extraordinary together. I'm passionate
                  about creating digital solutions that make an impact.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  <Button
                    onClick={() => navigate("/contact")}
                    className="gap-2"
                    size="lg"
                  >
                    <Mail className="w-4 h-4" />
                    Hire Me
                  </Button>
                </StarBorder>

                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/50 hover:border-primary"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Right section - Photo with animated tech logos */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Profile image with frame */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img
                    src="/src/assets/image/19199517.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Animated tech logos around the image */}
                <div className="absolute -inset-20 md:-inset-24">
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
