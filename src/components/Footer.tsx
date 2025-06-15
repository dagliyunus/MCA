// src/components/Footer.tsx
import { TrendingUp, Twitter } from 'lucide-react';

interface FooterProps {
  appName: string;
}

export default function Footer({ appName }: FooterProps) {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <TrendingUp className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">{appName}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/mcaai77933"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <div className="text-purple-400 text-sm">
              © 2025 {appName}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}