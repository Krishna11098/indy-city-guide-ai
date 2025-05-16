
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
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
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <nav 
      id="navbar" 
      className={`py-4 px-8 flex justify-between items-center bg-white/98 fixed w-full z-[1000] shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-all duration-300 md:px-8 ${
        isScrolled ? 'py-3 shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : ''
      }`}
    >
      <Link to="/" className="text-2xl font-bold text-primary cursor-pointer select-none flex items-center gap-2 transition-all duration-300">
        <img src="/indianapolis.png" alt="IndyChat Logo" className="h-[50px] w-[50px]" />
        <span className={`${isScrolled ? 'text-xl' : 'text-2xl'}`}>IndyChat</span>
      </Link>
      
      <button 
        id="mobileMenuBtn"
        className="hidden md:block bg-none border-none text-dark text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
      
      <div 
        id="navLinks"
        className={`flex gap-7 items-center md:fixed md:top-[70px] md:w-full md:h-[calc(100vh-70px)] md:bg-white md:flex-col md:gap-6 md:p-8 md:transition-all md:duration-300 md:shadow-[0_10px_20px_rgba(0,0,0,0.1)] ${
          isMenuOpen ? 'md:left-0' : 'md:left-[-100%]'
        }`}
      >
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#features" className="nav-link" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" className="nav-link" onClick={closeMenu}>How It Works</a>
        <a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        
        <div className="flex gap-4 ml-6 md:ml-0 md:mt-4 md:w-full md:flex-col md:gap-4">
          <Link to="/login" className="btn btn-outline hover:text-[#eee] hover:bg-[#243b5f]" onClick={closeMenu}>Login</Link>
          <Link to="/signup" className="btn btn-solid hover:text-[#eee] hover:bg-[#243b5f]" onClick={closeMenu}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
