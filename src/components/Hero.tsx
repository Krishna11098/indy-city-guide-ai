
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex-1 bg-[#243b5f] py-40 px-8 flex flex-col items-center justify-center text-center text-white" id="home">
      <div className="max-w-[800px] mx-auto animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight shadow-[0_2px_4px_rgba(0,0,0,0.3)] md:text-4xl">
          Your Personal Indianapolis Guide
        </h1>
        <p className="text-xl mb-10 opacity-95 shadow-[0_1px_2px_rgba(0,0,0,0.2)] md:text-lg">
          Get instant answers about everything Indianapolis - from events and dining to city services and neighborhood insights
        </p>
        <Link to="/chatbot" className="btn-hero">
          Start Chatting Now <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
