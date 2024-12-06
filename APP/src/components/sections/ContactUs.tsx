import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content }: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-all duration-300">
    <Icon className="text-pink-500" size={24} />
    <div>
      <h3 className="text-lg font-orbitron text-white">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

const ContactUs = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      content: "currents@nitt.edu"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 xxxxxxxxxx"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "NIT Trichy, Tamil Nadu"
    }
    
  ];

  return (
    <section id="contact-us" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-16">
          Contact Us
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;