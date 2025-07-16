import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "JavaScript", "HTML5", "CSS3"],
      color: "bg-blue-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "bg-green-500"
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Nginx", "Jest", "Webpack"],
      color: "bg-purple-500"
    },
    {
      title: "Mobile & Others",
      skills: ["React Native", "Flutter", "Figma", "Photoshop", "Agile", "REST APIs"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-md border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-accent transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience Timeline</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {[
              {
                year: "2024",
                title: "Senior Full Stack Developer",
                company: "TechCorp Inc.",
                description: "Led development of microservices architecture serving 100k+ users"
              },
              {
                year: "2022",
                title: "Full Stack Developer",
                company: "StartupXYZ",
                description: "Built and scaled web applications from 0 to 50k users"
              },
              {
                year: "2020",
                title: "Frontend Developer",
                company: "Digital Agency",
                description: "Created responsive web applications for various clients"
              }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center mb-8 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-8 shadow-glow-primary">
                  {item.year}
                </div>
                <Card className="flex-1 bg-card/30 backdrop-blur-md border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;