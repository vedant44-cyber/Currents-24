import React from 'react';
import { CircuitBoard, Cpu, Wifi } from 'lucide-react';

const TronicalsCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
    <div className="relative bg-black p-6 rounded-lg">
      <Icon className="text-pink-500 mb-4" size={32} />
      <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Tronicals = () => {
  const features = [
    {
      icon: CircuitBoard,
      title: "Circuit Design",
      description: "Advanced electronic circuit design competitions and workshops"
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Hands-on experience with modern embedded systems"
    },
    {
      icon: Wifi,
      title: "IoT Projects",
      description: "Internet of Things project showcase and competitions"
    }
  ];

  return (
    <section id="tronicals" className="py-20 min-h-screen flex items-center bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-16">
          Tronicals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <TronicalsCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tronicals;