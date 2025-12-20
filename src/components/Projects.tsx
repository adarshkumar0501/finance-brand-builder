import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, Building2, Coins } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Predictive Risk Analysis Using ML',
      category: 'Data Analysis',
      icon: BarChart3,
      objective: 'Developed a machine learning model to assess health risk factors and predict outcomes based on lifestyle and physical data.',
      methodology: 'Applied classification algorithms on structured datasets, performed feature engineering and model validation.',
      insights: 'Identified key risk predictors with 85%+ accuracy, enabling data-driven health risk stratification.',
      impact: 'Demonstrated analytical capability to apply quantitative methods beyond traditional finance domains.',
      tags: ['Predictive Modeling', 'Python', 'Risk Assessment'],
      accent: false
    },
    {
      title: 'IT Sector vs Diversified Portfolio Analysis',
      category: 'Investment Research',
      icon: TrendingUp,
      objective: 'Analyzed risk-return profiles of sector-concentrated versus diversified equity portfolios.',
      methodology: 'Calculated Sharpe ratios, beta coefficients, and volatility metrics using historical market data.',
      insights: 'Diversified portfolios showed 23% lower volatility with comparable returns over the analysis period.',
      impact: 'Provided actionable portfolio construction insights for risk-adjusted investment decisions.',
      tags: ['Portfolio Analysis', 'Risk Metrics', 'Investment Strategy'],
      accent: true
    },
    {
      title: 'NPA Analysis in Indian Banking (Post-COVID)',
      category: 'Banking Research',
      icon: Building2,
      objective: 'Examined Non-Performing Asset trends across Indian banking sector following COVID-19 disruption.',
      methodology: 'Conducted sectoral analysis using RBI data, compared PSU vs private bank recovery patterns.',
      insights: 'Identified 15% higher NPA recovery rates in private banks due to aggressive provisioning strategies.',
      impact: 'Informed understanding of credit risk management practices in stressed economic conditions.',
      tags: ['Credit Analysis', 'Banking Sector', 'Economic Research'],
      accent: false
    },
    {
      title: 'MCX Commodity Market Structure Analysis',
      category: 'Market Research',
      icon: Coins,
      objective: 'Analyzed trading mechanics, participant behavior, and risk factors in MCX commodity markets.',
      methodology: 'Studied market microstructure, margin requirements, and price discovery mechanisms.',
      insights: 'Documented correlation patterns between commodity prices and macroeconomic indicators.',
      impact: 'Enhanced understanding of derivatives markets and hedging strategies for commodity exposure.',
      tags: ['Commodity Markets', 'Market Structure', 'Trading Analysis'],
      accent: true
    }
  ];

  // Mini chart SVG component for project thumbnails
  const ProjectChart = ({ type, accent }: { type: string; accent: boolean }) => {
    const color = accent ? 'hsl(var(--finance-teal))' : 'hsl(var(--finance-blue))';
    const colorLight = accent ? 'hsl(var(--finance-teal) / 0.3)' : 'hsl(var(--finance-blue) / 0.3)';
    
    if (type === 'bar') {
      return (
        <svg viewBox="0 0 60 40" className="w-full h-full">
          <rect x="5" y="25" width="8" height="12" fill={colorLight} rx="1" />
          <rect x="17" y="15" width="8" height="22" fill={color} rx="1" />
          <rect x="29" y="20" width="8" height="17" fill={colorLight} rx="1" />
          <rect x="41" y="8" width="8" height="29" fill={color} rx="1" />
        </svg>
      );
    }
    if (type === 'line') {
      return (
        <svg viewBox="0 0 60 40" className="w-full h-full">
          <path d="M5 30 Q15 25 25 20 T45 12 T55 8" stroke={color} strokeWidth="2" fill="none" />
          <path d="M5 35 Q15 32 25 28 T45 22 T55 18" stroke={colorLight} strokeWidth="1.5" fill="none" />
        </svg>
      );
    }
    if (type === 'pie') {
      return (
        <svg viewBox="0 0 60 40" className="w-full h-full">
          <circle cx="30" cy="20" r="15" fill="none" stroke={colorLight} strokeWidth="6" />
          <circle cx="30" cy="20" r="15" fill="none" stroke={color} strokeWidth="6" strokeDasharray="60 40" transform="rotate(-90 30 20)" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect x="5" y="8" width="50" height="5" fill={colorLight} rx="1" />
        <rect x="5" y="16" width="35" height="5" fill={color} rx="1" />
        <rect x="5" y="24" width="45" height="5" fill={colorLight} rx="1" />
        <rect x="5" y="32" width="25" height="5" fill={color} rx="1" />
      </svg>
    );
  };

  const chartTypes = ['bar', 'line', 'pie', 'table'];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Analytical Projects</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected analytical work demonstrating research methodology and financial analysis capabilities.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title} 
                className={`border-border bg-card hover:shadow-md transition-all duration-200 ${
                  project.accent ? 'hover:border-accent/50' : 'hover:border-primary/50'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`p-2 rounded-lg ${project.accent ? 'bg-accent/10' : 'bg-primary/10'}`}>
                        <Icon className={`w-5 h-5 ${project.accent ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`mt-1 text-xs font-normal ${
                            project.accent 
                              ? 'bg-accent/10 text-accent border-accent/20' 
                              : 'bg-primary/10 text-primary border-primary/20'
                          }`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    {/* Project thumbnail chart */}
                    <div className={`w-16 h-10 rounded-md flex items-center justify-center ${
                      project.accent ? 'bg-accent/5' : 'bg-primary/5'
                    }`}>
                      <ProjectChart type={chartTypes[index]} accent={project.accent} />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                        project.accent ? 'text-accent' : 'text-primary'
                      }`}>Objective</p>
                      <p className="text-sm text-muted-foreground">{project.objective}</p>
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                        project.accent ? 'text-accent' : 'text-primary'
                      }`}>Methodology</p>
                      <p className="text-sm text-muted-foreground">{project.methodology}</p>
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                        project.accent ? 'text-accent' : 'text-primary'
                      }`}>Key Insights</p>
                      <p className="text-sm text-muted-foreground">{project.insights}</p>
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                        project.accent ? 'text-accent' : 'text-primary'
                      }`}>Decision Impact</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`text-xs font-normal ${
                          project.accent 
                            ? 'border-accent/30 text-accent' 
                            : 'border-primary/30 text-primary'
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;