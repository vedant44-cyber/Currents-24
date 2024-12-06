//import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
     
      <div className="absolute inset-0 bg-[url('icons/1.jpeg')] bg-cover bg-center "></div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-['Orbitron'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient mb-6">
          CURRENTS'24
        </h1>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-pink-500" />
          <p className="text-xl md:text-2xl text-white font-light">
            Creating Circuits, powering connections, shaping the future...!
          </p>
          <Sparkles className="text-pink-500" />
        </div>
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
           Annual National Level Technical Symposium of 
            Department of Electrical and Electronics Engineering
               NIT Trichy
        </p>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;