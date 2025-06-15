// src/components/HeroHeader.tsx
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Brain, Globe, Shield, TrendingUp, Twitter } from 'lucide-react';
import GradientButton from './GradientButton';
import AnimatedCard from './AnimatedCard';
import MobileNav from './MobileNav';

interface HeroHeaderProps {
  appName: string;
  onStartTrading: () => void;
  onViewDashboard: () => void;
  onInsightsClick: () => void;
}

export default function HeroHeader({
  appName,
  onStartTrading,
  onViewDashboard,
  onInsightsClick
}: HeroHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <TrendingUp className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">{appName}</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              href="#features"
              className="text-purple-200 hover:text-white transition"
            >
              Features
            </motion.a>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onInsightsClick}
              className="text-purple-200 hover:text-white transition"
            >
              Insights
            </motion.button>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="#about"
              onClick={() => alert('About clicked - placeholder only')}
              className="text-purple-200 hover:text-white transition"
            >
              About
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://x.com/mcaai77933"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-white transition"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <GradientButton onClick={onStartTrading}>Get Started</GradientButton>
          </motion.div>
        </div>
      </nav>

      <MobileNav onInsightsClick={onInsightsClick} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Next-Gen <span className="text-purple-400">AI Trading</span> Intelligence
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              Harness the power of advanced AI to dominate markets with predictive analytics and automated risk management.
            </p>
            <div className="flex space-x-4">
              <GradientButton onClick={onStartTrading}>
                Start Trading <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
              <GradientButton onClick={onViewDashboard} primary={false}>
                View Dashboard
              </GradientButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <AnimatedCard>
              <div className="grid grid-cols-2 gap-4 p-8">
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-purple-900/30 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-purple-400 mb-2" />
                  <div className="text-purple-200 text-sm">Real-time Market Data</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-purple-900/30 rounded-lg">
                  <Brain className="h-8 w-8 text-purple-400 mb-2" />
                  <div className="text-purple-200 text-sm">AI Predictions</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-purple-900/30 rounded-lg">
                  <Shield className="h-8 w-8 text-purple-400 mb-2" />
                  <div className="text-purple-200 text-sm">Risk Management</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-purple-900/30 rounded-lg">
                  <Globe className="h-8 w-8 text-purple-400 mb-2" />
                  <div className="text-purple-200 text-sm">Global Markets</div>
                </motion.div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </header>
  );
}