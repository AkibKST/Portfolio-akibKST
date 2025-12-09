import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Home, Info, Mail, Briefcase, Wrench, Layers } from "lucide-react";
import { useTheme } from "@/provider/theme.provider";

interface NavItem {
  icon: React.ReactNode;
  href?: string;
  label: string;
  color: string;
  onClick?: () => void;
}

const HeroStickyNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  const handleHireMe = () => {
    // Scroll to contact section or open modal
    const contactElement = document.getElementById("contact-section");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHome = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      href: "/",
      label: "Home",
      color: "from-blue-500 to-cyan-500",
      onClick: handleHome,
    },
    {
      icon: <Info className="w-5 h-5" />,
      href: "/about",
      label: "About",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "/contact",
      label: "Contact",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      href: "/services",
      label: "Service",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      href: "/projects",
      label: "Project",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: "Hire Me",
      color: "from-green-500 to-emerald-500",
      onClick: handleHireMe,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // You can update active index based on scroll position if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
      {navItems.map((item, index) => {
        const isButton = !item.href;

        const content = (
          <>
            {/* Background glow effect */}
            <div
              className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r ${item.color}`}
              style={{
                width: "64px",
                height: "64px",
                left: "-16px",
                top: "-16px",
              }}
            />

            {/* Icon container */}
            <div
              className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                activeIndex === index ? "scale-125" : "scale-100"
              } ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-black/10 hover:bg-black/20 text-black"
              } backdrop-blur-md border ${
                theme === "dark"
                  ? "border-white/20 hover:border-white/40"
                  : "border-black/10 hover:border-black/20"
              } group-hover:shadow-lg`}
            >
              {item.icon}
            </div>

            {/* Tooltip label */}
            <div
              className={`absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-500 pointer-events-none ${
                activeIndex === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              } ${
                theme === "dark"
                  ? "bg-white/20 text-white backdrop-blur-md border border-white/30"
                  : "bg-black/20 text-white backdrop-blur-md border border-black/30"
              }`}
            >
              {item.label}
            </div>
          </>
        );

        if (isButton) {
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="relative group outline-none cursor-pointer transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {content}
            </button>
          );
        }

        const handleLinkClick = () => {
          if (item.onClick) {
            item.onClick();
          }
        };

        return (
          <Link
            key={index}
            to={item.href!}
            className="relative group transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
            onClick={handleLinkClick}
          >
            {content}
          </Link>
        );
      })}

      {/* Decorative line */}
      <div
        className={`w-0.5 h-32 mx-auto my-2 rounded-full transition-all duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-b from-transparent via-white/40 to-transparent"
            : "bg-gradient-to-b from-transparent via-black/40 to-transparent"
        }`}
      />
    </div>
  );
};

export default HeroStickyNav;
