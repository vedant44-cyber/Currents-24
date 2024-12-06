import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsWorkshops from './components/sections/EventsWorkshops';
import Tronicals from './components/sections/Tronicals';
import ContactUs from './components/sections/ContactUs';
import CoreTeam from './components/sections/CoreTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventsWorkshops />
        <Tronicals />
        <ContactUs />
        <CoreTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;