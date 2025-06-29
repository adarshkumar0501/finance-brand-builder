
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Building2, Coins } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Obesity Level Estimation with ML',
      description: 'Developed a machine learning model to predict obesity levels using physical and lifestyle data, achieving high accuracy in health risk assessment.',
      icon: BarChart3,
      tags: ['Machine Learning', 'Health Analytics', 'Python', 'Data Science'],
      color: 'bg-blue-500',
      category: 'Data Analysis'
    },
    {
      title: 'Sector-Specific vs Diversified Investments',
      description: 'Conducted a comprehensive 15-day real-time performance comparison between sector-focused and diversified investment portfolios.',
      icon: TrendingUp,
      tags: ['Portfolio Analysis', 'Investment Research', 'Market Analysis'],
      color: 'bg-green-500',
      category: 'Investment Research'
    },
    {
      title: 'NPA in Indian Banking',
      description: 'In-depth research analysis on Non-Performing Assets in the Indian banking sector, examining causes, trends, and recovery strategies.',
      icon: Building2,
      tags: ['Banking Research', 'Financial Analysis', 'Risk Assessment'],
      color: 'bg-red-500',
      category: 'Banking Research'
    },
    {
      title: 'MCX Commodity Trading Report',
      description: 'Comprehensive analysis of Multi Commodity Exchange structure, participants, market risks, and trading strategies.',
      icon: Coins,
      tags: ['Commodity Trading', 'Market Structure', 'Risk Analysis'],
      color: 'bg-orange-500',
      category: 'Market Research'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my analytical work spanning machine learning, investment research, and financial analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${project.color.replace('bg-', 'bg-opacity-10 bg-')} mb-4`}>
                      <Icon className={`w-8 h-8 ${project.color.replace('bg-', 'text-')}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                  >
                    View Details
                  </Button>
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
