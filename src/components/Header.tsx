import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-primary'}`}>PrinceHub</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[var(--text-main)] font-medium">
          <Link to="/atlas" className="hover:text-secondary cursor-pointer transition-colors">
            Anatomy
          </Link>
          <Link to="/videos" className="hover:text-secondary cursor-pointer transition-colors">Videos</Link>
          <Link to="/quiz" className="hover:text-secondary cursor-pointer transition-colors">Quizzes</Link>
          <Link to="/articles" className="hover:text-secondary cursor-pointer transition-colors">Articles</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Search size={20} className="text-text-muted" />
          </button>
          <button className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Globe size={20} className="text-text-muted" />
            <span className="text-sm font-medium">EN</span>
          </button>
          <Link to="/atlas" className="btn-primary">
            Start Learning
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-outline p-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6 font-semibold">
            <Link to="/atlas" className="flex justify-between items-center border-b border-outline pb-2" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Anatomy</span>
            </Link>
            <Link to="/videos" className="border-b border-outline pb-2" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link>
            <Link to="/quiz" className="border-b border-outline pb-2" onClick={() => setIsMobileMenuOpen(false)}>Quizzes</Link>
            <Link to="/articles" className="border-b border-outline pb-2" onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
            <div className="flex flex-col gap-4 pt-4">
              <Link 
                to="/atlas" 
                className="btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Learning
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
