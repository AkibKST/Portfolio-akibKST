import { Download, Mail } from "lucide-react";
import { Suspense } from "react";
import Logo from "@/assets/icons/Logo";
import { useNavigate } from "react-router";
import StarBorder from "@/components/StarBorder";
import { HeroScene } from "@/components/3D/HeroScene";
import { Canvas3D } from "@/components/3D/Canvas3D";
import "@/styles/animations.css";

const HeroSection = () => {
  const navigate = useNavigate();

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
    <div className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden flex flex-col justify-center">
      {/* Light Mode Glow Blobs - Only visible in light mode */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] dark:hidden opacity-60 pointer-events-none animate-float-flow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] dark:hidden opacity-60 pointer-events-none animate-float-flow" style={{ animationDelay: "2s" }} />

      <section className="relative container mx-auto px-6 sm:px-8 py-12 md:py-20 lg:py-0 flex-1 flex flex-col justify-center z-10">

        {/* Logo Animation */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="p-4 rounded-2xl bg-background/50 backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 hover:shadow-primary/20 transition-all duration-500">
            <Logo />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-slide-left" style={{ animationDelay: "0.2s" }}>

            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm animate-scale-in">
                ✨ Available for freelance
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-glow inline-block">
                  akib
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I craft visually stunning and high-performance web experiences.
              Specializing in modern tech stacks to build digital solutions that matter.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <StarBorder as="div" className="w-full sm:w-auto min-w-[160px]" color="cyan" speed="4s">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full h-12 px-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Hire Me
                </button>
              </StarBorder>

              <StarBorder as="div" className="w-full sm:w-auto min-w-[160px]" color="purple" speed="4s">
                <button
                  onClick={handleDownloadCV}
                  className="w-full h-12 px-8 inline-flex items-center justify-center gap-2 rounded-lg bg-background/50 border border-primary/20 text-foreground font-semibold backdrop-blur-md hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </StarBorder>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative hidden lg:block h-[500px] w-full animate-slide-right delay-100">
            {/* 3D Scene Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-[100px] opacity-40 animate-pulse" />

            <Canvas3D height="h-full">
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            </Canvas3D>
          </div>
        </div>
      </section>
    </div>
  );
};

export { HeroSection };
