import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

const PhoneModel = () => {
  return (
    <mesh rotation={[0, 0.5, 0]}>
      <boxGeometry args={[1, 2, 0.1]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
      <mesh position={[0, 0, 0.051]}>
        <boxGeometry args={[0.9, 1.9, 0.01]} />
        <meshStandardMaterial color="#000" emissive="#0ea5e9" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.35, 0.85, 0.051]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02]} />
        <meshStandardMaterial color="#222" metalness={0.8} />
      </mesh>
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The Future
              <br />
              <span className="text-gradient">In Your Hand</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Experience unparalleled performance with cutting-edge technology. 
              Designed to elevate every moment of your digital life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1">
                Explore Collection
              </button>
              <button className="px-8 py-4 rounded-full glass hover:bg-primary/10 transition-all">
                Watch Video
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 pt-8"
            >
              {[
                { label: "5G", desc: "Ultra Fast" },
                { label: "200MP", desc: "Pro Camera" },
                { label: "5000mAh", desc: "Battery" },
              ].map((spec, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-primary">{spec.label}</div>
                  <div className="text-sm text-muted-foreground">{spec.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-glow" />
            <Canvas>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <PhoneModel />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={2}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
