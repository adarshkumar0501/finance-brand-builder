
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar } from 'lucide-react';

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
            <p className="text-lg text-gray-600 leading-relaxed">
              Adarsh Kumar is a driven and detail-oriented BBA (Finance) student with a passion for 
              financial analysis, investment research, and sustainable business practices. He actively 
              pursues hands-on experience through internships, research projects, and freelance 
              opportunities, with a strong focus on combining data-driven strategies with human-centered insights.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With a keen interest in the intersection of technology and finance, I leverage analytical 
              tools and methodologies to solve complex financial problems and provide actionable insights 
              for businesses and individuals.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Current Student</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Finance Specialist</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-blue-600">BBA in Finance</p>
                  <p className="text-gray-600">Vivekananda Global University</p>
                  <p className="text-sm text-gray-500">2023 – 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">• Financial Modeling & Analysis</p>
                  <p className="text-gray-600">• Data Analysis & Visualization</p>
                  <p className="text-gray-600">• Investment Research Methods</p>
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
