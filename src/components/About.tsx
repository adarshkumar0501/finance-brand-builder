import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, GraduationCap, Briefcase, Calculator, TrendingUp, FileSearch, BarChart3, CheckCircle2, Lightbulb, LineChart, PieChart } from 'lucide-react';

const About = () => {
  const analyticalWork = [
    { text: 'FCFF-based DCF models with explicit WACC and terminal value assumptions', icon: Calculator },
    { text: 'Detailed financial statement analyses and DuPont decompositions', icon: BarChart3 },
    { text: 'Full equity research reports with segment analysis and valuation', icon: LineChart },
    { text: 'Sensitivity analysis linking growth, ROIC, and reinvestment', icon: TrendingUp }
  ];

  const careerInterests = [
    'Equity Research & Investment Analysis',
    'FP&A / Corporate Finance',
    'Credit & Risk Analysis',
    'Investment Banking (entry-level support)'
  ];

  const coreStrengths = [
    'Structured financial thinking',
    'Excel-based modeling discipline',
    'Breaking down complex financials',
    'Decision-oriented insight delivery'
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
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I am a finance graduate with hands-on experience in financial modeling, valuation, and equity research, developed through real-company, analyst-style projects rather than academic case studies.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              My work focuses on understanding why market prices differ from intrinsic value by explicitly modeling revenue growth, margins, reinvestment requirements, ROIC, capital structure, and WACC.
            </p>
          </div>

          {/* Analytical Work Experience */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Independent Analytical Work</h3>
              <p className="text-muted-foreground mb-6">
                Across my projects, I have analyzed companies trading at significant premiums to intrinsic value, demonstrating how optimistic assumptions and narrative-driven pricing impact valuation.
              </p>
              <ul className="space-y-4">
                {analyticalWork.map((item, index) => {
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
                  <h3 className="text-lg font-semibold text-foreground">Target Roles</h3>
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
              Open to entry-level Financial Analyst, Equity Research, FP&A, and Valuation roles. Available for immediate joining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
