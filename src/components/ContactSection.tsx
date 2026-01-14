import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Currently seeking software engineer intern opportunities. I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Primary CTA */}
          <a
            href="mailto:haniarahman635@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-semibold text-lg hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            <Send size={20} />
            Say Hello
          </a>

          {/* Contact details */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="mailto:haniarahman635@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              haniarahman635@gmail.com
            </a>
            <a
              href="tel:03264377660"
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              032 6437 7660
            </a>
            <span className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-muted-foreground">
              <MapPin size={16} />
              Lahore, Pakistan
            </span>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Honeybee163"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hania-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
