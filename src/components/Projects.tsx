import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  BarChart3, 
  PieChart,
  Calculator,
  DollarSign,
  LineChart,
  Database,
  CheckCircle2,
  ArrowRight,
  Building2,
  Smartphone,
  Layers,
  Briefcase,
  FileSpreadsheet,
  Users,
  Scale
} from 'lucide-react';

interface ProjectSection {
  title: string;
  icon: React.ElementType;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  company: string;
  companyIcon: React.ElementType;
  category: string;
  overview: string;
  objectives: string[];
  methodology: ProjectSection[];
  tools: string[];
  keyInsights: string[];
  outcome: string;
  tags: string[];
  chartType: 'financial' | 'dcf' | 'dupont' | 'services';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Financial Statement Analysis",
    company: "Britannia Industries Ltd",
    companyIcon: Building2,
    category: "Financial Analysis & Reporting",
    overview: "Conducted an in-depth financial statement analysis of Britannia Industries Ltd to assess profitability, liquidity, efficiency, and long-term financial stability.",
    objectives: [
      "Evaluate historical financial performance",
      "Analyze profitability and cost structure",
      "Assess liquidity and working capital efficiency",
      "Examine capital structure and solvency",
      "Identify strengths, risks, and investor-relevant insights"
    ],
    methodology: [
      {
        title: "Income Statement Analysis",
        icon: TrendingUp,
        items: ["Revenue growth trends", "Operating margin analysis", "Net profit trends"]
      },
      {
        title: "Balance Sheet Analysis",
        icon: Database,
        items: ["Asset composition", "Liabilities structure", "Equity analysis"]
      },
      {
        title: "Cash Flow Analysis",
        icon: DollarSign,
        items: ["Operating cash flows", "Investing activities", "Financing cash flows"]
      },
      {
        title: "Ratio Analysis",
        icon: Calculator,
        items: [
          "Profitability: ROE, ROA, Gross Margin, Net Margin",
          "Liquidity: Current Ratio, Quick Ratio",
          "Efficiency: Inventory Turnover, Receivables Turnover",
          "Solvency: Debt-to-Equity, Interest Coverage"
        ]
      }
    ],
    tools: ["Microsoft Excel", "Ratio Analysis", "Trend Analysis", "Comparative Statements"],
    keyInsights: [
      "Stable revenue growth supported by strong brand positioning",
      "Consistent margin performance driven by operational efficiency",
      "Strong operating cash flow and conservative leverage",
      "Identified risks related to input cost volatility and competitive pressure"
    ],
    outcome: "Prepared a structured financial analysis report demonstrating strong fundamentals and long-term sustainability from an investor's perspective.",
    tags: ["Financial Statements", "Ratio Analysis", "FMCG Sector", "Equity Research"],
    chartType: 'financial'
  },
  {
    id: 2,
    title: "Discounted Cash Flow (DCF) Valuation",
    company: "Zomato Ltd",
    companyIcon: Smartphone,
    category: "Corporate Valuation & Investment Analysis",
    overview: "Performed a complete intrinsic valuation of Zomato Ltd using the Discounted Cash Flow (DCF) methodology to estimate fair value and assess investment attractiveness.",
    objectives: [
      "Estimate intrinsic value based on projected cash flows",
      "Understand valuation drivers for a high-growth digital business",
      "Perform sensitivity and scenario analysis",
      "Compare intrinsic value with market price"
    ],
    methodology: [
      {
        title: "FCFF Forecasting",
        icon: LineChart,
        items: [
          "Revenue growth projections based on historical trends",
          "Operating margin improvement assumptions",
          "Working capital and capex estimates"
        ]
      },
      {
        title: "Cost of Capital",
        icon: Calculator,
        items: [
          "Cost of Equity using CAPM",
          "Cost of Debt adjusted for tax",
          "Capital structure assumptions"
        ]
      },
      {
        title: "Terminal Value",
        icon: TrendingUp,
        items: [
          "Gordon Growth Model application",
          "Perpetuity growth rate estimation",
          "Terminal value contribution analysis"
        ]
      },
      {
        title: "Sensitivity Analysis",
        icon: Layers,
        items: [
          "WACC sensitivity on valuation",
          "Terminal growth rate impact",
          "Base, optimistic, conservative scenarios"
        ]
      }
    ],
    tools: ["Microsoft Excel", "DCF Model", "Valuation Summary", "Sensitivity Tables"],
    keyInsights: [
      "Valuation highly sensitive to profitability and growth assumptions",
      "Highlighted business risks related to competition and margin sustainability",
      "Provided investment interpretation (overvalued / fairly valued / undervalued)",
      "Demonstrated understanding of high-growth company valuation dynamics"
    ],
    outcome: "Built a full DCF valuation model demonstrating strong understanding of corporate valuation, forecasting, and cost of capital concepts.",
    tags: ["DCF Valuation", "WACC", "Sensitivity Analysis", "Tech Sector"],
    chartType: 'dcf'
  },
  {
    id: 3,
    title: "DuPont Analysis – Profitability Drivers Study",
    company: "Multi-Company Analysis",
    companyIcon: PieChart,
    category: "Profitability & ROE Decomposition",
    overview: "Applied the DuPont Analysis framework to decompose Return on Equity (ROE) into its core drivers and evaluate management efficiency across key financial dimensions.",
    objectives: [
      "Understand the drivers of shareholder returns",
      "Analyze operating efficiency, asset utilization, and financial leverage",
      "Identify areas of strength and concern in business performance",
      "Assess sustainability of returns from an investor perspective"
    ],
    methodology: [
      {
        title: "Net Profit Margin",
        icon: DollarSign,
        items: [
          "Operating efficiency analysis",
          "Cost structure evaluation",
          "Margin trend identification"
        ]
      },
      {
        title: "Asset Turnover",
        icon: BarChart3,
        items: [
          "Asset utilization efficiency",
          "Revenue generation per asset",
          "Capital intensity assessment"
        ]
      },
      {
        title: "Equity Multiplier",
        icon: Scale,
        items: [
          "Financial leverage analysis",
          "Debt utilization assessment",
          "Risk-return trade-off evaluation"
        ]
      },
      {
        title: "ROE Decomposition",
        icon: Layers,
        items: [
          "Three-factor DuPont breakdown",
          "Driver contribution analysis",
          "Year-over-year comparison"
        ]
      }
    ],
    tools: ["Microsoft Excel", "Ratio Breakdown", "Trend Comparison", "Peer Benchmarking"],
    keyInsights: [
      "Identified whether ROE growth was driven by profitability, efficiency, or leverage",
      "Assessed sustainability of returns from a long-term investor perspective",
      "Highlighted financial risk implications of leverage-driven ROE",
      "Provided actionable insights for management performance evaluation"
    ],
    outcome: "Delivered a clear profitability diagnostics report suitable for equity research and corporate finance decision-making.",
    tags: ["DuPont Analysis", "ROE Decomposition", "Profitability", "Financial Leverage"],
    chartType: 'dupont'
  },
  {
    id: 4,
    title: "Finance Services Portfolio",
    company: "Freelance & Practice Work",
    companyIcon: Briefcase,
    category: "Financial Modeling & Advisory",
    overview: "Provided finance-related analytical services focused on reporting, valuation, and modeling for startups, small businesses, and academic use cases.",
    objectives: [
      "Deliver clear, decision-oriented financial insights",
      "Create investor-friendly and management-ready outputs",
      "Build models designed for transparency and auditability",
      "Support strategic and financial decision-making"
    ],
    methodology: [
      {
        title: "Financial Reporting",
        icon: FileSpreadsheet,
        items: [
          "Income Statement, Balance Sheet, Cash Flow preparation",
          "Trend analysis and variance analysis",
          "Management-focused financial summaries"
        ]
      },
      {
        title: "Valuation Services",
        icon: Calculator,
        items: [
          "DCF valuation models",
          "Comparable Company Analysis (basic)",
          "Intrinsic value estimation"
        ]
      },
      {
        title: "Financial Modeling",
        icon: LineChart,
        items: [
          "Revenue, cost, and cash flow forecasting",
          "Scenario and sensitivity analysis",
          "Assumption-driven model structuring"
        ]
      },
      {
        title: "Client Deliverables",
        icon: Users,
        items: [
          "Clear documentation and assumptions",
          "Presentation-ready outputs",
          "Actionable recommendations"
        ]
      }
    ],
    tools: ["Microsoft Excel", "Advanced Formulas", "Financial Statements", "Public Data Sources"],
    keyInsights: [
      "Developed practical, client-oriented finance skills",
      "Created models aligned with analyst and consulting workflows",
      "Delivered outputs suitable for investor and management review",
      "Built foundation for professional finance service delivery"
    ],
    outcome: "Demonstrated practical, client-oriented finance skills aligned with analyst and consulting-style work environments.",
    tags: ["Financial Modeling", "Valuation", "Consulting", "Client Services"],
    chartType: 'services'
  }
];

