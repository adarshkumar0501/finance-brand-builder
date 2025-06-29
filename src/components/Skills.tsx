
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileText, Briefcase, Calculator, TrendingUp, PieChart, Clock, MessageSquare, Target, Lightbulb } from 'lucide-react';

const Skills = () => {
  const hardSkills = [
    {
      name: 'Financial Modeling (Excel)',
      level: 90,
      icon: Calculator,
      color: 'bg-blue-500'
    },
    {
      name: 'Valuation (DCF, Ratio Analysis)',
      level: 85,
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      name: 'Financial Reporting',
      level: 88,
      icon: FileText,
      color: 'bg-purple-500'
    },
    {
      name: 'Data Analysis',
      level: 82,
      icon: PieChart,
      color: 'bg-orange-500'
    },
    {
      name: 'Research',
      level: 85,
      icon: Briefcase,
      color: 'bg-red-500'
    },
    {
      name: 'Canva Design',
      level: 78,
      icon: BarChart3,
      color: 'bg-indigo-500'
    }
  ];

  const softSkills = [
    {
      name: 'Time Management',
      level: 90,
      icon: Clock,
      color: 'bg-emerald-500'
    },
    {
      name: 'Problem-Solving',
      level: 88,
      icon: Lightbulb,
      color: 'bg-yellow-500'
    },
    {
      name: 'Critical Thinking',
      level: 85,
      icon: Target,
      color: 'bg-pink-500'
    },
    {
      name: 'Communication & Report Writing',
      level: 87,
      icon: MessageSquare,
      color: 'bg-cyan-500'
    }
  ];

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    return (
      <Card key={skill.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg ${skill.color.replace('bg-', 'bg-opacity-10 bg-')} mr-4`}>
              <Icon className={`w-6 h-6 ${skill.color.replace('bg-', 'text-')}`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Proficiency</span>
              <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set combining technical financial expertise with essential soft skills for professional success.
          </p>
        </div>

        <div className="space-y-12">
          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hard Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
