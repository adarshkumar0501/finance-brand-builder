import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, GraduationCap, Briefcase, Calculator, TrendingUp, FileSearch, BarChart3 } from 'lucide-react';

const About = () => {
  const analyticalExposure = [
    { text: 'Financial modeling and DCF valuation', icon: Calculator },
    { text: 'Ratio and financial statement analysis', icon: TrendingUp },
    { text: 'Sector and equity research', icon: FileSearch },
    { text: 'Data-driven decision support', icon: BarChart3 }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">About</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              BBA Finance student at VGU, Jaipur with practical experience in financial analysis and strategic operations. 
              Currently supporting strategic initiatives as Founder's Assistant at Jalvayu.co.
            </p>
          </div>

          {/* Analytical Exposure */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Analytical Exposure</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {analyticalExposure.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="p-1.5 bg-primary/10 rounded-md flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

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

          {/* Career Direction */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 text-center border border-primary/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Career Direction</h3>
            </div>
            <p className="text-muted-foreground">
              Seeking internships or entry-level roles in Financial Analysis, Equity Research, or Corporate Finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;