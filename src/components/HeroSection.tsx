import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-50 animate-pulse" />
              <img
                src={profilePhoto}
                alt="Hania Rahman"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6"
          >
            <span className="text-gradient">Hania Rahman</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-display"
          >
            Python & Django Developer
          </motion.h2>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Skilled in SQL/NoSQL, data analysis with Pandas and NumPy, and visualization 
            using Matplotlib and Seaborn. Proficient in AI integration through LangChain 
            and experienced in collaborative development via GitHub.
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href="mailto:haniarahman635@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>haniarahman635@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>Lahore, Pakistan</span>
            </span>
            <a
              href="tel:03264377660"
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>032 6437 7660</span>
            </a>
          </motion.div>

          {/* Resume Download & Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <a
              href="/resume"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:glow shadow-lg"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
            <a
              href="https://github.com/Honeybee163"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hania-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
