import { motion } from "framer-motion";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";
import phone4 from "@/assets/phone-4.jpg";
import phone5 from "@/assets/phone-5.jpg";
import phone6 from "@/assets/phone-6.jpg";

const products = [
  {
    id: 1,
    name: "Obsidian Pro Max",
    image: phone1,
    price: "$1,299",
    tagline: "Premium Power",
    specs: ["6.7\" OLED", "12GB RAM", "Triple Camera"],
  },
  {
    id: 2,
    name: "Gold Edition Elite",
    image: phone2,
    price: "$1,499",
    tagline: "Luxury Redefined",
    specs: ["6.8\" AMOLED", "16GB RAM", "Quad Camera"],
  },
  {
    id: 3,
    name: "Pearl White Vision",
    image: phone3,
    price: "$1,199",
    tagline: "Elegant Innovation",
    specs: ["6.5\" OLED", "12GB RAM", "AI Camera"],
  },
  {
    id: 4,
    name: "Azure 5G Ultra",
    image: phone4,
    price: "$1,399",
    tagline: "Speed Unleashed",
    specs: ["6.7\" LTPO", "12GB RAM", "Periscope Lens"],
  },
  {
    id: 5,
    name: "Flex Foldable",
    image: phone5,
    price: "$1,799",
    tagline: "Unfold Possibilities",
    specs: ["7.6\" Foldable", "16GB RAM", "Flex Mode"],
  },
  {
    id: 6,
    name: "Gaming Beast X",
    image: phone6,
    price: "$1,599",
    tagline: "Ultimate Gaming",
    specs: ["6.8\" 165Hz", "18GB RAM", "RGB Lighting"],
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect device that matches your lifestyle and ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden hover-lift">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                      <p className="text-primary text-sm font-medium">{product.tagline}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-2xl font-bold text-gradient"
                    >
                      {product.price}
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-semibold transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Mirror effect */}
              <div className="absolute -bottom-8 left-0 right-0 h-16 opacity-20 blur-xl bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
