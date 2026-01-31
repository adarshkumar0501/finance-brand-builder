import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, GraduationCap, Briefcase, Calculator, TrendingUp, FileSearch, BarChart3, CheckCircle2, Lightbulb } from 'lucide-react';

const About = () => {
  const modelExperience = [
    { text: 'DCF and comparable valuation models', icon: Calculator },
    { text: 'LBO models with realistic debt structures', icon: TrendingUp },
    { text: 'Financial performance analysis using ratios, margins, and cash flow diagnostics', icon: BarChart3 }
  ];

  const careerInterests = [
    'Equity Research & Investment Analysis',
    'FP&A / Corporate Finance',
    'Credit & Risk Analysis',
    'Investment Banking (entry-level support roles)'
  ];

  const coreStrengths = [
    'Structured financial thinking',
    'Excel-based modeling discipline',
    'Breaking down complex financial statements',
    'Communicating insights clearly and professionally'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">About Me</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I am a BBA (Finance) student with a strong analytical mindset and a clear career focus on financial analysis, valuation, and investment decision-making. My academic foundation is complemented by hands-on, model-driven projects across corporate finance, equity research, and leveraged buyouts.
            </p>
          </div>

          {/* Modeling Experience */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Independent Model-Driven Work</h3>
              <p className="text-muted-foreground mb-6">
                Rather than limiting learning to theory, I focus on applying finance concepts to real businesses, stress-testing assumptions, and translating numbers into decision-relevant insights—the way analysts do in real roles.
              </p>
              <ul className="space-y-4">
                {modelExperience.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="p-1.5 bg-primary/10 rounded-md flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          {/* Career Interests & Core Strengths */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card hover:border-primary/30 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Career Interests</h3>
                </div>
                <ul className="space-y-2">
                  {careerInterests.map((interest, index) => (
                    <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-accent/30 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Core Strengths</h3>
                </div>
                <ul className="space-y-2">
                  {coreStrengths.map((strength, index) => (
                    <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border bg-card hover:border-primary/30 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">BBA in Finance</p>
                  <p className="text-muted-foreground text-sm">Vivekananda Global University, Jaipur</p>
                  <p className="text-muted-foreground/70 text-sm">2023 – 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-accent/30 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Experience</h3>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Founder's Assistant</p>
                  <p className="text-muted-foreground text-sm">Jalvayu.co</p>
                  <p className="text-muted-foreground/70 text-sm">Strategy, financial content & data analysis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Direction CTA */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 text-center border border-primary/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <FileSearch className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Open to Opportunities</h3>
            </div>
            <p className="text-muted-foreground">
              I am actively seeking internships or entry-level analyst roles where I can contribute analytical value, learn from experienced professionals, and build long-term expertise in finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
