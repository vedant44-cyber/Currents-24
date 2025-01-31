import React from 'react';
import { Zap, Calendar, Users } from 'lucide-react';

const EventCard = ({ title, date, description, icon: Icon }: {
  title: string;
  date: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="bg-black/40 backdrop-blur-lg border border-pink-500/20 rounded-lg p-6 hover:border-pink-500 transition-all duration-300 group">
    <Icon className="text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
    <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
    <p className="text-pink-500 text-sm mb-2">{date}</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

const EventsWorkshops = () => {
  const events = [
    {
      title: "Capture Currents",
      date: "March 15, 2024",
      description: " Are you passionate about photography? Well, we've got you covered. ",
      icon: Zap
    },
    {
      title: "TEXAS Instruments Workshop",
      date: "March 16, 2024",
      description: "Getting Started with Embedded Software Development on Microcontrollers",
      icon: Calendar
    },
    {
      title: "Software for hardware workshop",
      date: "March 17, 2024",
      description: "An immersive workshop by Synopsys on Verilog to SystemVerilog",
      icon: Users
    }
  ];

  return (
    <section id="events-&-workshops" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-16">
          Events & Workshops
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsWorkshops;