import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import workShowcase from "@/assets/work-showcase.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      image: workShowcase,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Healthcare App",
      category: "Mobile Development", 
      description: "Patient management system with appointment scheduling and telemedicine features.",
      image: workShowcase,
      tags: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Analytics dashboard with real-time data visualization and customizable widgets.",
      image: workShowcase,
      tags: ["Figma", "React", "D3.js", "Tailwind"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Restaurant Chain",
      category: "Web Development",
      description: "Multi-location restaurant website with online ordering and reservation system.",
      image: workShowcase,
      tags: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Fitness Tracker",
      category: "Mobile Development",
      description: "Workout tracking app with social features and progress analytics.",
      image: workShowcase,
      tags: ["React Native", "Redux", "Node.js", "MySQL"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Learning Platform",
      category: "Web Development",
      description: "Online education platform with video streaming and interactive assessments.",
      image: workShowcase,
      tags: ["Vue.js", "Laravel", "AWS", "Redis"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design"];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "hero" : "elegant"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;