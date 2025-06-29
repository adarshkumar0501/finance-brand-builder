
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">AK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Adarsh Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Finance Enthusiast | Data-Driven Thinker | Future Analyst
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              BBA Finance Student passionate about financial analysis, investment research, 
              and sustainable business practices with hands-on experience in data-driven strategies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
