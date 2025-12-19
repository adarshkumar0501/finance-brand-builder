import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Clean finance aesthetic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-10">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-slate-200 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img 
                    src="https://i.postimg.cc/SRmXpgJ3/Adarsh-Kumar.jpg"
                    alt="Adarsh Kumar - Financial Analyst"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Adarsh Kumar
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                Entry-Level Financial Analyst | Valuation, Equity Research & Financial Analysis
              </p>
            </div>
            
            {/* Two-line subheadline */}
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-lg text-slate-600">
                BBA (Finance) student with hands-on experience in financial modeling, valuation, and market research.
              </p>
              <p className="text-lg text-slate-600">
                Founder's Assistant experience supporting strategy and data-driven decision-making.
              </p>
            </div>
          </div>

          {/* CTA buttons - Clean and professional */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
            
            {/* Secondary CTAs */}
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg" 
              className="border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              View Projects
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            >
              <a 
                href="https://www.linkedin.com/in/adarshkumar-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16">
            <button 
              onClick={scrollToProjects}
              className="inline-flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors duration-200"
            >
              <span className="text-sm font-medium mb-2">Explore</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
