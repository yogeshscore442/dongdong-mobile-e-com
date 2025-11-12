import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={logo} alt="Dong Dong" className="h-12 w-auto" />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Products", "Features", "Technology", "Support"].map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
