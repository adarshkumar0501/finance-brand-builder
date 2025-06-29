
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
              <h3 className="text-lg font-bold text-blue-800 mb-2">Career Objective</h3>
              <p className="text-blue-700 leading-relaxed italic">
                "To obtain a dynamic position in the finance sector where I can leverage my analytical skills, 
                financial knowledge, and strategic thinking to drive business growth and decision-making."
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Adarsh Kumar is a driven and detail-oriented BBA (Finance) student with a passion for 
              financial analysis, investment research, and sustainable business practices. Recognized among the 
              <span className="font-bold text-emerald-600"> top 5% of finance students across 250+ peers</span>, 
              he actively pursues hands-on experience through internships, research projects, and freelance opportunities.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently serving as a <span className="font-semibold text-indigo-600">Founder Assistant Intern at Jalvayu.co</span>, 
              he gains entrepreneurial exposure while contributing to strategic operations and business development initiatives.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Current Student</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Intern at Jalvayu.co</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <Award className="w-5 h-5" />
                <span className="font-medium">Top 5% Student</span>
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
                  <p className="text-sm font-medium text-emerald-600">Rank: Top 5% among 250+ students</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Role</h3>
                <div className="space-y-2">
                  <p className="font-medium text-indigo-600">Founder Assistant Intern</p>
                  <p className="text-gray-600">Jalvayu.co</p>
                  <p className="text-sm text-gray-500">Strategic planning, operations & growth initiatives</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">• Stock Valuation & Financial Markets</p>
                  <p className="text-gray-600">• Excel & Data Analysis</p>
                  <p className="text-gray-600">• DeFi & Corporate Statement Analysis</p>
                  <p className="text-sm text-gray-500">Via Coursera, LinkedIn Learning & Swayam</p>
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
