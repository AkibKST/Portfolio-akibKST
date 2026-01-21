import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import {
  Code2,
  Zap,
  Globe,
  Lock,
  Smartphone,
  BarChart3,
  Users,
  ArrowRight,
  Gauge,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GradientOrb } from "@/components/3D";

const platformFeatures = [
  {
    category: "Development",
    features: [
      {
        icon: <Code2 className="w-8 h-8" />,
        title: "Modern Tech Stack",
        description:
          "Built with React, TypeScript, and cutting-edge frameworks",
      },
      {
        icon: <Gauge className="w-8 h-8" />,
        title: "High Performance",
        description: "Optimized for speed with sub-second load times",
      },
      {
        icon: <Cpu className="w-8 h-8" />,
        title: "Scalable Architecture",
        description: "Handles growth from 100 to 100K+ users seamlessly",
      },
    ],
  },
  {
    category: "User Experience",
    features: [
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Fully Responsive",
        description: "Perfect experience on desktop, tablet, and mobile",
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Multi-Language Support",
        description: "Reach global audiences with localization",
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Instant Updates",
        description: "Real-time data sync without page refreshes",
      },
    ],
  },
  {
    category: "Security & Admin",
    features: [
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Enterprise Security",
        description: "SSL encryption, secure authentication, data protection",
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Advanced Analytics",
        description: "Comprehensive dashboards with real-time insights",
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Role-Based Access",
        description: "Granular permissions and user management system",
      },
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <>
      <Helmet>
        <title>Features - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Discover the key features and capabilities I offer."
        />
        <meta name="og:title" content="Features - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Discover the key features and capabilities I offer."
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

        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Platform Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to build and scale amazing digital products
            </p>
          </div>
        </section>

        {/* Feature Tabs */}
        <section className="py-12 px-4 max-w-6xl mx-auto relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {platformFeatures.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveTab(category.category.toLowerCase())}
                className={cn(
                  "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                  activeTab === category.category.toLowerCase()
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-background/50 text-muted-foreground hover:bg-background border border-border/50",
                )}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformFeatures
              .find((cat) => cat.category.toLowerCase() === activeTab)
              ?.features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="group border border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2"
                >
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-20 px-4 max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            Complete Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "🚀",
                title: "Lightning Fast",
                desc: "Sub-second load times",
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "Enterprise-grade security",
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                desc: "Works on all devices",
              },
              { icon: "🌍", title: "Global", desc: "Available worldwide" },
              { icon: "♿", title: "Accessible", desc: "WCAG compliant" },
              {
                icon: "🔄",
                title: "Automatic Updates",
                desc: "Always stay current",
              },
              { icon: "📊", title: "Analytics", desc: "Detailed insights" },
              { icon: "🎨", title: "Customizable", desc: "Match your brand" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border border-border/50 hover:border-cyan-500/30 transition-colors text-center"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <Card className="max-w-2xl mx-auto border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
            <CardContent className="pt-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-8">
                Explore our features in action and see how we can help your
                business grow.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 text-lg px-8 py-6">
                Explore Features <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
