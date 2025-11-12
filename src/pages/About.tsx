import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              About Dong Dong
            </h1>
            
            <div className="space-y-8 text-lg text-foreground/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to Dong Dong, where innovation meets elegance. We are a leading smartphone manufacturer 
                dedicated to creating premium devices that enhance your digital lifestyle.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p>
                  To deliver cutting-edge technology wrapped in stunning design, making advanced features 
                  accessible to everyone while maintaining the highest standards of quality and performance.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p>
                  To be the world's most innovative smartphone brand, pushing boundaries in mobile technology 
                  and setting new standards for design excellence and user experience.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid md:grid-cols-3 gap-6 mt-12"
              >
                {[
                  { title: "Innovation", desc: "Cutting-edge technology in every device" },
                  { title: "Quality", desc: "Premium materials and craftsmanship" },
                  { title: "Design", desc: "Sleek aesthetics that turn heads" }
                ].map((value, idx) => (
                  <div key={idx} className="glass p-6 rounded-xl text-center">
                    <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                    <p className="text-sm">{value.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
