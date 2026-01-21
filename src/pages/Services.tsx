import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Code2,
  Palette,
  Smartphone,
  BarChart3,
  Rocket,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import { GradientOrb } from "@/components/3D";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  duration: string;
  color: string;
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: <Code2 className="w-12 h-12" />,
    features: [
      "React & TypeScript",
      "Full-stack development",
      "Responsive design",
      "Performance optimization",
      "API integration",
      "Database design",
    ],
    price: "Starting from $2,000",
    duration: "4-12 weeks",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces for your digital products",
    icon: <Palette className="w-12 h-12" />,
    features: [
      "Wireframing & prototyping",
      "User research",
      "Visual design",
      "Interaction design",
      "Design systems",
      "Accessibility audit",
    ],
    price: "Starting from $1,500",
    duration: "2-6 weeks",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that users love",
    icon: <Smartphone className="w-12 h-12" />,
    features: [
      "iOS & Android development",
      "React Native",
      "Native performance",
      "App store deployment",
      "Push notifications",
      "Offline functionality",
    ],
    price: "Starting from $3,000",
    duration: "6-16 weeks",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    description: "Data-driven solutions to understand and grow your business",
    icon: <BarChart3 className="w-12 h-12" />,
    features: [
      "Dashboard creation",
      "Custom reports",
      "Data visualization",
      "Performance tracking",
      "Business intelligence",
      "Predictive analytics",
    ],
    price: "Starting from $1,200",
    duration: "2-4 weeks",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description: "Scalable and reliable deployment solutions",
    icon: <Rocket className="w-12 h-12" />,
    features: [
      "CI/CD pipeline setup",
      "Cloud deployment",
      "Server management",
      "Performance monitoring",
      "Automated testing",
      "Security hardening",
    ],
    price: "Starting from $1,000",
    duration: "1-3 weeks",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "maintenance",
    title: "Support & Maintenance",
    description: "Ongoing support and optimization for your applications",
    icon: <Shield className="w-12 h-12" />,
    features: [
      "24/7 monitoring",
      "Bug fixes & updates",
      "Performance optimization",
      "Security patches",
      "Feature enhancements",
      "Dedicated support",
    ],
    price: "$500 - $2,000/month",
    duration: "Ongoing",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Explore my comprehensive services including web development, UI/UX design, and mobile app development."
        />
        <meta name="og:title" content="Services - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Explore my comprehensive services including web development, UI/UX design, and mobile app development."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden">
        {/* 3D Gradient Orbs Background */}
        <GradientOrb
          size={400}
          blur={100}
          className="top-0 right-0 -translate-y-32 translate-x-32"
        />
        <GradientOrb
          size={300}
          blur={80}
          className="bottom-0 left-0 translate-y-32 -translate-x-24"
        />

        {/* Header */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive solutions tailored to bring your digital vision to
              life
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end development and
              design services using cutting-edge technologies and best
              practices.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-border overflow-hidden"
              >
                {/* Color gradient header */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`} />

                <CardHeader>
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white w-fit mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Duration */}
                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-semibold">
                        Investment
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {service.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-semibold">
                        Timeline
                      </p>
                      <p className="text-sm text-foreground">
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 group/btn`}
                  >
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understand your goals, requirements, and constraints",
              },
              {
                number: "02",
                title: "Planning",
                description: "Create detailed roadmap and project timeline",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Build your solution with regular updates and demos",
              },
              {
                number: "04",
                title: "Delivery",
                description: "Deploy, test, and provide ongoing support",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-cyan-500/20 mb-4">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-cyan-500/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss your requirements and create something amazing
                  together.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 text-lg px-8 py-6"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
