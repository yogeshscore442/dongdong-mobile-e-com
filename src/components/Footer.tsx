import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const links = {
    Products: ["Smartphones", "Accessories", "Tablets", "Wearables"],
    Support: ["Help Center", "Contact Us", "Warranty", "Repairs"],
    Company: ["About Us", "Careers", "Press", "Partners"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Dong Dong"
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-xs">
              Pioneering the future of mobile technology with innovation, design, and uncompromising quality.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Dong Dong. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
