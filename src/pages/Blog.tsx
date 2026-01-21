import { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: 3D Web Technologies",
    author: "John Developer",
    date: "2024-01-15",
    category: "Technology",
    excerpt:
      "Exploring how 3D web technologies like Three.js and React Three Fiber are revolutionizing web experiences.",
    content: `The web has evolved significantly over the past decade. What started as a platform for displaying static documents has transformed into a powerful medium for interactive experiences. Today, 3D web technologies are pushing the boundaries even further.

Three.js, combined with React Three Fiber, provides developers with the tools to create stunning 3D visualizations directly in the browser. Unlike traditional game engines, these technologies leverage WebGL to deliver high-performance 3D graphics without requiring plugins.

In this article, we'll explore:
- The fundamentals of 3D graphics on the web
- How React Three Fiber simplifies 3D development
- Real-world applications and use cases
- Performance optimization techniques
- Future trends in web-based 3D

The impact of these technologies is already being felt across industries. From e-commerce to data visualization, from architectural visualization to interactive storytelling, 3D web is opening new possibilities.

As developers, mastering these technologies puts us at the forefront of web innovation. The journey is exciting, and the possibilities are endless.`,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    readTime: "8 min read",
    tags: ["3D Web", "Three.js", "React", "WebGL"],
  },
  {
    id: "2",
    title: "Building Scalable Node.js Applications",
    author: "Jane Backend",
    date: "2024-01-10",
    category: "Backend",
    excerpt:
      "Best practices for architecting and scaling Node.js applications for production environments.",
    content: `Node.js has become the go-to choice for building scalable server-side applications. Its event-driven, non-blocking I/O model makes it ideal for data-intensive real-time applications.

However, scalability doesn't happen by accident. It requires careful planning, proper architecture, and adherence to best practices. In this comprehensive guide, we'll cover:

1. Application Architecture
   - Separation of concerns
   - Microservices patterns
   - API design best practices

2. Database Optimization
   - Connection pooling
   - Query optimization
   - Caching strategies

3. Performance Monitoring
   - APM tools
   - Log aggregation
   - Metrics and alerts

4. Deployment Strategies
   - Docker containerization
   - Kubernetes orchestration
   - CI/CD pipelines

By following these practices, you can build Node.js applications that scale gracefully with your business needs.`,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
    readTime: "10 min read",
    tags: ["Node.js", "Backend", "Scalability", "Architecture"],
  },
  {
    id: "3",
    title: "TypeScript Tips & Tricks for Better Code",
    author: "Code Master",
    date: "2024-01-05",
    category: "Development",
    excerpt:
      "Advanced TypeScript techniques to write more robust, maintainable, and type-safe code.",
    content: `TypeScript has revolutionized how we write JavaScript. By adding static typing, it helps us catch bugs at compile-time rather than runtime. But there's more to TypeScript than just type annotations.

In this article, we'll explore advanced TypeScript features that can significantly improve your code quality:

- Generics and Type Parameters
- Utility Types and Type Manipulation
- Conditional Types
- Mapped Types
- Type Guards and Type Predicates
- Declaration Merging
- Module Augmentation

Each of these features, when used correctly, can lead to more expressive, flexible, and maintainable code. We'll look at practical examples of how to use them in real-world scenarios.

TypeScript's type system is powerful, and understanding how to leverage it effectively is a skill that separates good developers from great ones.`,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=800&h=400&fit=crop",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: "4",
    title: "Modern CSS: Mastering Grid and Flexbox",
    author: "CSS Artist",
    date: "2023-12-28",
    category: "Design",
    excerpt:
      "Deep dive into modern CSS layout techniques and how to use them effectively in your projects.",
    content: `CSS has evolved dramatically over the past few years. Modern layout techniques like CSS Grid and Flexbox have transformed how we design web interfaces.

In this guide, we'll master:

1. Flexbox Fundamentals
   - Flex containers and items
   - Direction and alignment
   - Wrapping and ordering

2. CSS Grid Basics
   - Grid templates
   - Placement and gaps
   - Responsive grids

3. Advanced Techniques
   - Grid areas and templates
   - Auto-fit and auto-fill
   - Grid with media queries

4. Best Practices
   - When to use Flexbox vs Grid
   - Responsive design patterns
   - Performance considerations

With these tools, you can create responsive, beautiful layouts that work seamlessly across all devices.`,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    readTime: "9 min read",
    tags: ["CSS", "Design", "Frontend", "Responsive"],
  },
];

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <>
        <Helmet>
          <title>{selectedPost.title} - Akib KST Portfolio</title>
          <meta name="description" content={selectedPost.excerpt} />
          <meta name="og:title" content={selectedPost.title} />
          <meta name="og:description" content={selectedPost.excerpt} />
          <meta name="og:image" content={selectedPost.image} />
        </Helmet>
        <div className="min-h-screen bg-background">
          {/* Article Header */}
          <article className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="mb-6"
              >
                ← Back to Articles
              </Button>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedPost.category}
                </span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h1 className="text-5xl font-bold mb-6">{selectedPost.title}</h1>

              <div className="prose prose-invert max-w-none mb-8">
                {selectedPost.content.split("\n\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-muted-foreground mb-4 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Read my latest articles and insights on web development and technology."
        />
        <meta name="og:title" content="Blog - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Read my latest articles and insights on web development and technology."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-600/10 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Insights, tutorials, and thoughts on web development, design, and
              technology trends.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    {/* Featured Image */}
                    <div className="relative overflow-hidden h-48 bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 border-t border-border pt-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <Button variant="ghost" className="w-full group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No articles found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to my newsletter for the latest articles and insights on
              web development.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
