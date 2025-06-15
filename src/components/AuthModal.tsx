// src/components/AuthModal.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import GradientButton from './GradientButton';

interface AuthModalProps {
  show: boolean;
  onClose: () => void;
  appName: string;
}

export default function AuthModal({ show, onClose, appName }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);

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
        className="bg-purple-950 p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative border border-purple-500/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-200 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">
          {isLoginMode ? `Welcome Back to ${appName}` : `Start Trading with ${appName}`}
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-purple-200 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-purple-900/50 border rounded-lg px-4 py-2 text-white focus:outline-none ${
                error ? 'border-red-500' : 'border-purple-500/20 focus:border-purple-500'
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-purple-200 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-purple-900/50 border rounded-lg px-4 py-2 text-white focus:outline-none ${
                error ? 'border-red-500' : 'border-purple-500/20 focus:border-purple-500'
              }`}
              placeholder={isLoginMode ? "Enter your password" : "Create a password"}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm text-center mt-1">{error}</p>
          )}

          {/* Submit Button */}
          <GradientButton
            onClick={() => {
              if (!email || !password) {
                setError("⚠️ Please fill out all fields.");
                return;
              }
              setError(`⚠️ ${isLoginMode ? 'Login' : 'Registration'} not available — backend not connected.`);
            }}
            className="w-full mt-6"
          >
            {isLoginMode ? "Log In" : "Create Account"}
          </GradientButton>

          {/* Switch between login and register */}
          <p className="text-center text-purple-200 mt-4">
            {isLoginMode ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => {
                    setIsLoginMode(false);
                    setError('');
                  }}
                  className="text-purple-400 hover:text-white transition"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setIsLoginMode(true);
                    setError('');
                  }}
                  className="text-purple-400 hover:text-white transition"
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}