// Financial Statement Analysis Chart
const FinancialChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    <defs>
      <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid1)" />
    <rect x="20" y="70" width="18" height="40" fill="hsl(var(--primary))" opacity="0.6" rx="2" />
    <rect x="45" y="55" width="18" height="55" fill="hsl(var(--primary))" opacity="0.7" rx="2" />
    <rect x="70" y="40" width="18" height="70" fill="hsl(var(--primary))" opacity="0.8" rx="2" />
    <rect x="95" y="30" width="18" height="80" fill="hsl(var(--primary))" opacity="0.9" rx="2" />
    <rect x="120" y="25" width="18" height="85" fill="hsl(var(--primary))" rx="2" />
    <path d="M 29 60 L 54 50 L 79 42 L 104 35 L 129 30" stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="29" cy="60" r="3" fill="hsl(var(--accent))" />
    <circle cx="54" cy="50" r="3" fill="hsl(var(--accent))" />
    <circle cx="79" cy="42" r="3" fill="hsl(var(--accent))" />
    <circle cx="104" cy="35" r="3" fill="hsl(var(--accent))" />
    <circle cx="129" cy="30" r="3" fill="hsl(var(--accent))" />
    <rect x="155" y="30" width="35" height="16" fill="hsl(var(--accent))" opacity="0.15" rx="3" />
    <text x="172" y="41" fontSize="7" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="600">ROE</text>
    <rect x="155" y="52" width="35" height="16" fill="hsl(var(--primary))" opacity="0.15" rx="3" />
    <text x="172" y="63" fontSize="7" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">D/E</text>
  </svg>
);

