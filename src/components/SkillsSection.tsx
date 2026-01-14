import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "core" },
  { name: "Django", category: "core" },
  { name: "LangChain & LangGraph", category: "ai" },
  { name: "Pydantic", category: "core" },
  { name: "NumPy & Pandas", category: "data" },
  { name: "Matplotlib & Seaborn", category: "data" },
  { name: "LangSmith", category: "ai" },
  { name: "GitHub", category: "tools" },
  { name: "HTML & CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Back-end Development", category: "core" },
  { name: "Database Management", category: "data" },
  { name: "SQL & NoSQL", category: "data" },
];

const categoryColors: Record<string, string> = {
  core: "bg-primary/20 text-primary border-primary/30",
  ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  data: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  frontend: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  tools: "bg-green-500/20 text-green-400 border-green-500/30",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable applications, data analysis, and AI integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${categoryColors[skill.category]}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/40" /> Core
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500/40" /> AI/ML
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500/40" /> Data
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500/40" /> Frontend
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/40" /> Tools
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
