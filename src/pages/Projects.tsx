import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { ProjectShowcase } from "@/components/3D/ProjectShowcase";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time product inventory",
      "Secure payment processing",
      "User authentication",
      "Admin dashboard",
      "Order tracking system",
    ],
  },
  {
    id: "2",
    title: "Project Management Dashboard",
    description:
      "Collaborative project management tool with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Task management",
      "Team collaboration",
      "Real-time notifications",
      "Progress tracking",
      "File sharing",
    ],
  },
  {
    id: "3",
    title: "AI Chat Application",
    description:
      "Intelligent chatbot powered by AI with natural language processing and context awareness.",
    image:
      "https://images.unsplash.com/photo-1586825140708-dfaf72ae4b04?w=500&h=300&fit=crop",
    tags: ["React", "OpenAI API", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Multi-language support",
      "Chat history",
      "User preferences",
    ],
  },
  {
    id: "4",
    title: "Data Visualization Platform",
    description:
      "Interactive data visualization tool with advanced analytics and real-time data streaming.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time data updates",
      "Interactive charts",
      "Custom reports",
      "Data export",
      "Advanced filtering",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Explore my latest work showcasing expertise in full-stack development and 3D web technologies."
        />
        <meta name="og:title" content="Projects - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Explore my latest work showcasing expertise in full-stack development and 3D web technologies."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section with 3D */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={2}
              />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <ProjectShowcase />
            </Canvas>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing expertise in full-stack
              development, 3D web technologies, and innovative solutions.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-56 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge
              technology and exceptional design.
            </p>
            <Button size="lg" className="mr-4">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              View More Projects
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