// DCF Valuation Chart
const DCFChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    <defs>
      <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid2)" />
    <rect x="15" y="35" width="16" height="75" fill="hsl(var(--accent))" opacity="0.9" rx="2" />
    <rect x="38" y="42" width="16" height="68" fill="hsl(var(--accent))" opacity="0.8" rx="2" />
    <rect x="61" y="50" width="16" height="60" fill="hsl(var(--accent))" opacity="0.7" rx="2" />
    <rect x="84" y="58" width="16" height="52" fill="hsl(var(--accent))" opacity="0.6" rx="2" />
    <rect x="107" y="65" width="16" height="45" fill="hsl(var(--accent))" opacity="0.5" rx="2" />
    <rect x="130" y="25" width="20" height="85" fill="hsl(var(--primary))" opacity="0.8" rx="2" />
    <text x="140" y="18" fontSize="6" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">TV</text>
    <path d="M 23 30 Q 60 38 90 58 T 140 22" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="4,2" />
    <rect x="160" y="35" width="32" height="20" fill="hsl(var(--primary))" opacity="0.1" rx="4" stroke="hsl(var(--primary))" strokeWidth="1" />
    <text x="176" y="48" fontSize="7" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">WACC</text>
    <rect x="160" y="62" width="32" height="20" fill="hsl(var(--accent))" opacity="0.1" rx="4" stroke="hsl(var(--accent))" strokeWidth="1" />
    <text x="176" y="75" fontSize="7" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="600">NPV</text>
  </svg>
);

// DuPont Analysis Chart
const DuPontChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    <defs>
      <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid3)" />
    {/* ROE at top */}
    <rect x="75" y="10" width="50" height="22" fill="hsl(var(--primary))" opacity="0.9" rx="4" />
    <text x="100" y="24" fontSize="8" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="600">ROE</text>
    {/* Connector lines */}
    <line x1="100" y1="32" x2="100" y2="42" stroke="hsl(var(--border))" strokeWidth="2" />
    <line x1="40" y1="42" x2="160" y2="42" stroke="hsl(var(--border))" strokeWidth="2" />
    <line x1="40" y1="42" x2="40" y2="52" stroke="hsl(var(--border))" strokeWidth="2" />
    <line x1="100" y1="42" x2="100" y2="52" stroke="hsl(var(--border))" strokeWidth="2" />
    <line x1="160" y1="42" x2="160" y2="52" stroke="hsl(var(--border))" strokeWidth="2" />
    {/* Three components */}
    <rect x="15" y="52" width="50" height="22" fill="hsl(var(--accent))" opacity="0.8" rx="4" />
    <text x="40" y="66" fontSize="6" fill="hsl(var(--accent-foreground))" textAnchor="middle" fontWeight="500">Margin</text>
    <rect x="75" y="52" width="50" height="22" fill="hsl(var(--accent))" opacity="0.8" rx="4" />
    <text x="100" y="66" fontSize="6" fill="hsl(var(--accent-foreground))" textAnchor="middle" fontWeight="500">Turnover</text>
    <rect x="135" y="52" width="50" height="22" fill="hsl(var(--accent))" opacity="0.8" rx="4" />
    <text x="160" y="66" fontSize="6" fill="hsl(var(--accent-foreground))" textAnchor="middle" fontWeight="500">Leverage</text>
    {/* Values */}
    <text x="40" y="90" fontSize="10" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">12%</text>
    <text x="100" y="90" fontSize="10" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">1.8x</text>
    <text x="160" y="90" fontSize="10" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">2.1x</text>
    {/* Multiply symbols */}
    <text x="70" y="90" fontSize="12" fill="hsl(var(--muted-foreground))" textAnchor="middle">×</text>
    <text x="130" y="90" fontSize="12" fill="hsl(var(--muted-foreground))" textAnchor="middle">×</text>
  </svg>
);

