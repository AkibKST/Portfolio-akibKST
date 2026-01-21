import { FaqSection } from "@/components/modules/homepage/FaqSection";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import { GradientOrb } from "@/components/3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const allFaqs = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer:
      "I offer comprehensive web development, UI/UX design, mobile app development, analytics solutions, DevOps services, and ongoing support. Each service is tailored to meet your specific project needs with cutting-edge technologies.",
  },
  {
    id: "faq-2",
    question: "How are project costs calculated?",
    answer:
      "Project costs are based on scope, complexity, timeline, and required technologies. Services range from $1,000 for small DevOps tasks to $3,000+ for full mobile applications. I provide transparent quotes after understanding your requirements.",
  },
  {
    id: "faq-3",
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by project: Web development takes 4-12 weeks, mobile apps 6-16 weeks, UI/UX design 2-6 weeks, and quick DevOps tasks 1-3 weeks. I always prioritize quality over speed and keep you updated throughout.",
  },
  {
    id: "faq-4",
    question: "Do you offer ongoing support?",
    answer:
      "Yes! I offer comprehensive maintenance and support packages ranging from $500-$2,000/month that include 24/7 monitoring, bug fixes, performance optimization, security patches, and feature enhancements.",
  },
  {
    id: "faq-5",
    question: "What technologies do you work with?",
    answer:
      "I specialize in React, TypeScript, Node.js, Next.js, Tailwind CSS, PostgreSQL, MongoDB, AWS, Docker, and modern DevOps tools. I stay current with industry best practices and adopt new technologies as needed for your project.",
  },
  {
    id: "faq-6",
    question: "Can I see previous projects?",
    answer:
      "Absolutely! I have a portfolio of 50+ completed projects. Visit my Projects page to see case studies, live demos, and GitHub repositories. I'm also happy to discuss specific examples relevant to your needs.",
  },
  {
    id: "faq-7",
    question: "How do you ensure project quality?",
    answer:
      "I follow industry best practices including thorough testing, code reviews, performance optimization, security audits, and documentation. Every project goes through multiple QA phases before deployment to ensure excellence.",
  },
  {
    id: "faq-8",
    question: "What is your communication style?",
    answer:
      "I believe in transparent, regular communication. You'll receive weekly updates, can schedule calls as needed, and have direct access for urgent issues. I use modern tools like Slack, GitHub, and Jira for seamless collaboration.",
  },
  {
    id: "faq-9",
    question: "Do you provide post-launch support?",
    answer:
      "Yes! After launch, I offer dedicated support to handle any issues, implement bug fixes, optimize performance, and add new features. Custom maintenance packages are available based on your needs.",
  },
  {
    id: "faq-10",
    question: "How can I get started?",
    answer:
      "Simply reach out via the Hire Me page or contact form. We'll schedule a consultation to discuss your project, goals, timeline, and budget. I'll provide a detailed proposal and timeline for your review.",
  },
];

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Helmet>
        <title>FAQ - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Frequently asked questions about my services and work."
        />
        <meta name="og:title" content="FAQ - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Frequently asked questions about my services and work."
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
        <div className="bg-gradient-to-b from-background/80 to-background/40 py-12 relative z-10">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to common questions about my services, process, and
              how we can work together to bring your vision to life.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 h-12 text-lg border-cyan-500/30 focus:border-cyan-500/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="relative z-10">
          <FaqSection items={filteredFaqs} />

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-4">No results found for "{searchQuery}".</p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="border-cyan-500/30 hover:border-cyan-500"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="py-20 px-4 relative z-10 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm here to help! Reach out and let's discuss your project in
              detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 w-full sm:w-auto"
                >
                  Contact Me <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/hire-me">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 w-full sm:w-auto"
                >
                  Hire Me <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
