// src/components/InsightsModal.tsx
import { motion } from 'framer-motion';
import { X, Lightbulb, TrendingUp, ArrowUpRight, PieChart } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

interface InsightsModalProps {
  show: boolean;
  onClose: () => void;
}

export default function InsightsModal({ show, onClose }: InsightsModalProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-purple-950 p-8 rounded-lg shadow-xl max-w-6xl w-full mx-4 relative border border-purple-500/20 h-[80vh] overflow-y-auto glass-effect"
      >
        <button
          onClick={() => {
            onClose();
            document.body.style.overflow = 'auto';
          }}
          className="absolute top-4 right-4 text-purple-200 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Lightbulb className="h-6 w-6 text-purple-400 mr-2" />
          Market Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Market Trends */}
          <AnimatedCard delay={0.1}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                Market Trends
              </h3>
              <div className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-200">BTC/USD Trend</span>
                    <span className="text-green-400 flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      +2.4%
                    </span>
                  </div>
                  <p className="text-sm text-purple-300">Strong bullish momentum with increasing volume</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-200">Market Sentiment</span>
                    <span className="text-green-400">Bullish</span>
                  </div>
                  <p className="text-sm text-purple-300">Positive social sentiment and institutional inflows</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-200">Volume Analysis</span>
                    <span className="text-purple-400">High</span>
                  </div>
                  <p className="text-sm text-purple-300">Above average trading volume in major pairs</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* AI Predictions */}
          <AnimatedCard delay={0.2}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <PieChart className="h-5 w-5 text-purple-400 mr-2" />
                AI Predictions
              </h3>
              <div className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Short-term Forecast</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <PieChart className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-200">Probability Distribution</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="text-center p-2 glass-effect rounded">
                      <div className="text-green-400">65%</div>
                      <div className="text-sm text-purple-200">Bullish</div>
                    </div>
                    <div className="text-center p-2 glass-effect rounded">
                      <div className="text-purple-400">25%</div>
                      <div className="text-sm text-purple-200">Neutral</div>
                    </div>
                    <div className="text-center p-2 glass-effect rounded">
                      <div className="text-red-400">10%</div>
                      <div className="text-sm text-purple-200">Bearish</div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Key Levels</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Resistance</span>
                      <span className="text-purple-400">48,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Support</span>
                      <span className="text-purple-400">44,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </motion.div>
    </motion.div>
  );
}