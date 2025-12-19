
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-2">About Me</h3>
              <p className="text-blue-700 leading-relaxed">
                I'm Adarsh Kumar — a BBA (Finance) student at VGU, Jaipur, passionate about financial analysis, 
                investment strategy, and business research. I've worked as a Founder's Assistant at Jalvayu.co, 
                where I contributed to financial content development, strategic planning, and digital growth initiatives.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Skilled in FM&V, Excel, data analysis, financial modeling, and market research, I'm now looking 
              forward to growth-focused opportunities where I can apply and expand my finance expertise in 
              dynamic, real-world environments.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently serving as a <span className="font-semibold text-indigo-600">Founder Assistant at Jalvayu.co</span>, 
              I gain entrepreneurial exposure while contributing to strategic operations and business development initiatives.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">BBA Finance Student</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Founder Assistant at Jalvayu.co</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <Award className="w-5 h-5" />
                <span className="font-medium">Finance Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-blue-600">BBA in Finance</p>
                  <p className="text-gray-600">Vivekananda Global University, Jaipur</p>
                  <p className="text-sm text-gray-500">2023 – 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience in Intern</h3>
                <div className="space-y-2">
                  <p className="font-medium text-indigo-600">Founder Assistant</p>
                  <p className="text-gray-600">Jalvayu.co</p>
                  <p className="text-sm text-gray-500">Financial content, strategic planning & digital growth</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Skills</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">• Financial Modeling & Valuation (FM&V)</p>
                  <p className="text-gray-600">• Excel & Data Analysis</p>
                  <p className="text-gray-600">• Market Research & Investment Strategy</p>
                  <p className="text-sm text-gray-500">Applied in real-world business environments</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
