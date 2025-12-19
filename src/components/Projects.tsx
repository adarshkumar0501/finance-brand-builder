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
      tags: ['Predictive Modeling', 'Python', 'Risk Assessment']
    },
    {
      title: 'IT Sector vs Diversified Portfolio Analysis',
      category: 'Investment Research',
      icon: TrendingUp,
      objective: 'Analyzed risk-return profiles of sector-concentrated versus diversified equity portfolios.',
      methodology: 'Calculated Sharpe ratios, beta coefficients, and volatility metrics using historical market data.',
      insights: 'Diversified portfolios showed 23% lower volatility with comparable returns over the analysis period.',
      impact: 'Provided actionable portfolio construction insights for risk-adjusted investment decisions.',
      tags: ['Portfolio Analysis', 'Risk Metrics', 'Investment Strategy']
    },
    {
      title: 'NPA Analysis in Indian Banking (Post-COVID)',
      category: 'Banking Research',
      icon: Building2,
      objective: 'Examined Non-Performing Asset trends across Indian banking sector following COVID-19 disruption.',
      methodology: 'Conducted sectoral analysis using RBI data, compared PSU vs private bank recovery patterns.',
      insights: 'Identified 15% higher NPA recovery rates in private banks due to aggressive provisioning strategies.',
      impact: 'Informed understanding of credit risk management practices in stressed economic conditions.',
      tags: ['Credit Analysis', 'Banking Sector', 'Economic Research']
    },
    {
      title: 'MCX Commodity Market Structure Analysis',
      category: 'Market Research',
      icon: Coins,
      objective: 'Analyzed trading mechanics, participant behavior, and risk factors in MCX commodity markets.',
      methodology: 'Studied market microstructure, margin requirements, and price discovery mechanisms.',
      insights: 'Documented correlation patterns between commodity prices and macroeconomic indicators.',
      impact: 'Enhanced understanding of derivatives markets and hedging strategies for commodity exposure.',
      tags: ['Commodity Markets', 'Market Structure', 'Trading Analysis']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Analytical Projects</h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Selected analytical work demonstrating research methodology and financial analysis capabilities.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs font-normal">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Objective</p>
                      <p className="text-sm text-slate-600">{project.objective}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Methodology</p>
                      <p className="text-sm text-slate-600">{project.methodology}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Key Insights</p>
                      <p className="text-sm text-slate-600">{project.insights}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Decision Impact</p>
                      <p className="text-sm text-slate-600">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal text-slate-500">
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
