import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BarChart3, MessageSquare, ExternalLink, Target, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const capabilities = [
    {
      title: 'Intrinsic Valuation Models',
      description: 'Build DCF models with explicit assumptions for growth, margins, WACC, and terminal value.',
      icon: Calculator,
      features: ['FCFF-based DCF models', 'Sensitivity analysis', 'Scenario modeling', 'Valuation summaries'],
      accent: false
    },
    {
      title: 'Equity Research Support',
      description: 'Support research teams with peer comparison, financial diagnostics, and investment thesis development.',
      icon: TrendingUp,
      features: ['Peer comparison analysis', 'Financial ratio analysis', 'Sector benchmarking', 'Investment thesis support'],
      accent: true
    },
    {
      title: 'FP&A Analysis',
      description: 'Assist FP&A teams with performance analysis, forecasting, and variance diagnostics.',
      icon: BarChart3,
      features: ['Performance analysis', 'Revenue/cost forecasting', 'Variance analysis', 'KPI tracking'],
      accent: false
    },
    {
      title: 'Decision-Oriented Insights',
      description: 'Translate financial data into clear, actionable insights for stakeholders.',
      icon: Target,
      features: ['Management reporting', 'Executive summaries', 'Visual dashboards', 'Actionable recommendations'],
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
            How I can support finance and research teams with analytical work and decision-oriented insights.
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
                        <CheckCircle2 className={`w-4 h-4 mr-2 flex-shrink-0 ${
                          capability.accent ? 'text-accent' : 'text-primary'
                        }`} />
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold text-foreground mb-3">Open to Opportunities</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Open to entry-level Financial Analyst, Equity Research, FP&A, and Valuation roles. Available for immediate joining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleConnect}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              onClick={handleViewProjects}
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent/5 hover:border-accent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
