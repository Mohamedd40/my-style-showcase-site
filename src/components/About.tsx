import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative, efficient solutions."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to development with strong communication skills."
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Always excited to explore new technologies and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            web applications that make a difference. I love turning ideas into reality 
            through elegant code and thoughtful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-md border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-md border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious computer science student, I've evolved into a seasoned developer 
                who thrives on creating meaningful digital experiences. From small startups to large 
                enterprises, I've helped teams build scalable applications that serve thousands of users. 
                When I'm not coding, you'll find me contributing to open source projects, mentoring 
                fellow developers, or exploring the latest tech trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;