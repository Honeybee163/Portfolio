import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Intern",
    company: "MoonSys",
    location: "Lahore, Pakistan",
    period: "Feb 2025 – Jul 2025",
    points: [
      "Built custom, scalable software using modern tech and agile practices",
      "Used tools like Git, MongoDB, Postman, and Jira in an agile environment",
      "Worked with React and Node to understand front-end and back-end development",
      "Implemented features, debugged code, and collaborated to deliver milestones",
    ],
  },
  {
    title: "Self-directed Learning",
    company: "Independent",
    location: "Lahore",
    period: "Feb 2024 – Jan 2025",
    points: [
      "Solved 100+ problems on platforms like LeetCode focusing on algorithms and data structures",
      "Gained strong understanding of time and space complexity for optimized solutions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world skills through hands-on projects and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-1/2"
              }`}
              style={{
                marginLeft: index % 2 === 1 ? "50%" : 0,
                paddingRight: index % 2 === 0 ? "calc(50% + 1.5rem)" : 0,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 -translate-x-1/2 animate-pulse-glow" 
                   style={{ left: index % 2 === 0 ? "auto" : 0, right: index % 2 === 0 ? "-6px" : "auto" }} />

              <div className="glass-card p-6 rounded-xl">
                <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Briefcase size={16} />
                  <span className="font-semibold">{exp.title}</span>
                </div>
                
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {exp.company}
                </h3>
                
                <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
                
                <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
