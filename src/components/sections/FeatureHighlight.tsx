// src/components/FeatureHighlight.tsx
import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';
import GradientButton from '../common/GradientButton';

interface FeatureHighlightProps {
  contractAddress: string;
  onContractChange: (value: string) => void;
  onRunSimulation: () => void;
  isValid: boolean | null;
}

export default function FeatureHighlight({
  contractAddress,
  onContractChange,
  onRunSimulation,
  isValid,
}: FeatureHighlightProps) {
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

        {/* Input block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl mx-auto bg-purple-900/20 rounded-xl p-6 shadow-inner"
        >
          {/* Visual bar simulating token length */}
            <div
              className="h-full bg-purple-500/50 rounded-md"
              style={{ width: `${44 * 8}px`, maxWidth: '100%' }}
            ></div>
          <label className="block text-purple-200 mb-2" htmlFor="contract">
            Contract Address 
          </label>
          <input
            type="text"
            id="contract"
            value={contractAddress}
            onChange={(e) => onContractChange(e.target.value)}
            className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            placeholder="Enter test token address..."
          />
          <div className="flex justify-center">
            <GradientButton
              onClick={onRunSimulation}
              className="mt-4 w-full max-w-xs"
            >
              Run Devnet Simulation
            </GradientButton>
          </div>
          {isValid !== null && (
            <p className={`mt-3 text-center ${isValid ? 'text-green-400' : 'text-red-400'}`}>
              {isValid
                ? '✅ Valid Devnet Token Address'
                : '❌ Invalid or Unrecognized Address'}
            </p>
          )}
        </motion.div>

        {/* Feature cards */}
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