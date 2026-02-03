import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, MapPin, Globe } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    
    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('Adarsh_Kumar_Resume.pdf');
  };

  return (
    <section id="resume" className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-primary mb-4">Resume</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <Button onClick={downloadPDF} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        {/* Resume Content - ATS Friendly Layout */}
        <div 
          ref={resumeRef}
          className="bg-white text-black p-8 shadow-lg rounded-lg border"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {/* Header */}
          <div className="text-center border-b-2 border-gray-800 pb-4 mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">ADARSH KUMAR</h1>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Entry-Level Financial Analyst | Valuation, Equity Research & Financial Modeling
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                adarshkumar05012002@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +91 8789211917
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                linkedin.com/in/adarshkumar-
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Jaipur, Rajasthan
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                finance-brand-builder.lovable.app
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-3">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
              Professional Summary
            </h2>
            <p className="text-[10px] text-gray-700 leading-relaxed">
              Finance graduate with hands-on experience in financial modeling, valuation, and equity research through real-company analyst-style projects. Skilled in FCFF-based DCF models, financial statement analysis, and DuPont decompositions. Focus on understanding market price vs. intrinsic value by modeling revenue growth, margins, ROIC, and WACC.
            </p>
          </div>

          {/* Two Column Layout for Skills and Education */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            {/* Core Skills */}
            <div>
              <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
                Core Skills
              </h2>
              <div className="text-[10px] text-gray-700 space-y-0.5">
                <div>• Financial Modeling (3-statement, DCF)</div>
                <div>• Equity Research & Valuation</div>
                <div>• Financial Statement Analysis</div>
                <div>• Advanced Excel & Sensitivity Modeling</div>
                <div>• Peer Comparison & Diagnostics</div>
              </div>
            </div>

            {/* Education & Experience */}
            <div>
              <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
                Education & Experience
              </h2>
              <div className="text-[10px] text-gray-700 space-y-1">
                <div>
                  <span className="font-semibold">BBA in Finance</span> | 2023–2026
                  <p className="text-gray-600">Vivekananda Global University, Jaipur</p>
                </div>
                <div>
                  <span className="font-semibold">Founder's Assistant</span> | Jalvayu.co
                  <p className="text-gray-600">Strategy & financial data analysis support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-3">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-x-4 text-[10px] text-gray-700">
              <div>• Banking & Financial Markets – SWAYAM</div>
              <div>• McKinsey Forward Program – McKinsey</div>
              <div>• Financial Analysis – New York City</div>
              <div>• Corporate Financial Statement Analysis – LinkedIn</div>
              <div>• Stock Valuation – Coursera</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-3">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
              Featured Projects
            </h2>
            
            <div className="space-y-1.5 text-[10px] text-gray-700">
              <div>
                <span className="font-semibold">Zomato – DCF Valuation:</span> Built FCFF-based DCF model (30% CAGR, 15.4% WACC). Intrinsic Value ₹59 vs Market ₹319 (~5× premium). Identified weak capital efficiency.
              </div>
              <div>
                <span className="font-semibold">Britannia – DuPont Analysis:</span> Decomposed ROE (12% Margin, 1.8× Turnover, 1.5× Leverage). ROE driven by operations, not leverage.
              </div>
              <div>
                <span className="font-semibold">Britannia – DCF Valuation:</span> Comprehensive model (13.8% WACC, 5% Terminal). Intrinsic ₹1,780 vs Market ₹5,700+ (&gt;3× premium).
              </div>
              <div>
                <span className="font-semibold">ITC – Financial Analysis:</span> ₹75,000+ Cr revenue, 34% EBITDA, 23% Net Margin, 28% ROE, Zero Debt. Strong cash generation.
              </div>
              <div>
                <span className="font-semibold">ITC – Equity Research:</span> P/E ~28× vs sector 53×, 4.2% yield, debt-free. Attractive risk-reward profile.
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-2">
            <h2 className="text-xs font-bold text-gray-900 border-b border-gray-400 pb-1 mb-1 uppercase">
              Tools
            </h2>
            <p className="text-[10px] text-gray-700">
              Microsoft Excel (Advanced) • Annual Reports & Public Filings • Financial Databases
            </p>
          </div>

          {/* Target Roles */}
          <div className="pt-2 border-t border-gray-300">
            <p className="text-[10px] text-gray-600 text-center">
              <span className="font-semibold">Target Roles:</span> Equity Research Analyst | Financial Analyst | FP&A Analyst | Valuation Support | <span className="font-semibold">Availability:</span> Immediate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
