import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Visionary leader with 15+ years in digital transformation and business strategy.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez", 
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Creative director specializing in user-centered design and brand experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      image: "👨‍🔬",
      bio: "Senior engineer with expertise in React, Node.js, and cloud architecture.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: "👩‍🏫",
      bio: "Agile expert ensuring smooth project delivery and client satisfaction.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Alex Kumar",
      role: "Marketing Director", 
      image: "👨‍💼",
      bio: "Digital marketing strategist focused on growth and brand awareness.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Amazing Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, technical expertise, and business acumen to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Specializations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;