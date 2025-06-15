import { motion } from 'framer-motion';

interface GradientButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export default function GradientButton({ onClick, children, primary = true, className = '' }: GradientButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${primary ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-900/50 hover:bg-purple-900/70'} 
        text-white px-8 py-3 rounded-lg transition 
        ${primary ? 'shadow-lg shadow-purple-500/20 glow' : ''} 
        relative overflow-hidden group
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 group-hover:translate-x-full duration-500 ease-out -skew-x-12" />
    </motion.button>
  );
}