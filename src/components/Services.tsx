import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BarChart3, MessageSquare, FileSearch } from 'lucide-react';

const Services = () => {
  const capabilities = [
    {
      title: 'Financial Reporting',
      description: 'Preparing structured financial reports with clear insights for stakeholders and decision-makers.',
      icon: FileText,
      features: ['Financial Statement Preparation', 'Management Reporting', 'Variance Analysis', 'Executive Summaries']
    },
    {
      title: 'Financial Analysis',
      description: 'Analyzing financial data to identify trends, assess performance, and support strategic decisions.',
      icon: TrendingUp,
      features: ['Ratio Analysis', 'Trend Identification', 'Performance Benchmarking', 'Financial Health Assessment']
    },
    {
      title: 'Valuation & Research',
      description: 'Conducting fundamental analysis and valuation to support investment and business decisions.',
      icon: Calculator,
      features: ['DCF Valuation', 'Comparable Analysis', 'Industry Research', 'Investment Thesis Development']
    },
    {
      title: 'Data Analysis & Visualization',
      description: 'Transforming financial data into actionable insights through analysis and visual presentation.',
      icon: BarChart3,
      features: ['Data Modeling', 'Dashboard Development', 'KPI Tracking', 'Visual Reporting']
    }
  ];

  const handleDiscuss = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Analytical Capabilities</h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Core competencies developed through academic training and hands-on experience in financial analysis and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} className="border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <div className="p-2 bg-slate-100 rounded-lg w-fit mb-3">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{capability.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-5">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <div className="w-1 h-1 bg-slate-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 text-slate-600 border-slate-200 hover:bg-slate-50"
                    >
                      <FileSearch className="w-4 h-4 mr-2" />
                      View Projects
                    </Button>
                    <Button 
                      onClick={handleDiscuss}
                      variant="outline"
                      size="sm"
                      className="flex-1 text-slate-600 border-slate-200 hover:bg-slate-50"
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
          <p className="text-sm text-slate-500">
            Open to internships, entry-level roles, and analytical collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
