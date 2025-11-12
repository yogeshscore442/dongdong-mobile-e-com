import { motion } from "framer-motion";
import { Zap, Camera, Battery, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast 5G",
    description: "Experience blazing speeds with next-generation 5G connectivity that keeps you ahead.",
  },
  {
    icon: Camera,
    title: "AI Pro Camera",
    description: "Capture stunning photos with advanced AI-powered camera systems and computational photography.",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "Power through your day with intelligent battery management and ultra-fast charging technology.",
  },
  {
    icon: Cpu,
    title: "Next-Gen Processor",
    description: "Unleash peak performance with our custom-designed chipset optimized for mobile excellence.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Innovation <span className="text-gradient">Meets Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature engineered to perfection, every detail crafted with care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 space-y-4 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
