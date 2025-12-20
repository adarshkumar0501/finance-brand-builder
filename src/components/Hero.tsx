import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, ExternalLink, TrendingUp, BarChart3, PieChart } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-finance-light to-background"></div>
      
      {/* Finance grid pattern */}
      <div className="absolute inset-0 finance-grid"></div>

      {/* Abstract chart illustration - right side */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Line chart */}
          <path 
            d="M20 250 Q80 220 140 180 T260 120 T380 80" 
            stroke="hsl(var(--finance-blue))" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M20 270 Q80 250 140 220 T260 160 T380 120" 
            stroke="hsl(var(--finance-teal))" 
            strokeWidth="2" 
            fill="none"
          />
          {/* Bar chart elements */}
          <rect x="60" y="200" width="20" height="70" fill="hsl(var(--finance-blue))" opacity="0.3" rx="2" />
          <rect x="100" y="170" width="20" height="100" fill="hsl(var(--finance-blue))" opacity="0.4" rx="2" />
          <rect x="140" y="140" width="20" height="130" fill="hsl(var(--finance-blue))" opacity="0.5" rx="2" />
          <rect x="180" y="160" width="20" height="110" fill="hsl(var(--finance-teal))" opacity="0.4" rx="2" />
          <rect x="220" y="120" width="20" height="150" fill="hsl(var(--finance-teal))" opacity="0.5" rx="2" />
          {/* Candlestick hints */}
          <line x1="280" y1="100" x2="280" y2="180" stroke="hsl(var(--finance-blue))" strokeWidth="1" />
          <rect x="275" y="120" width="10" height="40" fill="hsl(var(--finance-blue))" opacity="0.4" />
          <line x1="320" y1="80" x2="320" y2="160" stroke="hsl(var(--finance-teal))" strokeWidth="1" />
          <rect x="315" y="90" width="10" height="50" fill="hsl(var(--finance-teal))" opacity="0.4" />
        </svg>
      </div>

      {/* Small chart icons floating */}
      <div className="absolute left-[10%] top-[20%] opacity-[0.08] hidden md:block">
        <TrendingUp className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute left-[5%] bottom-[30%] opacity-[0.06] hidden md:block">
        <BarChart3 className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute right-[15%] bottom-[20%] opacity-[0.07] hidden lg:block">
        <PieChart className="w-10 h-10 text-primary" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-10">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-0.5">
                <div className="w-full h-full rounded-full bg-background p-1">
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
              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Adarsh Kumar
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-medium">
                Entry-Level Financial Analyst | Valuation, Equity Research & Financial Analysis
              </p>
            </div>
            
            {/* Two-line subheadline */}
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-lg text-muted-foreground">
                BBA (Finance) student with hands-on experience in financial modeling, valuation, and market research.
              </p>
              <p className="text-lg text-muted-foreground">
                Founder's Assistant experience supporting strategy and data-driven decision-making.
              </p>
            </div>
          </div>

          {/* CTA buttons - Clean and professional */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-finance-blue-light text-primary-foreground px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
            
            {/* Secondary CTAs */}
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:border-primary hover:bg-primary/5 px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              View Projects
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="border-accent/30 text-accent hover:border-accent hover:bg-accent/5 px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200"
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
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200"
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