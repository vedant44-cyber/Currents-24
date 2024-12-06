import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      shrink ? 'py-2 bg-black/90 backdrop-blur-lg' : 'py-4 bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-['Orbitron'] text-pink-500 font-bold tracking-wider">
            CURRENTS'24
          </h1>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Events & Workshops', 'Tronicals', 'Contact Us', 'Core Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-pink-500 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {['Events & Workshops', 'Tronicals', 'Contact Us', 'Core Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-white hover:text-pink-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;