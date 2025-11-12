import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero3D />
      <Features />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
