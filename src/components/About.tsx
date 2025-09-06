import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To deliver innovative web solutions that transform businesses and create meaningful digital experiences."
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "To be the leading web development partner that bridges technology and creativity for global success."
    },
    {
      icon: Users,
      title: "Core Values",
      description: "Innovation, Quality, Collaboration, and Customer Success drive everything we do."
    }
  ];

  const achievements = [
    "Award-winning design team",
    "100% project delivery rate",
    "24/7 customer support",
    "Agile development process"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Founded with a vision to democratize digital excellence, we've grown from a small startup to a trusted partner for businesses worldwide. Our expertise spans across modern web technologies, user experience design, and digital strategy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={teamPhoto} 
                alt="Our team working together"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-glow">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years Excellence</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;