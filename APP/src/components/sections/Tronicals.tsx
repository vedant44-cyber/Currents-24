// import React from 'react';
import { BookOpen } from 'lucide-react';

const Tronicals = () => {
  return (
    <section id="tronicals" className="py-20 min-h-screen flex items-center bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            Tronicals
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            EEE Association 2024-25 proudly presents the much-awaited Tronicals, our department’s technical magazine.

          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75"></div>
          <div className="relative bg-black p-8 rounded-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80"
                alt="Tronicals Magazine Preview"
                className="w-full h-72 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-pink-500" size={32} />
                <span className="text-pink-500 text-sm font-semibold tracking-wider">LATEST EDITION</span>
              </div>
              <h3 className="text-2xl font-orbitron text-white mb-4">Tronicals 2024</h3>
              <p className="text-gray-300 mb-6">
                This edition focuses on Net Zero and has included new sections, such as interviews with professors and alumni.
              </p>
              <button className="group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium transition-all hover:scale-105">
                <span className="relative z-10">Subscribe to Tronicals</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tronicals;