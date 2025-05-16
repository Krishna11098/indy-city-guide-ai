
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navLinks = document.getElementById('navLinks');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      
      if (navLinks && 
          mobileMenuBtn && 
          !navLinks.contains(target) && 
          !mobileMenuBtn.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <nav 
      id="navbar" 
      className="py-3 px-8 flex justify-between items-center bg-white w-full shadow-sm"
    >
      <Link to="/" className="text-2xl font-bold text-primary cursor-pointer select-none flex items-center gap-2">
        <img src="/indianapolis.png" alt="IndyChat Logo" className="h-[50px] w-[50px]" />
        <span>IndyChat</span>
      </Link>
      
      <button 
        id="mobileMenuBtn"
        className="hidden lg:hidden md:block sm:block border-none text-dark text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
      
      <div className="flex items-center">
        <div 
          id="navLinks"
          className={`flex items-center lg:flex md:hidden sm:hidden ${
            isMenuOpen ? 'md:flex sm:flex' : 'md:hidden sm:hidden'
          } md:fixed sm:fixed md:top-[76px] sm:top-[76px] md:w-full sm:w-full md:left-0 sm:left-0 md:h-auto sm:h-auto md:bg-white sm:bg-white md:flex-col sm:flex-col md:shadow-md sm:shadow-md md:z-50 sm:z-50`}
        >
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:items-center">
            <a href="#home" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>Home</a>
            <a href="#features" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>Features</a>
            <a href="#how-it-works" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>How It Works</a>
            <a href="#testimonials" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>Testimonials</a>
            <Link to="/about" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>About Us</Link>
            <Link to="/contact" className="px-4 py-2 text-dark font-medium hover:text-primary" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4 ml-6 md:hidden sm:hidden">
          <Link to="/login" className="px-5 py-2 border border-primary rounded-md text-primary hover:bg-gray-50" onClick={closeMenu}>Login</Link>
          <Link to="/signup" className="px-5 py-2 bg-primary text-white rounded-md hover:bg-[#004b5b]" onClick={closeMenu}>Sign Up</Link>
        </div>

        {isMenuOpen && (
          <div className="hidden md:flex sm:flex md:fixed sm:fixed md:top-[auto] sm:top-[auto] md:bottom-0 sm:bottom-0 md:left-0 sm:left-0 md:w-full sm:w-full md:bg-white sm:bg-white md:p-4 sm:p-4 md:shadow-[0_-2px_10px_rgba(0,0,0,0.1)] sm:shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:flex-row sm:flex-row md:justify-center sm:justify-center md:gap-4 sm:gap-4">
            <Link to="/login" className="px-5 py-2 border border-primary rounded-md text-primary w-full text-center" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="px-5 py-2 bg-primary text-white rounded-md w-full text-center" onClick={closeMenu}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
