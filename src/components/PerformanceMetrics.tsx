// src/components/PerformanceMetrics.tsx
import AnimatedCounter from './AnimatedCounter';
import AnimatedCard from './AnimatedCard';
import { Cpu, Target } from 'lucide-react';

interface SystemMetrics {
  latency: number;
  activeNodes: number;
  networkLoad: number;
}

interface PerformanceMetricsProps {
  systemMetrics: SystemMetrics;
}

export default function PerformanceMetrics({ systemMetrics }: PerformanceMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Performance Metrics */}
      <AnimatedCard delay={0.3}>
        <div className="p-6 rounded-2xl">
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
                <span className="text-purple-200">Network Latency</span>
              </div>
              <span className="text-green-400">{systemMetrics.latency}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-purple-200">Active Nodes</span>
              </div>
              <span className="text-purple-400">{systemMetrics.activeNodes}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-purple-200">Network Load</span>
              </div>
              <span className="text-green-400">{systemMetrics.networkLoad}%</span>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}