import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, FileSearch, FileText, BarChart3 } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      title: 'Financial Modeling & Valuation',
      icon: Calculator,
      points: ['3-statement models', 'DCF valuation', 'Sensitivity analysis'],
      accent: false
    },
    {
      title: 'Financial Statement & Ratio Analysis',
      icon: TrendingUp,
      points: ['Liquidity & solvency ratios', 'Profitability metrics', 'Trend analysis'],
      accent: true
    },
    {
      title: 'Equity & Market Research',
      icon: FileSearch,
      points: ['Sector analysis', 'Competitive positioning', 'Investment thesis development'],
      accent: false
    },
    {
      title: 'Financial Reporting & Analysis',
      icon: FileText,
      points: ['Performance reports', 'Variance analysis', 'Executive summaries'],
      accent: true
    },
    {
      title: 'Data Analysis & Visualization',
      icon: BarChart3,
      points: ['Excel (Advanced)', 'Data interpretation', 'Dashboard development'],
      accent: false
    }
  ];

  const softSkills = ['Analytical Thinking', 'Problem-Solving', 'Communication', 'Time Management'];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {technicalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.title} 
                className={`border-border bg-card hover:shadow-md transition-all duration-200 ${
                  skill.accent ? 'hover:border-accent/50' : 'hover:border-primary/50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 ${
                      skill.accent ? 'bg-accent/10' : 'bg-primary/10'
                    }`}>
                      <Icon className={`w-5 h-5 ${skill.accent ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{skill.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          skill.accent ? 'bg-accent' : 'bg-primary'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills - Secondary */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">Supporting Skills</p>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span 
                key={skill} 
                className={`px-4 py-2 bg-card border rounded-full text-sm ${
                  index % 2 === 0 
                    ? 'border-primary/20 text-primary' 
                    : 'border-accent/20 text-accent'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;