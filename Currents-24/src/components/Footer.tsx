//import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white flex items-center justify-center gap-2">
          Made with <Heart className="text-pink-500 animate-pulse" size={20} /> by{' '}
          <span className="text-pink-500 font-semibold">EEEA DevOps Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;