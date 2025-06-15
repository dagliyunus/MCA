import { useState, useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import AuthModal from '../components/AuthModal';
import DashboardPreview from '../components/DashboardPreview';
import InsightsModal from '../components/InsightsModal';
import HeroHeader from '../components/HeroHeader';
import FeatureHighlight from '../components/FeatureHighlight';
import TechnologyStack from '../components/TechnologyStack';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Footer from '../components/Footer';
import { simulateDevnetCheck } from '../utils/devnet';

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

function SingleHomePage() {
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
  const [contractAddress, setContractAddress] = useState('');
  const APP_NAME = 'MCA';

  useEffect(() => {
    const interval = setInterval(() => {
      setTradingData(prevData => {
        const newValue = prevData[prevData.length - 1].value * (1 + (Math.random() - 0.5) * 0.01);
        const newTime = new Date(Date.now()).toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        });
        return [...prevData.slice(1), { time: newTime, value: Math.round(newValue) }];
      });

      setSystemMetrics(() => ({
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
          if (i > 0) signal.timestamp = `${i * 2} minutes ago`;
        });
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen animate-gradient">
      <ParticleBackground />
      <div className="fixed inset-0 bg-lines"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>

      <AuthModal show={showModal} onClose={() => setShowModal(false)} appName={APP_NAME} />

      <DashboardPreview
        show={showDashboardPreview}
        onClose={() => setShowDashboardPreview(false)}
        contractAddress={contractAddress}
        onContractChange={setContractAddress}
        onRunSimulation={async () => {
            if (!contractAddress) return alert("Please enter a contract address.");
            try {
            const isValid = await simulateDevnetCheck(contractAddress);
            alert(isValid ? "✅ Token is valid on Devnet." : "❌ Invalid token.");
            } catch {
            alert("⚠️ Simulation failed.");
            }
        }}
        tradingData={tradingData}
        aiSignals={aiSignals as { type: 'buy' | 'sell' | 'alert'; asset: string; confidence: number; reason: string; timestamp: string; }[]}
        systemMetrics={systemMetrics}
        />

      <InsightsModal show={showInsights} onClose={() => setShowInsights(false)} />

      <HeroHeader
        appName={APP_NAME}
        onStartTrading={() => setShowModal(true)}
        onViewDashboard={() => setShowDashboardPreview(true)}
        onInsightsClick={() => setShowInsights(true)}
      />

      <FeatureHighlight />
      <TechnologyStack />
      <PerformanceMetrics systemMetrics={systemMetrics} />
      <Footer appName={APP_NAME} />
    </div>
  );
}

export default SingleHomePage;