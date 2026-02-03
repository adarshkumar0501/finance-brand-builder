import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Banking and Financial Markets: A Risk Management Perspective',
      issuer: 'SWAYAM',
      accent: true
    },
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      accent: false
    },
    {
      title: 'Financial Analysis',
      issuer: 'New York City',
      accent: true
    },
    {
      title: 'Corporate Financial Statement Analysis',
      issuer: 'LinkedIn Learning',
      accent: false
    },
    {
      title: 'Stock Valuation',
      issuer: 'Coursera',
      accent: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Certifications & Professional Development</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`border-border bg-card hover:shadow-md transition-all duration-200 ${
                cert.accent ? 'hover:border-accent/50' : 'hover:border-primary/50'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-lg mb-4 ${
                    cert.accent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Award className={`w-6 h-6 ${cert.accent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <h4 className="font-medium text-foreground text-sm leading-relaxed mb-2">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
