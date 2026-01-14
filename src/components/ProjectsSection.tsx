import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Attendance Management System",
    tech: ["Django", "Matplotlib", "CSV"],
    description:
      "Built a Django-based attendance system with role-based access for teachers and students.",
    features: [
      "Role-based access for teachers and students",
      "Manage classes, mark attendance, download monthly reports in CSV",
      "Student dashboards with attendance visualization using Matplotlib",
      "Data isolation ensuring teachers only view their own classes",
    ],
  },
  {
    title: "AI Chatbot",
    tech: ["LangGraph", "Streamlit", "Python"],
    description:
      "Developed a ChatGPT-like chatbot using LangGraph and Streamlit with conversation memory.",
    features: [
      "ChatGPT-like interface with LangGraph and Streamlit",
      "Conversation memory and multi-chat session switching",
      "Interactive UI with persistent chat history",
      "State management for seamless user experience",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects showcasing full-stack development and AI integration capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Layers size={24} />
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Honeybee163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
