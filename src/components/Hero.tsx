
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full bg-[#243b5f] py-40 px-8 flex flex-col items-center justify-center text-center text-white" id="home">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight md:text-4xl">
          Your Personal Indianapolis Guide
        </h1>
        <p className="text-xl mb-10 text-white md:text-lg">
          Get instant answers about everything Indianapolis - from events and dining to city services and neighborhood insights
        </p>
        <Link 
          to="/chatbot" 
          className="inline-flex items-center justify-center py-4 px-8 text-lg font-semibold bg-[#ed1c24] hover:bg-[#d01920] text-white rounded-lg transition-all duration-300 hover:translate-y-[-3px] shadow-[0_4px_15px_rgba(237,28,36,0.4)] hover:shadow-[0_6px_20px_rgba(237,28,36,0.5)]"
        >
          Start Chatting Now <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
