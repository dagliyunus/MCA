// src/components/DashboardPreview.tsx
import { motion } from 'framer-motion';
import { X, LineChart, Brain, TrendingUp, TrendingDown, AlertCircle, Target, Cpu, Server, Shield, Activity } from 'lucide-react';
import GradientButton from './GradientButton';
import AnimatedCard from './AnimatedCard';
import AnimatedCounter from './AnimatedCounter';
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface AiSignal {
  type: 'buy' | 'sell' | 'alert';
  asset: string;
  confidence: number;
  reason: string;
  timestamp: string;
}

interface DashboardPreviewProps {
  show: boolean;
  onClose: () => void;
  contractAddress: string;
  onContractChange: (value: string) => void;
  onRunSimulation: () => void;
  tradingData: { time: string; value: number }[];
  aiSignals: AiSignal[];
  systemMetrics: { latency: number; activeNodes: number; networkLoad: number };
}

export default function DashboardPreview({
  show,
  onClose,
  contractAddress,
  onContractChange,
  onRunSimulation,
  tradingData,
  aiSignals,
  systemMetrics
}: DashboardPreviewProps) {
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
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-200 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">AI Trading Dashboard</h2>

        <div className="mb-6">
          <label className="block text-purple-200 mb-2" htmlFor="contract">
            Contract Address (Solana Devnet)
          </label>
          <input 
            type="text" 
            id="contract"
            value={contractAddress}
            onChange={(e) => onContractChange(e.target.value)}
            className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            placeholder="Enter test token address..."
          />
          <GradientButton onClick={onRunSimulation} className="mt-4 w-full">
            Run Devnet Simulation
          </GradientButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Market Overview */}
          <AnimatedCard delay={0.1}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <LineChart className="h-5 w-5 text-purple-400 mr-2" />
                Live Market Data
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={tradingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="time" stroke="#a78bfa" />
                    <YAxis stroke="#a78bfa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e1b4b', 
                        border: '1px solid rgba(147, 51, 234, 0.2)',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#a855f7" 
                      strokeWidth={2} 
                      dot={false}
                      isAnimationActive={true}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedCard>

          {/* AI Signals */}
          <AnimatedCard delay={0.2}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Brain className="h-5 w-5 text-purple-400 mr-2" />
                Live AI Signals
              </h3>
              <div className="space-y-4">
                {aiSignals.map((signal, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-4 rounded-lg border-gradient"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          {signal.type === 'buy' && <TrendingUp className="h-5 w-5 text-green-400" />}
                          {signal.type === 'sell' && <TrendingDown className="h-5 w-5 text-red-400" />}
                          {signal.type === 'alert' && <AlertCircle className="h-5 w-5 text-yellow-400" />}
                          <span className="text-white font-semibold">{signal.asset}</span>
                        </div>
                        <p className="text-purple-200 text-sm mt-1">{signal.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-400 font-semibold">{signal.confidence}% confidence</div>
                        <div className="text-purple-300 text-sm">{signal.timestamp}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Performance Metrics */}
          <AnimatedCard delay={0.3}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Target className="h-5 w-5 text-purple-400 mr-2" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-purple-200 text-sm">Win Rate</div>
                  <AnimatedCounter end={84.22} suffix="%" />
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-purple-200 text-sm">Avg. Return</div>
                  <AnimatedCounter end={3} suffix="%" />
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-purple-200 text-sm">Active Trades</div>
                  <AnimatedCounter end={3000} />
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-purple-200 text-sm">AI Accuracy</div>
                  <AnimatedCounter end={92} suffix="%" />
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* System Status */}
          <AnimatedCard delay={0.4}>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Cpu className="h-5 w-5 text-purple-400 mr-2" />
                Live System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-green-400 animate-pulse" />
                    <span className="text-purple-200">Network Latency</span>
                  </div>
                  <span className="text-green-400">{systemMetrics.latency}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-200">Active Nodes</span>
                  </div>
                  <span className="text-purple-400">{systemMetrics.activeNodes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-purple-200">Network Load</span>
                  </div>
                  <span className="text-green-400">{systemMetrics.networkLoad}%</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </motion.div>
    </motion.div>
  );
}