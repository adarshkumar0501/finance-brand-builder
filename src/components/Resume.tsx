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
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Professional Summary
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Finance graduate with hands-on experience in financial modeling, valuation, and equity research through real-company analyst-style projects. Skilled in building FCFF-based DCF models, detailed financial statement analysis, DuPont decompositions, and full equity research reports. Focus on understanding market price vs. intrinsic value by modeling revenue growth, margins, reinvestment requirements, ROIC, capital structure, and WACC. Seeking entry-level Financial Analyst, Equity Research, FP&A, or Valuation roles with immediate availability.
            </p>
          </div>

          {/* Core Skills */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Core Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-700">
              <div>• Financial Modeling (3-statement, DCF, Sensitivity)</div>
              <div>• Equity Research & Valuation</div>
              <div>• Financial Statement & Ratio Analysis</div>
              <div>• DuPont Decomposition</div>
              <div>• Advanced Excel (Scenario & Sensitivity Modeling)</div>
              <div>• Peer Comparison & Relative Valuation</div>
              <div>• Profitability, Liquidity & Solvency Diagnostics</div>
              <div>• Decision-Oriented Financial Insights</div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Education
            </h2>
            <div className="text-xs text-gray-700">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">BBA in Finance</span>
                <span>2023 – 2026</span>
              </div>
              <p>Vivekananda Global University, Jaipur</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Experience
            </h2>
            <div className="text-xs text-gray-700">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Founder's Assistant</span>
                <span>Jalvayu.co</span>
              </div>
              <p>Strategy, financial content & data analysis support</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Featured Projects
            </h2>
            
            <div className="space-y-3 text-xs text-gray-700">
              {/* Zomato DCF */}
              <div>
                <p className="font-semibold">Zomato – DCF Valuation (Technology / Platform Business)</p>
                <p className="ml-2">• Built FCFF-based DCF model with ~30% Revenue CAGR, 15.4% WACC, 6.5% Terminal Growth</p>
                <p className="ml-2">• Intrinsic Value: ₹59/share vs Market Price ₹319 (~5× premium)</p>
                <p className="ml-2">• Key Insight: Weak capital efficiency and high reinvestment requirements explain valuation gap</p>
              </div>

              {/* Britannia DuPont */}
              <div>
                <p className="font-semibold">Britannia – DuPont Analysis (FMCG)</p>
                <p className="ml-2">• Decomposed ROE into profitability (12% Net Margin), efficiency (1.8× Asset Turnover), and leverage (1.5× Equity Multiplier)</p>
                <p className="ml-2">• Key Insight: ROE driven by operating performance, not balance-sheet risk</p>
              </div>

              {/* Britannia Valuation */}
              <div>
                <p className="font-semibold">Britannia – Financial Modeling & Valuation (FMCG)</p>
                <p className="ml-2">• Built comprehensive DCF model with 13.8% WACC, 5% Terminal Growth</p>
                <p className="ml-2">• Intrinsic Value: ₹1,780/share vs Market Price ₹5,700+ (&gt;3× premium)</p>
                <p className="ml-2">• Key Insight: Strong fundamentals trade at premium implying optimistic assumptions</p>
              </div>

              {/* ITC Financial Analysis */}
              <div>
                <p className="font-semibold">ITC – Financial Statement Analysis (Diversified FMCG)</p>
                <p className="ml-2">• Analyzed ₹75,000+ Cr revenue company: 34% EBITDA Margin, 23% Net Margin, 28% ROE, Zero Debt</p>
                <p className="ml-2">• Key Insight: Strong cash-flow generation and margin stability across business cycles</p>
              </div>

              {/* ITC Equity Research */}
              <div>
                <p className="font-semibold">ITC – Equity Research Report (FMCG)</p>
                <p className="ml-2">• Full research report: P/E ~28× vs sector 53×, Dividend Yield 4.2%, Debt-free</p>
                <p className="ml-2">• Investment View: Strong cash flows and capital discipline support attractive risk-reward</p>
              </div>
            </div>
          </div>

          {/* Analytical Capabilities */}
          <div className="mb-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Analytical Capabilities
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-700">
              <div>• Intrinsic Valuation Models (DCF, Sensitivity)</div>
              <div>• Equity Research Support & Peer Analysis</div>
              <div>• FP&A Performance Analysis & Forecasting</div>
              <div>• Decision-Oriented Financial Insights</div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-2">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2 uppercase">
              Tools & Resources
            </h2>
            <p className="text-xs text-gray-700">
              Microsoft Excel (Advanced) • Annual Reports & Public Filings • Financial Databases
            </p>
          </div>

          {/* Target Roles */}
          <div className="mt-4 pt-3 border-t border-gray-300">
            <p className="text-xs text-gray-600 text-center">
              <span className="font-semibold">Target Roles:</span> Equity Research Analyst | Financial Analyst | FP&A Analyst | Valuation / Transaction Support
            </p>
            <p className="text-xs text-gray-600 text-center mt-1">
              <span className="font-semibold">Availability:</span> Immediate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
