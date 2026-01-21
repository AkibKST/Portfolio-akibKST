import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { SkillsGalaxy } from "@/components/3D/SkillsGalaxy";
import MagicBento from "@/components/MagicBento";
import { Button } from "@/components/ui/button";
import { Code2, Zap, Award, Users, Target, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies ", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

const AboutPage = ({
  // title = "About Us", used raw title in h1
  description = "A passionate developer and designer dedicated to creating innovative digital solutions that empower businesses and individuals to achieve their goals through cutting-edge technology.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    alt: "profile",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    alt: "workspace",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "15+ Years of Web Development Excellence",
    description:
      "Specializing in full-stack development, 3D web technologies, and innovative digital solutions that transform ideas into reality.",
    buttonText: "View My Work",
    buttonUrl: "/projects",
  },
  companiesTitle = "Trusted by industry leaders worldwide",
  companies = defaultCompanies,
  // achievementsTitle = "Our Achievements in Numbers", used raw title in h2
  achievementsDescription = "Delivering exceptional results through expertise, innovation, and dedication to client success.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <>
      <Helmet>
        <title>About - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Learn more about my background, experience, and skills."
        />
        <meta name="og:title" content="About - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Learn more about my background, experience, and skills."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section with 3D Skills */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
              />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <SkillsGalaxy />
            </Canvas>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-24">
          <div className="container px-8 mx-auto">
            <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
              <h2 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
                My <span className="text-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground">
                From curiosity to expertise, here's how I became a full-stack
                developer passionate about creating exceptional digital
                experiences.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
              />
              <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
                  <Code2 className="w-12 h-12 text-primary" />
                  <div>
                    <p className="mb-2 text-lg font-semibold">
                      {breakout.title}
                    </p>
                    <p className="text-muted-foreground">
                      {breakout.description}
                    </p>
                  </div>
                  <Button variant="outline" className="mr-auto" asChild>
                    <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
                  </Button>
                </div>
                <img
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                />
              </div>
            </div>

            {/* Detailed Story */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-muted/50 rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My passion for web development began over a decade ago with
                    a simple curiosity about how websites worked. I started by
                    learning HTML and CSS, then quickly moved on to JavaScript,
                    fascinated by how I could make web pages interactive and
                    dynamic.
                  </p>
                  <p>
                    Over the years, I've evolved from a front-end developer to a
                    full-stack developer, mastering React, Node.js, TypeScript,
                    and databases. But what truly excites me is the intersection
                    of art and technology – creating beautiful, intuitive
                    interfaces backed by robust, scalable systems.
                  </p>
                  <p>
                    In recent years, I've become deeply interested in 3D web
                    technologies. Discovering Three.js and React Three Fiber
                    opened a new dimension to web development. I now specialize
                    in creating immersive 3D experiences that captivate users
                    and elevate digital products to new heights.
                  </p>
                  <p>
                    Today, I combine my expertise in full-stack development,
                    design thinking, and 3D web technologies to create
                    comprehensive solutions that not only meet client needs but
                    exceed expectations. Every project is an opportunity to push
                    boundaries and innovate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every project and decision I make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Excellence",
                  description:
                    "Delivering high-quality solutions that exceed expectations and stand the test of time.",
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Innovation",
                  description:
                    "Continuously learning and adopting new technologies to stay at the forefront of web development.",
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Collaboration",
                  description:
                    "Working closely with clients and teams to understand needs and deliver tailored solutions.",
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Quality",
                  description:
                    "Writing clean, maintainable code with a focus on performance and scalability.",
                },
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Growth",
                  description:
                    "Constantly challenging myself to learn and improve my craft and skills.",
                },
                {
                  icon: <Code2 className="w-12 h-12" />,
                  title: "Creativity",
                  description:
                    "Combining technical expertise with creative thinking to solve complex problems.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-primary mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24">
          <div className="container px-8 mx-auto">
            <div className="bg-muted relative overflow-hidden rounded-xl p-7 md:p-16">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Achievements <span className="text-primary">in Numbers</span>
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  {achievementsDescription}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 text-center lg:grid-cols-4">
                {achievements.map((item, idx) => (
                  <div className="flex flex-col gap-2" key={item.label + idx}>
                    <span className="text-4xl font-semibold md:text-5xl">
                      {item.value}
                    </span>
                    <p className="text-sm md:text-base">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-24 bg-muted/30">
          <div className="container px-8 mx-auto">
            <p className="text-center text-lg mb-12">{companiesTitle}</p>
            <div className="flex flex-wrap justify-center gap-8">
              {companies.map((company, idx) => (
                <div
                  className="flex items-center gap-3"
                  key={company.src + idx}
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="h-8 w-auto md:h-10 dark:invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack and Expertise */}
        <section className="py-24">
          <div className="container px-8 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Tech Stack & <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tools and technologies I work with to deliver exceptional
                results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: [
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "React Three Fiber",
                    "Vite",
                  ],
                },
                {
                  category: "Backend",
                  technologies: [
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "REST APIs",
                  ],
                },
                {
                  category: "3D & Animation",
                  technologies: [
                    "Three.js",
                    "Drei",
                    "PostProcessing",
                    "WebGL",
                    "GLSL",
                  ],
                },
                {
                  category: "DevOps & Tools",
                  technologies: ["Docker", "Git", "GitHub", "Vercel", "AWS"],
                },
                {
                  category: "Design & UX",
                  technologies: [
                    "Figma",
                    "UI/UX Design",
                    "Responsive Design",
                    "Accessibility",
                    "Motion Design",
                  ],
                },
                {
                  category: "Testing & Quality",
                  technologies: [
                    "Jest",
                    "React Testing",
                    "ESLint",
                    "Performance Optimization",
                    "Security",
                  ],
                },
              ].map((stack, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, tidx) => (
                      <li
                        key={tidx}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Magic Bento Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-8 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                My <span className="text-primary">Focus Areas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specializing in creating beautiful, performant, and innovative
                digital experiences
              </p>
            </div>
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm always
              interested in hearing about new projects and opportunities.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/projects">View My Work</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { AboutPage };
