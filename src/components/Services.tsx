import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BarChart3, MessageSquare, ExternalLink } from 'lucide-react';

const Services = () => {
  const capabilities = [
    {
      title: 'Financial Reporting',
      description: 'Preparing structured financial reports with clear insights for stakeholders and decision-makers.',
      icon: FileText,
      features: ['Financial Statement Preparation', 'Management Reporting', 'Variance Analysis', 'Executive Summaries'],
      accent: false
    },
    {
      title: 'Financial Analysis',
      description: 'Analyzing financial data to identify trends, assess performance, and support strategic decisions.',
      icon: TrendingUp,
      features: ['Ratio Analysis', 'Trend Identification', 'Performance Benchmarking', 'Financial Health Assessment'],
      accent: true
    },
    {
      title: 'Valuation & Research',
      description: 'Conducting fundamental analysis and valuation to support investment and business decisions.',
      icon: Calculator,
      features: ['DCF Valuation', 'Comparable Analysis', 'Industry Research', 'Investment Thesis Development'],
      accent: false
    },
    {
      title: 'Data Analysis & Visualization',
      description: 'Transforming financial data into actionable insights through analysis and visual presentation.',
      icon: BarChart3,
      features: ['Data Modeling', 'Dashboard Development', 'KPI Tracking', 'Visual Reporting'],
      accent: true
    }
  ];

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Analytical Capabilities</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies developed through academic training and hands-on experience in financial analysis and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={capability.title} 
                className={`border-border bg-card hover:shadow-md transition-all duration-200 ${
                  capability.accent ? 'hover:border-accent/50' : 'hover:border-primary/50'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className={`p-2 rounded-lg w-fit mb-3 ${
                    capability.accent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-5 h-5 ${capability.accent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-lg text-foreground">{capability.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-5">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          capability.accent ? 'bg-accent' : 'bg-primary'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={handleViewProjects}
                      variant="outline"
                      size="sm"
                      className={`flex-1 ${
                        capability.accent 
                          ? 'border-accent/30 text-accent hover:bg-accent/5 hover:border-accent' 
                          : 'border-primary/30 text-primary hover:bg-primary/5 hover:border-primary'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Projects
                    </Button>
                    <Button 
                      onClick={handleConnect}
                      size="sm"
                      className={`flex-1 ${
                        capability.accent 
                          ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                          : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Open to internships, entry-level roles, and analytical collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;