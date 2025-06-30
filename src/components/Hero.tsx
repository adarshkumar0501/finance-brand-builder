
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Image with actual photo */}
          <div className="mb-12 animate-fade-in">
            <div className="relative w-56 h-56 mx-auto">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img 
                    src="https://i.postimg.cc/SRmXpgJ3/Adarsh-Kumar.jpg"
                    alt="Adarsh Kumar - Professional Photo"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                ✨ Top 5% Student
              </div>
            </div>
          </div>

          {/* Enhanced main content */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                Adarsh Kumar
              </h1>
              <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span>Finance Enthusiast</span>
                <span className="text-gray-400">|</span>
                <span>Data-Driven Analyst</span>
                <span className="text-gray-400">|</span>
                <span>Future Leader</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              BBA Finance Student from <span className="font-semibold text-blue-600">Vivekananda Global University, Jaipur</span>, 
              ranked in the <span className="font-bold text-emerald-600">top 5% among 250+ peers</span>. 
              Currently interning at <span className="font-semibold text-indigo-600">Jalvayu.co</span> with multiple certifications in financial analysis and markets.
            </p>
          </div>

          {/* Contact info quick links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="mailto:adarshkumar05012002@gmail.com"
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-blue-600"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a 
              href="tel:+918789211917"
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 8789211917</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/adarshkumar-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-blue-500"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-12" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span>View My Work</span>
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group backdrop-blur-sm bg-white/80"
            >
              <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Let's Collaborate</span>
            </Button>
            
            <Button 
              variant="ghost"
              size="lg" 
              className="text-gray-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group hover:bg-blue-50"
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Download Resume</span>
            </Button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToAbout}
              className="group inline-flex flex-col items-center text-gray-500 hover:text-blue-600 transition-all duration-300"
            >
              <span className="text-sm font-medium mb-2 opacity-70 group-hover:opacity-100">Scroll to explore</span>
              <div className="relative">
                <ArrowDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 w-6 h-6 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
