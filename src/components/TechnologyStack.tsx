// src/components/TechnologyStack.tsx
import { motion } from 'framer-motion';
import { Cpu, Network, Layers, Workflow, Code } from 'lucide-react';

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-purple-950/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Cutting-Edge Technology Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="tech-card glass-effect p-6 rounded-lg border-gradient"
          >
            <Network className="tech-icon h-12 w-12 text-purple-400 mb-4 transition-all duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Neural Networks</h3>
            <p className="text-purple-200">Advanced deep learning models for precise market predictions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="tech-card glass-effect p-6 rounded-lg border-gradient"
          >
            <Layers className="tech-icon h-12 w-12 text-purple-400 mb-4 transition-all duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
            <p className="text-purple-200">Quantum-inspired algorithms for complex calculations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="tech-card glass-effect p-6 rounded-lg border-gradient"
          >
            <Workflow className="tech-icon h-12 w-12 text-purple-400 mb-4 transition-all duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">ML Pipeline</h3>
            <p className="text-purple-200">Automated machine learning workflow for continuous improvement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="tech-card glass-effect p-6 rounded-lg border-gradient"
          >
            <Code className="tech-icon h-12 w-12 text-purple-400 mb-4 transition-all duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Contracts</h3>
            <p className="text-purple-200">Blockchain integration for secure and automated trading</p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-purple-200 bg-purple-900/30 px-6 py-3 rounded-lg"
          >
            <Cpu className="h-5 w-5 text-purple-400" />
            <span>Powered by cutting-edge AI and quantum computing technology</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
