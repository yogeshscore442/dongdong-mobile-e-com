import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={logo} alt="Dong Dong" className="h-12 w-auto" />
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/shop" }
            ].map((item, idx) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>

          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
