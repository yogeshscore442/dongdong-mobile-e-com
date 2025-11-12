import { motion } from "framer-motion";
import { useState } from "react";
import { Check, CreditCard, Smartphone, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";
import phone4 from "@/assets/phone-4.jpg";
import phone5 from "@/assets/phone-5.jpg";
import phone6 from "@/assets/phone-6.jpg";

const products = [
  { id: 1, name: "Dong Dong X1 Pro", price: "$999", image: phone1, inStock: true, specs: "6.7\" OLED, 12GB RAM, 256GB" },
  { id: 2, name: "Dong Dong X2 Ultra", price: "$1,199", image: phone2, inStock: true, specs: "6.8\" AMOLED, 16GB RAM, 512GB" },
  { id: 3, name: "Dong Dong Lite", price: "$699", image: phone3, inStock: true, specs: "6.5\" LCD, 8GB RAM, 128GB" },
  { id: 4, name: "Dong Dong Max", price: "$1,399", image: phone4, inStock: false, specs: "7.0\" OLED, 18GB RAM, 1TB" },
  { id: 5, name: "Dong Dong Mini", price: "$599", image: phone5, inStock: true, specs: "6.1\" OLED, 6GB RAM, 128GB" },
  { id: 6, name: "Dong Dong Fold", price: "$1,799", image: phone6, inStock: true, specs: "7.6\" Foldable, 12GB RAM, 512GB" },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Shop Smartphones
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Product Display */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="glass rounded-3xl overflow-hidden p-8">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-2xl hover-scale"
                  />
                </div>
                
                <div className="grid grid-cols-6 gap-4">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`glass rounded-lg p-2 transition-all ${
                        selectedProduct.id === product.id ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Product Details & Purchase */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-3xl font-bold text-primary">{selectedProduct.price}</p>
                    {selectedProduct.inStock ? (
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/50">
                        <Check className="w-3 h-3 mr-1" />
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                  <p className="text-foreground/70 text-lg">{selectedProduct.specs}</p>
                </div>

                <div className="glass p-6 rounded-2xl space-y-4">
                  <h3 className="font-semibold text-lg">Key Features</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      5G Connectivity & Wi-Fi 6E
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      AI-Powered Triple Camera System
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      All-Day Battery Life
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Premium Glass & Metal Design
                    </li>
                  </ul>
                </div>

                {/* Quantity Selector */}
                <div className="glass p-6 rounded-2xl">
                  <label className="block font-semibold mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={!selectedProduct.inStock}
                    >
                      -
                    </Button>
                    <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={!selectedProduct.inStock}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="glass p-6 rounded-2xl space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Methods
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Credit Card", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
                      <div key={method} className="p-3 border border-border rounded-lg text-center text-sm hover:border-primary transition-colors cursor-pointer">
                        {method}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="glass p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Free Shipping</h3>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Estimated delivery in 3-5 business days
                  </p>
                </div>

                {/* Purchase Button */}
                <Button
                  size="lg"
                  className="w-full text-lg py-6"
                  disabled={!selectedProduct.inStock}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  {selectedProduct.inStock ? "Buy Now" : "Out of Stock"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
