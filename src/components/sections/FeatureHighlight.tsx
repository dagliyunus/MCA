// src/components/FeatureHighlight.tsx
import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';

export default function FeatureHighlight() {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm" id="features">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Advanced Trading Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Brain className="h-8 w-8 text-purple-400" />} 
            title="Neural Predictions" 
            description="State-of-the-art neural networks analyze complex market patterns to predict future trends." 
            delay={0.2} 
          />
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8 text-purple-400" />} 
            title="Real-time Analytics" 
            description="Microsecond-precision market analysis with advanced visualization tools." 
            delay={0.4} 
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-purple-400" />} 
            title="Quantum Risk Engine" 
            description="Next-generation risk assessment using quantum-inspired algorithms." 
            delay={0.6} 
          />
        </div>
      </div>
    </section>
  );
}
