import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our complete range of premium smartphones, each designed to deliver 
              exceptional performance and stunning aesthetics.
            </p>
          </motion.div>
          
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
