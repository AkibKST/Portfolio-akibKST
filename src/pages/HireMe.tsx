import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Code2,
  Zap,
  Users,
} from "lucide-react";
import { useState } from "react";
import { GradientOrb } from "@/components/3D";

export default function HireMe() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectType: "web-development",
    budget: "5000-10000",
    timeline: "1-2-months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Helmet>
        <title>Hire Me - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Hire me for your next project. Let's collaborate on creating amazing digital solutions."
        />
        <meta name="og:title" content="Hire Me - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Hire me for your next project. Let's collaborate on creating amazing digital solutions."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden">
        {/* 3D Gradient Orbs Background */}
        <GradientOrb
          size={350}
          blur={90}
          className="top-32 right-0 -translate-y-20 translate-x-40"
        />
        <GradientOrb
          size={280}
          blur={70}
          className="bottom-32 left-0 translate-y-20 -translate-x-32"
        />

        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">
                Let's Work Together
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hire Me for Your Next Project
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Full-stack developer & designer ready to build your digital vision
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Expert Development",
                description:
                  "Specialized in React, TypeScript, Node.js, and modern web technologies",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "High Performance",
                description:
                  "Optimized applications that load fast and run smoothly",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Great Communication",
                description:
                  "Regular updates, responsive, and aligned with your vision",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Quality Assured",
                description:
                  "Thorough testing and best practices in every project",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "On-Time Delivery",
                description:
                  "Reliable timelines and professional project management",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Full-Stack Solution",
                description: "From frontend to backend, database to deployment",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border border-border/50 hover:border-cyan-500/50 transition-colors hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hire Form Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Let's Discuss Your Project
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-cyan-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-cyan-500"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <Input
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-cyan-500"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 text-foreground focus:border-cyan-500 outline-none transition"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-design">UI/UX Design</option>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 text-foreground focus:border-cyan-500 outline-none transition"
                  >
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 text-foreground focus:border-cyan-500 outline-none transition"
                  >
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="1-2-months">1-2 Months</option>
                    <option value="2-3-months">2-3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project idea, requirements, and expectations..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 text-foreground focus:border-cyan-500 outline-none transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 py-6 text-base font-semibold flex items-center justify-center gap-2"
                >
                  Send Hiring Request
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Right side - Info */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card className="border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Quick Response</p>
                      <p className="text-sm text-muted-foreground">
                        Usually reply within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Available Worldwide</p>
                      <p className="text-sm text-muted-foreground">
                        Remote work, no location limits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <DollarSign className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Flexible Rates</p>
                      <p className="text-sm text-muted-foreground">
                        Tailored to your budget
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Available Now</p>
                      <p className="text-sm text-muted-foreground">
                        Ready to start ASAP
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">contact@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    My Tech Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">
                        Frontend
                      </p>
                      <p className="text-sm">
                        React, TypeScript, Tailwind, Next.js
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">
                        Backend
                      </p>
                      <p className="text-sm">
                        Node.js, Express, PostgreSQL, MongoDB
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">
                        Tools & Services
                      </p>
                      <p className="text-sm">
                        Git, Docker, AWS, Vercel, Stripe
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                company: "Tech Startup",
                text: "Exceptional developer! Delivered our web app on time and exceeded expectations.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                company: "E-Commerce Brand",
                text: "Professional, responsive, and produced high-quality code. Highly recommended!",
                rating: 5,
              },
              {
                name: "Emma Davis",
                company: "Digital Agency",
                text: "Perfect blend of technical expertise and communication skills. Great to work with!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
