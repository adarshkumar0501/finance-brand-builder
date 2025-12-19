import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target } from 'lucide-react';

const About = () => {
  const analyticalExposure = [
    'Financial modeling and DCF valuation',
    'Ratio and financial statement analysis',
    'Sector and equity research',
    'Data-driven decision support'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">About</h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <div className="text-center">
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              BBA Finance student at VGU, Jaipur with practical experience in financial analysis and strategic operations. 
              Currently supporting strategic initiatives as Founder's Assistant at Jalvayu.co.
            </p>
          </div>

          {/* Analytical Exposure */}
          <Card className="border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Analytical Exposure</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {analyticalExposure.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Education</h3>
                <div className="space-y-1">
                  <p className="font-medium text-slate-700">BBA in Finance</p>
                  <p className="text-slate-600 text-sm">Vivekananda Global University, Jaipur</p>
                  <p className="text-slate-500 text-sm">2023 – 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Experience</h3>
                <div className="space-y-1">
                  <p className="font-medium text-slate-700">Founder's Assistant</p>
                  <p className="text-slate-600 text-sm">Jalvayu.co</p>
                  <p className="text-slate-500 text-sm">Strategy, financial content & data analysis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Direction */}
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900">Career Direction</h3>
            </div>
            <p className="text-slate-600">
              Seeking internships or entry-level roles in Financial Analysis, Equity Research, or Corporate Finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
