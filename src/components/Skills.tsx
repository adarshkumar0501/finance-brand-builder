import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, FileSearch, BarChart3, FileSpreadsheet, Table2, DollarSign, PieChart, Target, LineChart, FileText } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    {
      title: 'Leveraged Buyout (LBO) Modeling',
      icon: DollarSign,
      accent: false
    },
    {
      title: 'DCF Valuation & Sensitivity Analysis',
      icon: Calculator,
      accent: true
    },
    {
      title: 'Financial Statement Forecasting',
      icon: LineChart,
      accent: false
    },
    {
      title: 'Capital Structure & Debt Modeling',
      icon: BarChart3,
      accent: true
    },
    {
      title: 'IRR, MOIC & Exit Analysis',
      icon: Target,
      accent: false
    },
    {
      title: 'Advanced Excel (3-statement & transaction models)',
      icon: FileSpreadsheet,
      accent: true
    },
    {
      title: 'Investment Memo & Deal Analysis',
      icon: FileText,
      accent: false
    }
  ];

  const supportingSkills = [
    'Equity Research & Valuation',
    'Financial Statement & Ratio Analysis',
    'Peer comparison and relative valuation',
    'Profitability, liquidity, and solvency diagnostics'
  ];

  const tools = [
    { name: 'Microsoft Excel (Advanced)', icon: FileSpreadsheet },
    { name: 'Annual Reports and Public Filings', icon: Table2 }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        {/* Core Analyst Skills */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Core Skills</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.title} 
                  className={`border-border bg-card hover:shadow-md transition-all duration-200 ${
                    skill.accent ? 'hover:border-accent/50' : 'hover:border-primary/50'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-2.5 rounded-lg mb-3 ${
                        skill.accent ? 'bg-accent/10' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${skill.accent ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <h4 className="font-medium text-foreground text-xs leading-relaxed">{skill.title}</h4>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Supporting Skills */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Supporting Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingSkills.map((skill, index) => (
              <span 
                key={skill} 
                className={`px-4 py-2.5 bg-card border rounded-lg text-sm ${
                  index % 2 === 0 
                    ? 'border-primary/20 text-foreground' 
                    : 'border-accent/20 text-foreground'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={tool.name}
                  className={`flex items-center space-x-3 px-5 py-3 bg-card border rounded-lg ${
                    index % 2 === 0 ? 'border-primary/20' : 'border-accent/20'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