// Services Chart
const ServicesChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    <defs>
      <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid4)" />
    {/* Service cards */}
    <rect x="15" y="15" width="52" height="40" fill="hsl(var(--primary))" opacity="0.15" rx="4" stroke="hsl(var(--primary))" strokeWidth="1" />
    <text x="41" y="32" fontSize="6" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">Reporting</text>
    <text x="41" y="44" fontSize="8" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">P&L / BS</text>
    
    <rect x="74" y="15" width="52" height="40" fill="hsl(var(--accent))" opacity="0.15" rx="4" stroke="hsl(var(--accent))" strokeWidth="1" />
    <text x="100" y="32" fontSize="6" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="600">Valuation</text>
    <text x="100" y="44" fontSize="8" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="700">DCF</text>
    
    <rect x="133" y="15" width="52" height="40" fill="hsl(var(--primary))" opacity="0.15" rx="4" stroke="hsl(var(--primary))" strokeWidth="1" />
    <text x="159" y="32" fontSize="6" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">Modeling</text>
    <text x="159" y="44" fontSize="8" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">Excel</text>
    
    {/* Workflow arrow */}
    <path d="M 30 70 L 170 70" stroke="hsl(var(--border))" strokeWidth="2" />
    <polygon points="170,70 162,66 162,74" fill="hsl(var(--accent))" />
    
    {/* Steps */}
    <circle cx="50" cy="70" r="8" fill="hsl(var(--primary))" />
    <text x="50" y="73" fontSize="8" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="600">1</text>
    <text x="50" y="90" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Analyze</text>
    
    <circle cx="100" cy="70" r="8" fill="hsl(var(--accent))" />
    <text x="100" y="73" fontSize="8" fill="hsl(var(--accent-foreground))" textAnchor="middle" fontWeight="600">2</text>
    <text x="100" y="90" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Model</text>
    
    <circle cx="150" cy="70" r="8" fill="hsl(var(--primary))" />
    <text x="150" y="73" fontSize="8" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="600">3</text>
    <text x="150" y="90" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Deliver</text>
  </svg>
);

const getChartComponent = (chartType: string) => {
  switch (chartType) {
    case 'financial': return <FinancialChartThumbnail />;
    case 'dcf': return <DCFChartThumbnail />;
    case 'dupont': return <DuPontChartThumbnail />;
    case 'services': return <ServicesChartThumbnail />;
    default: return <FinancialChartThumbnail />;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Analytical Projects
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive finance projects demonstrating proficiency in financial analysis, 
            valuation methodologies, and investment research.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Chart Thumbnail */}
                  <div className="lg:w-52 flex-shrink-0">
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border/40">
                      {getChartComponent(project.chartType)}
                    </div>
                  </div>
                  
                  {/* Header Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs font-medium">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-accent font-medium mb-4">
                      <project.companyIcon className="w-4 h-4" />
                      <span>{project.company}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Objectives */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Objectives</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-accent mt-1.5 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tools */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground">Tools & Methods</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-secondary text-foreground">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Methodology Grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">Analysis Framework</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.methodology.map((method, idx) => (
                      <div key={idx} className="bg-secondary/40 rounded-lg p-4 border border-border/30">
                        <div className="flex items-center gap-2 mb-3">
                          <method.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{method.title}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {method.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs text-muted-foreground leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Key Insights */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Key Insights</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.keyInsights.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-finance-light/50 border border-border/20">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Outcome */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-5 border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <PieChart className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Outcome</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/40">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All analyses are for academic and analytical demonstration purposes only. 
          This does not constitute investment advice.
        </p>
      </div>
    </section>
  );
};

export default Projects;
