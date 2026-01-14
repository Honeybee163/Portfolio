import { motion } from "framer-motion";
import { GraduationCap, Languages, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-gradient">Education & More</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Bachelor's in Computer Science</h4>
                <p className="text-sm text-muted-foreground">Lahore College Women University</p>
                <p className="text-xs text-primary">Currently Pursuing</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Intermediate</h4>
                <p className="text-sm text-muted-foreground">Computer Science</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Languages size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold">Languages</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Urdu</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">C1 - Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">English</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">B1 - Intermediate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Turkish</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">B1 - Intermediate</span>
              </div>
            </div>
          </motion.div>

          {/* Accomplishments & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold">Interests</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground text-sm mb-2">Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Learning Languages", "Chess", "Reading"].map((hobby) => (
                    <span
                      key={hobby}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-2">Accomplishments</h4>
                <p className="text-sm text-muted-foreground">
                  Solved 100+ DSA problems, achieving significant proficiency in algorithms through consistent practice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
