import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

interface StatsCardProps {
  number: string;
  text: string;
  delay?: number;
  specialFormat?: boolean;
}

export default function StatsCard({ number, text, delay = 0, specialFormat = false }: StatsCardProps) {
  const isPercentage = number.includes('%');
  const isMonetary = number.includes('$');
  const isLatency = number.includes('ms');
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, ''));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect rounded-lg p-6 border-gradient"
    >
      {specialFormat ? (
        <div className="text-4xl font-bold text-purple-400">{number}</div>
      ) : (
        <AnimatedCounter
          end={numericValue}
          prefix={isMonetary ? '$' : ''}
          suffix={
            isPercentage ? '%' : 
            isMonetary ? 'M+' : 
            isLatency ? 'ms' : 
            '+'
          }
        />
      )}
      <div className="text-purple-200 mt-2">{text}</div>
    </motion.div>
  );
}