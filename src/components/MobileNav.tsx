import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, TrendingUp, Twitter } from 'lucide-react';

interface MobileNavProps {
  onInsightsClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onInsightsClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden px-6 py-4 relative z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="text-purple-200 hover:text-white transition"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-4 w-[85%] max-w-xs bg-purple-950 z-50 rounded-xl shadow-2xl backdrop-blur-lg"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-purple-800">
              <div className="flex items-center space-x-2 text-white text-xl font-bold">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span>MCA</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-purple-200 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 space-y-4 text-purple-200">
              <a href="#features" className="hover:text-white">Features</a>

              <button
                onClick={() => {
                  onInsightsClick();
                  setIsOpen(false);
                }}
                className="text-left hover:text-white"
              >
                Insights
              </button>

              <button
                onClick={() => {
                  alert("About clicked — placeholder only!");
                  setIsOpen(false);
                }}
                className="text-left hover:text-white"
              >
                About
              </button>

              <a
                href="https://x.com/HypernodeAi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center"
              >
                <Twitter className="w-5 h-5 mr-2" /> Twitter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;