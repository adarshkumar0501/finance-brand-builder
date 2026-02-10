import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, MapPin, Globe } from 'lucide-react';
import jsPDF from 'jspdf';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - margin * 2;
    let y = 15;

    const addText = (text: string, x: number, yPos: number, size: number, style: string = 'normal', color: number[] = [30, 30, 30]) => {
      pdf.setFontSize(size);
      pdf.setFont('helvetica', style);
      pdf.setTextColor(color[0], color[1], color[2]);
      pdf.text(text, x, yPos);
    };

    const addLink = (text: string, url: string, x: number, yPos: number, size: number) => {
      pdf.setFontSize(size);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 82, 204);
      pdf.text(text, x, yPos);
      const textWidth = pdf.getTextWidth(text);
      pdf.link(x, yPos - 3, textWidth, 4, { url });
    };

    const addSectionHeader = (title: string, yPos: number) => {
      addText(title, margin, yPos, 9, 'bold', [20, 20, 20]);
      pdf.setDrawColor(150, 150, 150);
      pdf.line(margin, yPos + 1, pageWidth - margin, yPos + 1);
      return yPos + 5;
    };

    // Header
    addText('ADARSH KUMAR', pageWidth / 2, y, 18, 'bold', [20, 20, 20]);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    const nameWidth = pdf.getTextWidth('ADARSH KUMAR');
    pdf.text('ADARSH KUMAR', (pageWidth - nameWidth) / 2, y);
    y += 5;

    const subtitle = 'Financial Analyst | Valuation, Equity Research & Financial Modeling';
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(80, 80, 80);
    const subtitleWidth = pdf.getTextWidth(subtitle);
    pdf.text(subtitle, (pageWidth - subtitleWidth) / 2, y);
    y += 5;

    // Contact info row
    const contactY = y;
    let cx = margin;
    
    addLink('adarshkumar05012002@gmail.com', 'mailto:adarshkumar05012002@gmail.com', cx, contactY, 7);
    cx += pdf.getTextWidth('adarshkumar05012002@gmail.com') + 4;
    
    addText('| +91 8789211917 |', cx, contactY, 7, 'normal', [80, 80, 80]);
    cx += pdf.getTextWidth('| +91 8789211917 | ') + 1;
    
    addLink('LinkedIn', 'https://www.linkedin.com/in/adarshkumar-', cx, contactY, 7);
    cx += pdf.getTextWidth('LinkedIn') + 4;

    addText('| Jaipur, Rajasthan |', cx, contactY, 7, 'normal', [80, 80, 80]);
    cx += pdf.getTextWidth('| Jaipur, Rajasthan | ') + 1;

    addLink('Portfolio', 'https://finance-brand-builder.lovable.app', cx, contactY, 7);
    
    y += 4;
    pdf.setDrawColor(40, 40, 40);
    pdf.setLineWidth(0.5);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 5;

    // Professional Summary
    y = addSectionHeader('PROFESSIONAL SUMMARY', y);
    pdf.setFontSize(7.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const summaryLines = pdf.splitTextToSize(
      'Finance graduate with hands-on experience in financial modeling, valuation, and equity research through real-company analyst-style projects. Skilled in FCFF-based DCF models, financial statement analysis, and DuPont decompositions. Focus on understanding market price vs. intrinsic value by modeling revenue growth, margins, ROIC, and WACC.',
      contentWidth
    );
    pdf.text(summaryLines, margin, y);
    y += summaryLines.length * 3.2 + 3;

    // Two columns: Skills & Education
    const colWidth = (contentWidth - 6) / 2;
    const leftX = margin;
    const rightX = margin + colWidth + 6;
    let leftY = addSectionHeader('CORE SKILLS', y);
    let rightY = addSectionHeader('EDUCATION & EXPERIENCE', y);

    // Manually draw right header
    addText('EDUCATION & EXPERIENCE', rightX, y - 5, 9, 'bold', [20, 20, 20]);
    pdf.line(rightX, y - 4, rightX + colWidth, y - 4);

    const skills = [
      '• Financial Modeling (3-statement, DCF)',
      '• Equity Research & Valuation',
      '• Financial Statement Analysis',
      '• Advanced Excel & Sensitivity Modeling',
      '• Peer Comparison & Diagnostics'
    ];
    skills.forEach(skill => {
      addText(skill, leftX, leftY, 7.5, 'normal', [60, 60, 60]);
      leftY += 3.5;
    });

    addText('BBA in Finance', rightX, rightY, 7.5, 'bold', [40, 40, 40]);
    addText(' | 2023–2026', rightX + pdf.getTextWidth('BBA in Finance'), rightY, 7.5, 'normal', [80, 80, 80]);
    rightY += 3.2;
    addText('Vivekananda Global University, Jaipur', rightX, rightY, 7, 'normal', [100, 100, 100]);
    rightY += 4;
    addText("Founder's Assistant", rightX, rightY, 7.5, 'bold', [40, 40, 40]);
    addText(' | Jalvayu.co', rightX + pdf.getTextWidth("Founder's Assistant"), rightY, 7.5, 'normal', [80, 80, 80]);
    rightY += 3.2;
    addText('Strategy & financial data analysis support', rightX, rightY, 7, 'normal', [100, 100, 100]);

    y = Math.max(leftY, rightY) + 4;

    // Certifications
    y = addSectionHeader('CERTIFICATIONS', y);
    const certs = [
      ['• Banking & Financial Markets – SWAYAM', '• McKinsey Forward Program – McKinsey'],
      ['• Financial Analysis – New York City', '• Corporate Financial Statement Analysis – LinkedIn'],
      ['• Stock Valuation – Coursera', '']
    ];
    certs.forEach(row => {
      addText(row[0], leftX, y, 7.5, 'normal', [60, 60, 60]);
      if (row[1]) addText(row[1], rightX, y, 7.5, 'normal', [60, 60, 60]);
      y += 3.5;
    });
    y += 2;

    // Featured Projects
    y = addSectionHeader('FEATURED PROJECTS', y);
    const projects = [
      { title: 'Hilton Hotels – LBO Case Study:', desc: "Modeled Blackstone's acquisition ($25bn EV, 12.5× EBITDA). MOIC: 2.9×, IRR: 23.6%. Value driven by deleveraging and EBITDA growth despite exit multiple compression." },
      { title: 'Aegis Logistics – DCF Valuation:', desc: 'Conservative FCFF-based model (11.12% WACC, 6.0–6.5% terminal growth). Intrinsic Value ₹587 vs Market ₹691 (~18% premium). ~80% of EV from terminal value.' },
      { title: 'Britannia – Financial Modeling & Valuation:', desc: 'Comprehensive model (13.8% WACC, 5% Terminal). Intrinsic ₹1,780 vs Market ₹5,700+ (>3× premium).' },
      { title: 'ITC – Equity Research Report:', desc: 'P/E ~28× vs sector 53×, 4.2% yield, debt-free. Attractive risk-reward profile with improving FMCG mix.' },
      { title: 'Zomato – DCF Valuation:', desc: 'FCFF-based DCF (30% CAGR, 15.4% WACC). Intrinsic ₹59 vs Market ₹319 (~5× premium). Weak capital efficiency.' },
      { title: 'ITC – Financial Analysis:', desc: '₹75,000+ Cr revenue, 34% EBITDA, 23% Net Margin, 28% ROE, Zero Debt.' }
    ];
    projects.forEach(proj => {
      pdf.setFontSize(7.5);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(40, 40, 40);
      const titleW = pdf.getTextWidth(proj.title + ' ');
      pdf.text(proj.title, margin, y);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      const descLines = pdf.splitTextToSize(proj.desc, contentWidth - titleW > 40 ? contentWidth : contentWidth);
      if (contentWidth - titleW > 40) {
        // First part of desc on same line as title
        const firstLine = proj.desc;
        const wrapped = pdf.splitTextToSize(firstLine, contentWidth - titleW);
        pdf.text(wrapped[0], margin + titleW, y);
        if (wrapped.length > 1) {
          const rest = pdf.splitTextToSize(wrapped.slice(1).join(' '), contentWidth);
          pdf.text(rest, margin, y + 3.2);
          y += 3.2 + rest.length * 3.2;
        } else {
          y += 3.5;
        }
      } else {
        y += 3.2;
        pdf.text(descLines, margin, y);
        y += descLines.length * 3.2;
      }
      y += 1;
    });
    y += 1;

    // Tools
    y = addSectionHeader('TOOLS', y);
    addText('Microsoft Excel (Advanced) • Annual Reports & Public Filings • Financial Databases', margin, y, 7.5, 'normal', [60, 60, 60]);
    y += 5;

    // Target Roles
    pdf.setDrawColor(180, 180, 180);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 4;
    const targetText = 'Target Roles: Equity Research Analyst | Financial Analyst | FP&A Analyst | Valuation Support | Availability: Immediate';
    pdf.setFontSize(7.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    const targetWidth = pdf.getTextWidth(targetText);
    pdf.text(targetText, (pageWidth - targetWidth) / 2, y);

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
              Financial Analyst | Valuation, Equity Research & Financial Modeling
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
              <a 
                href="mailto:adarshkumar05012002@gmail.com"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Mail className="w-3 h-3" />
                adarshkumar05012002@gmail.com
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +91 8789211917
              </span>
              <a 
                href="https://www.linkedin.com/in/adarshkumar-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Linkedin className="w-3 h-3" />
                linkedin.com/in/adarshkumar-
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Jaipur, Rajasthan
              </span>
              <a 
                href="https://finance-brand-builder.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Globe className="w-3 h-3" />
                finance-brand-builder.lovable.app
              </a>
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
                <span className="font-semibold">Hilton Hotels – LBO Case Study:</span> Modeled Blackstone's acquisition ($25bn EV, 12.5× EBITDA). MOIC: 2.9×, IRR: 23.6%. Value driven by deleveraging and EBITDA growth despite exit multiple compression.
              </div>
              <div>
                <span className="font-semibold">Aegis Logistics – DCF Valuation:</span> Conservative FCFF-based model (11.12% WACC, 6.0–6.5% terminal growth). Intrinsic Value ₹587 vs Market ₹691 (~18% premium). ~80% of EV from terminal value.
              </div>
              <div>
                <span className="font-semibold">Britannia – Financial Modeling & Valuation:</span> Comprehensive model (13.8% WACC, 5% Terminal). Intrinsic ₹1,780 vs Market ₹5,700+ (&gt;3× premium).
              </div>
              <div>
                <span className="font-semibold">ITC – Equity Research Report:</span> P/E ~28× vs sector 53×, 4.2% yield, debt-free. Attractive risk-reward profile with improving FMCG mix.
              </div>
              <div>
                <span className="font-semibold">Zomato – DCF Valuation:</span> FCFF-based DCF (30% CAGR, 15.4% WACC). Intrinsic ₹59 vs Market ₹319 (~5× premium). Weak capital efficiency.
              </div>
              <div>
                <span className="font-semibold">ITC – Financial Analysis:</span> ₹75,000+ Cr revenue, 34% EBITDA, 23% Net Margin, 28% ROE, Zero Debt.
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
