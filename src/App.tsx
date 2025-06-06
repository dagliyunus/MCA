import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Brain, 
  BarChart3, 
  Notebook as Robot, 
  ArrowRight, 
  Globe, 
  Clock, 
  CheckCircle, 
  Award, 
  Users, 
  Server, 
  X, 
  LineChart, 
  Cpu, 
  AlertCircle, 
  TrendingDown, 
  Zap, 
  Target, 
  Activity, 
  PieChart, 
  Lightbulb, 
  TrendingUp as ArrowUpRight, 
  Twitter,
  Network,
  Layers,
  Workflow,
  Code,
  BarChart as ChartBar 
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import ParticleBackground from './components/ParticleBackground';
import AnimatedCard from './components/AnimatedCard';
import GradientButton from './components/GradientButton';
import StatsCard from './components/StatsCard';
import FeatureCard from './components/FeatureCard';
import AnimatedCounter from './components/AnimatedCounter';

const initialTradingData = [
  { time: '9:00', value: 45200 },
  { time: '10:00', value: 45600 },
  { time: '11:00', value: 45400 },
  { time: '12:00', value: 45800 },
  { time: '13:00', value: 46200 },
  { time: '14:00', value: 46100 },
  { time: '15:00', value: 46500 },
];

const initialAiSignals = [
  {
    type: 'buy',
    asset: 'BTC/USD',
    confidence: 89,
    reason: 'Strong momentum indicators and positive sentiment analysis',
    timestamp: '2 minutes ago'
  },
  {
    type: 'alert',
    asset: 'ETH/USD',
    confidence: 76,
    reason: 'Potential breakout pattern forming',
    timestamp: '5 minutes ago'
  },
  {
    type: 'sell',
    asset: 'SOL/USD',
    confidence: 82,
    reason: 'Bearish divergence detected',
    timestamp: '12 minutes ago'
  }
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDashboardPreview, setShowDashboardPreview] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [tradingData, setTradingData] = useState(initialTradingData);
  const [aiSignals, setAiSignals] = useState(initialAiSignals);
  const [systemMetrics, setSystemMetrics] = useState({
    latency: 8.2,
    activeNodes: 1250,
    networkLoad: 67,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTradingData(prevData => {
        const newValue = prevData[prevData.length - 1].value * (1 + (Math.random() - 0.5) * 0.01);
        const newTime = new Date(Date.now()).toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        
        const newData = [...prevData.slice(1), { time: newTime, value: Math.round(newValue) }];
        return newData;
      });

      setSystemMetrics(prev => ({
        latency: +(Math.random() * 2 + 7).toFixed(1),
        activeNodes: Math.floor(Math.random() * 100 + 1200),
        networkLoad: Math.floor(Math.random() * 20 + 60),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const assets = ['BTC/USD', 'ETH/USD', 'SOL/USD', 'ADA/USD', 'DOT/USD'];
      const types = ['buy', 'sell', 'alert'];
      const reasons = [
        'Strong momentum indicators detected',
        'Volume spike with positive sentiment',
        'Technical pattern completion',
        'Market sentiment shift detected',
        'Algorithmic pattern recognition signal'
      ];

      const newSignal = {
        type: types[Math.floor(Math.random() * types.length)],
        asset: assets[Math.floor(Math.random() * assets.length)],
        confidence: Math.floor(Math.random() * 20 + 75),
        reason: reasons[Math.floor(Math.random() * reasons.length)],
        timestamp: 'Just now'
      };

      setAiSignals(prev => {
        const updated = [newSignal, ...prev.slice(0, -1)];
        updated.forEach((signal, i) => {
          if (i > 0) {
            signal.timestamp = `${i * 2} minutes ago`;
          }
        });
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStartTrading = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen animate-gradient">
      <ParticleBackground />
      <div className="fixed inset-0 bg-lines"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      
      {showModal && (
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
            className="bg-purple-950 p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative border border-purple-500/20"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-purple-200 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">Start Trading with MCA</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-purple-200 mb-2" htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password"
                  className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Create a password"
                />
              </div>
              <GradientButton onClick={() => {}} className="w-full mt-6">
                Create Account
              </GradientButton>
              <p className="text-center text-purple-200 mt-4">
                Already have an account?{' '}
                <button className="text-purple-400 hover:text-white transition">
                  Log in
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showDashboardPreview && (
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
              onClick={() => setShowDashboardPreview(false)}
              className="absolute top-4 right-4 text-purple-200 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">AI Trading Dashboard</h2>
            
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
      )}

      {showInsights && (
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
              onClick={() => setShowInsights(false)}
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
                    <Brain className="h-5 w-5 text-purple-400 mr-2" />
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
      )}

      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <TrendingUp className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">MCA</span>
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
                onClick={() => setShowInsights(true)}
                className="text-purple-200 hover:text-white transition"
              >
                Insights
              </motion.button>
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#about" 
                className="text-purple-200 hover:text-white transition"
              >
                About
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://x.com/HypernodeAi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <GradientButton onClick={handleStartTrading}>
                Get Started
              </GradientButton>
            </motion.div>
          </div>
        </nav>

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
                <GradientButton onClick={handleStartTrading}>
                  Start Trading <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
                <GradientButton onClick={() => setShowDashboardPreview(true)} primary={false}>
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
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-purple-900/30 rounded-lg"
                  >
                    <BarChart3 className="h-8 w-8 text-purple-400 mb-2" />
                    <div className="text-purple-200 text-sm">Real-time Market Data</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-purple-900/30 rounded-lg"
                  >
                    <Brain className="h-8 w-8 text-purple-400 mb-2" />
                    <div className="text-purple-200 text-sm">AI Predictions</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-purple-900/30 rounded-lg"
                  >
                    <Shield className="h-8 w-8 text-purple-400 mb-2" />
                    <div className="text-purple-200 text-sm">Risk Management</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-purple-900/30 rounded-lg"
                  >
                    <Globe className="h-8 w-8 text-purple-400 mb-2" />
                    <div className="text-purple-200 text-sm">Global Markets</div>
                  </motion.div>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </header>

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

      {/* Technology Section */}
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
              transition={{ delay:  0.2 }}
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

      <section className="py-20 bg-purple-950/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Performance Metrics
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StatsCard number="84.22%" text="Win Rate" delay={0.1} />
            <StatsCard number="<8ms" text="Average Latency" delay={0.2} specialFormat={true} />
            <StatsCard number="3K" text="Active Trades" delay={0.3} specialFormat={true} />
            <StatsCard number="92%" text="AI Accuracy" delay={0.4} />
          </div>
        </div>
      </section>

      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">MCA</span>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://x.com/HypernodeAi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <div className="text-purple-400 text-sm">
                © 2025 MCA. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;