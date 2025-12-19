import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, FileSearch, FileText, BarChart3 } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      title: 'Financial Modeling & Valuation',
      icon: Calculator,
      points: ['3-statement models', 'DCF valuation', 'Sensitivity analysis']
    },
    {
      title: 'Financial Statement & Ratio Analysis',
      icon: TrendingUp,
      points: ['Liquidity & solvency ratios', 'Profitability metrics', 'Trend analysis']
    },
    {
      title: 'Equity & Market Research',
      icon: FileSearch,
      points: ['Sector analysis', 'Competitive positioning', 'Investment thesis development']
    },
    {
      title: 'Financial Reporting & Analysis',
      icon: FileText,
      points: ['Performance reports', 'Variance analysis', 'Executive summaries']
    },
    {
      title: 'Data Analysis & Visualization',
      icon: BarChart3,
      points: ['Excel (Advanced)', 'Data interpretation', 'Dashboard development']
    }
  ];

  const softSkills = ['Analytical Thinking', 'Problem-Solving', 'Communication', 'Time Management'];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-slate-100 rounded-lg mr-3">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm">{skill.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{point}</span>
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
          <p className="text-sm text-slate-500 mb-3">Supporting Skills</p>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600"
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
