
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'DCF Valuation',
      description: 'Comprehensive Discounted Cash Flow analysis for accurate company valuations and investment decisions.',
      icon: Calculator,
      features: ['Financial Modeling', 'Cash Flow Projections', 'Risk Assessment', 'Valuation Reports'],
      color: 'bg-blue-500'
    },
    {
      title: 'Ratio & Profitability Analysis',
      description: 'Detailed financial ratio analysis to assess company performance, profitability, and financial health.',
      icon: TrendingUp,
      features: ['Liquidity Ratios', 'Profitability Metrics', 'Efficiency Analysis', 'Benchmark Comparisons'],
      color: 'bg-green-500'
    },
    {
      title: 'Sectoral Financial Research',
      description: 'In-depth research and analysis of specific industry sectors and market trends.',
      icon: BarChart3,
      features: ['Market Analysis', 'Sector Comparisons', 'Trend Identification', 'Investment Insights'],
      color: 'bg-purple-500'
    },
    {
      title: 'Report Development',
      description: 'Professional academic and business report creation with visual presentations using Canva and Excel.',
      icon: FileText,
      features: ['Data Visualization', 'Professional Design', 'Executive Summaries', 'Presentation Ready'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Freelance Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional financial analysis services combining academic rigor with practical business insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardHeader>
                  <div className={`p-3 rounded-lg ${service.color.replace('bg-', 'bg-opacity-10 bg-')} w-fit mb-4`}>
                    <Icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your financial analysis needs and how I can help you make data-driven decisions.
          </p>
          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
