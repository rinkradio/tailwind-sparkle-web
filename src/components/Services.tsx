import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Palette, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud infrastructure.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Security First"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development", 
      description: "Native and cross-platform mobile apps that provide seamless user experiences across all devices.",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for optimal user engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Multi-vendor Support"]
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Digital marketing strategies and SEO optimization to increase your online visibility and reach.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Analytics Setup"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights and analytics implementation to help you make informed business decisions.",
      features: ["Google Analytics", "Custom Dashboards", "Performance Metrics", "Conversion Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Solutions That 
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Transform Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your unique business needs and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;