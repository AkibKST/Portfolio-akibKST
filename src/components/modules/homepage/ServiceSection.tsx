import {
  Globe,
  LayoutDashboard,
  Database,
  Zap,
  Box,
  Users,
  PenTool,
} from "lucide-react";
import "@/styles/animations.css";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "SPA & Marketing Sites",
    description: "Build single-page applications and marketing sites.",
  },
  {
    icon: <LayoutDashboard className="w-10 h-10 text-primary" />,
    title: "Dashboards & UI",
    description:
      "Create interactive hero sections, dashboards and admin panels.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: "Design into Code",
    description: "Convert Figma/Sketch designs to production-ready code.",
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Backend Integration",
    description: "Integrate backend services, databases and authentication.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Performance & SEO",
    description: "Improve performance, SEO and accessibility.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Consultation",
    description: "Offer code reviews, mentoring and technical consultation.",
  },
  {
    icon: <Box className="w-10 h-10 text-primary" />,
    title: "3D Animation",
    description: "Create immersive 3D animations and experiences.",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
          <h1 className="text-3xl font-semibold md:text-5xl transition-all duration-500">
            My <span className="text-primary">Services</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Delivering high-quality solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-fade-up w-full ${
                index === services.length - 1 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServiceSection };
