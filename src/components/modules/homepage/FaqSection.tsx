import { Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQScene } from "@/components/3D/FAQScene";
import { Canvas3D } from "@/components/3D/Canvas3D";
import { HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const FaqSection = ({
  items = [
    {
      id: "faq-1",
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      id: "faq-2",
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      id: "faq-3",
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      id: "faq-4",
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
    {
      id: "faq-5",
      question: "How should I organize my FAQ?",
      answer:
        "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
    },
    {
      id: "faq-6",
      question: "How long should FAQ answers be?",
      answer:
        "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
    },
    {
      id: "faq-7",
      question: "Should I include links in my FAQ?",
      answer:
        "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Accordion */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">
                  Quick Answers
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Answers You Need
              </h2>
              <p className="text-muted-foreground">
                Find quick answers to common questions about services, process,
                and collaboration.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 last:border-0"
                >
                  <AccordionTrigger className="font-semibold hover:no-underline py-4 hover:text-cyan-400 transition-colors">
                    <span className="text-left">
                      <span className="text-cyan-400 mr-3 font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - 3D Animation */}
          <div className="hidden lg:flex justify-center items-center sticky top-20">
            <div className="relative w-full h-96 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm overflow-hidden">
              <Canvas3D height="h-96">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <div className="animate-pulse text-sm text-muted-foreground">
                        Loading 3D Animation...
                      </div>
                    </div>
                  }
                >
                  <FAQScene />
                </Suspense>
              </Canvas3D>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
