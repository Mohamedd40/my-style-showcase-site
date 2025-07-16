import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectTask from "@/assets/project-task.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard. Built for scalability and performance.",
      image: projectEcommerce,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media App",
      description: "Real-time chat application with multimedia sharing, user authentication, and responsive mobile design.",
      image: projectSocial,
      technologies: ["React Native", "Socket.io", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management platform with kanban boards, team analytics, and deadline tracking.",
      image: projectTask,
      technologies: ["Vue.js", "Django", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of applications I've built, from concept to deployment. Each project demonstrates 
            different aspects of modern web development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-card/50 backdrop-blur-md border-border hover:shadow-card transition-all duration-300 animate-fade-up ${
                project.featured ? 'lg:scale-105 shadow-glow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-primary text-white">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="gradient" className="group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="glass">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" className="hover:border-primary">
            <Github className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;