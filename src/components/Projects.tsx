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
  Smartphone
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
  dataSources: string[];
  methodology: ProjectSection[];
  tools: string[];
  keyInsights: string[];
  outcome: string;
  tags: string[];
  chartType: 'financial' | 'dcf';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Financial Statement Analysis",
    company: "Britannia Industries Ltd",
    companyIcon: Building2,
    category: "Equity Research & Financial Analysis",
    overview: "Conducted a comprehensive financial statement analysis of Britannia Industries Ltd to evaluate the company's financial health, profitability, liquidity, efficiency, and solvency over multiple years.",
    objectives: [
      "Assess operational and financial performance trends",
      "Analyze profitability and cost efficiency",
      "Evaluate liquidity position and working capital management",
      "Examine capital structure and long-term solvency",
      "Identify key strengths, risks, and red flags for investors"
    ],
    dataSources: [
      "Annual Reports",
      "Audited Financial Statements",
      "Notes to Accounts"
    ],
    methodology: [
      {
        title: "Income Statement Analysis",
        icon: TrendingUp,
        items: ["Revenue growth trends", "EBITDA margin analysis", "Net profit margin evaluation"]
      },
      {
        title: "Balance Sheet Analysis",
        icon: Database,
        items: ["Asset structure composition", "Liabilities breakdown", "Equity composition analysis"]
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
    tools: ["Microsoft Excel", "Financial Modeling", "Ratio Analysis", "Trend Analysis"],
    keyInsights: [
      "Identified consistent revenue growth supported by strong brand positioning",
      "Observed margin stability driven by operational efficiency",
      "Evaluated strong cash flow generation and manageable debt levels",
      "Highlighted key risks related to raw material costs and competition"
    ],
    outcome: "Developed a structured analytical report demonstrating strong fundamentals and long-term sustainability, suitable for equity research and investment decision-making.",
    tags: ["Financial Statements", "Ratio Analysis", "FMCG Sector", "Equity Research"],
    chartType: 'financial'
  },
  {
    id: 2,
    title: "Discounted Cash Flow (DCF) Valuation",
    company: "Zomato Ltd",
    companyIcon: Smartphone,
    category: "Corporate Valuation & Investment Analysis",
    overview: "Performed a detailed intrinsic valuation of Zomato Ltd using the Discounted Cash Flow (DCF) methodology to estimate its fair value and assess investment attractiveness.",
    objectives: [
      "Estimate intrinsic value using projected free cash flows",
      "Analyze sensitivity to key valuation assumptions",
      "Compare intrinsic value with market price",
      "Understand risk-return dynamics of a high-growth digital business"
    ],
    dataSources: [
      "Historical Financial Data",
      "Industry Research Reports",
      "Market Data & Beta Analysis"
    ],
    methodology: [
      {
        title: "Key Assumptions",
        icon: Target,
        items: [
          "Revenue growth projections based on historical trends and industry outlook",
          "Operating margin improvement assumptions",
          "Capital expenditure and working capital estimates",
          "Terminal growth rate assumptions"
        ]
      },
      {
        title: "FCFF Forecasting",
        icon: LineChart,
        items: [
          "Projected Free Cash Flow to Firm (FCFF)",
          "Revenue-driven forecasting model",
          "Working capital adjustments"
        ]
      },
      {
        title: "WACC Calculation",
        icon: Calculator,
        items: [
          "Cost of Equity using CAPM",
          "Cost of Debt adjusted for tax",
          "Optimal capital structure weighting"
        ]
      },
      {
        title: "Terminal Value",
        icon: TrendingUp,
        items: [
          "Gordon Growth Model application",
          "Perpetuity growth rate estimation",
          "Terminal value sensitivity analysis"
        ]
      }
    ],
    tools: ["Microsoft Excel", "DCF Model", "Sensitivity Analysis", "Valuation Dashboard"],
    keyInsights: [
      "Highlighted valuation sensitivity to profitability assumptions",
      "Identified risks related to competitive intensity and margin sustainability",
      "Conducted best-case, base-case, and worst-case scenario analysis",
      "Provided investment interpretation (overvalued / undervalued / fairly valued)"
    ],
    outcome: "Built a complete DCF valuation model showcasing strong understanding of corporate valuation, cost of capital, and long-term forecasting—aligned with equity research and investment analyst roles.",
    tags: ["DCF Valuation", "WACC", "Sensitivity Analysis", "Tech/Digital Sector"],
    chartType: 'dcf'
  }
];

// Financial Statement Analysis Chart Thumbnail
const FinancialChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Background grid */}
    <defs>
      <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid1)" />
    
    {/* Revenue bars */}
    <rect x="20" y="70" width="18" height="40" fill="hsl(var(--primary))" opacity="0.6" rx="2" />
    <rect x="45" y="55" width="18" height="55" fill="hsl(var(--primary))" opacity="0.7" rx="2" />
    <rect x="70" y="40" width="18" height="70" fill="hsl(var(--primary))" opacity="0.8" rx="2" />
    <rect x="95" y="30" width="18" height="80" fill="hsl(var(--primary))" opacity="0.9" rx="2" />
    <rect x="120" y="25" width="18" height="85" fill="hsl(var(--primary))" rx="2" />
    
    {/* Profit margin line */}
    <path 
      d="M 29 60 L 54 50 L 79 42 L 104 35 L 129 30" 
      stroke="hsl(var(--accent))" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="29" cy="60" r="3" fill="hsl(var(--accent))" />
    <circle cx="54" cy="50" r="3" fill="hsl(var(--accent))" />
    <circle cx="79" cy="42" r="3" fill="hsl(var(--accent))" />
    <circle cx="104" cy="35" r="3" fill="hsl(var(--accent))" />
    <circle cx="129" cy="30" r="3" fill="hsl(var(--accent))" />
    
    {/* Ratio indicators */}
    <rect x="155" y="25" width="35" height="18" fill="hsl(var(--accent))" opacity="0.15" rx="3" />
    <text x="172" y="37" fontSize="8" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="600">ROE</text>
    <rect x="155" y="48" width="35" height="18" fill="hsl(var(--primary))" opacity="0.15" rx="3" />
    <text x="172" y="60" fontSize="8" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">ROA</text>
    <rect x="155" y="71" width="35" height="18" fill="hsl(var(--accent))" opacity="0.15" rx="3" />
    <text x="172" y="83" fontSize="8" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="600">D/E</text>
  </svg>
);

// DCF Valuation Chart Thumbnail
const DCFChartThumbnail = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Background grid */}
    <defs>
      <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="120" fill="url(#grid2)" />
    
    {/* Cash flow projection bars (decreasing to show discounting) */}
    <rect x="15" y="35" width="16" height="75" fill="hsl(var(--accent))" opacity="0.9" rx="2" />
    <rect x="38" y="40" width="16" height="70" fill="hsl(var(--accent))" opacity="0.8" rx="2" />
    <rect x="61" y="48" width="16" height="62" fill="hsl(var(--accent))" opacity="0.7" rx="2" />
    <rect x="84" y="55" width="16" height="55" fill="hsl(var(--accent))" opacity="0.6" rx="2" />
    <rect x="107" y="62" width="16" height="48" fill="hsl(var(--accent))" opacity="0.5" rx="2" />
    
    {/* Terminal value */}
    <rect x="130" y="25" width="20" height="85" fill="hsl(var(--primary))" opacity="0.8" rx="2" />
    <text x="140" y="20" fontSize="6" fill="hsl(var(--primary))" textAnchor="middle">TV</text>
    
    {/* Discount curve */}
    <path 
      d="M 23 30 Q 60 35 90 55 T 140 22" 
      stroke="hsl(var(--primary))" 
      strokeWidth="2" 
      fill="none"
      strokeDasharray="4,2"
    />
    
    {/* WACC indicator */}
    <rect x="158" y="30" width="36" height="22" fill="hsl(var(--primary))" opacity="0.1" rx="4" stroke="hsl(var(--primary))" strokeWidth="1" />
    <text x="176" y="38" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">WACC</text>
    <text x="176" y="48" fontSize="8" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="700">12.5%</text>
    
    {/* Fair value indicator */}
    <rect x="158" y="60" width="36" height="22" fill="hsl(var(--accent))" opacity="0.1" rx="4" stroke="hsl(var(--accent))" strokeWidth="1" />
    <text x="176" y="68" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Value</text>
    <text x="176" y="78" fontSize="8" fill="hsl(var(--accent))" textAnchor="middle" fontWeight="700">₹ Fair</text>
    
    {/* Year labels */}
    <text x="23" y="118" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Y1</text>
    <text x="46" y="118" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Y2</text>
    <text x="69" y="118" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Y3</text>
    <text x="92" y="118" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Y4</text>
    <text x="115" y="118" fontSize="6" fill="hsl(var(--muted-foreground))" textAnchor="middle">Y5</text>
  </svg>
);

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
        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Chart Thumbnail */}
                  <div className="lg:w-56 flex-shrink-0">
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border/40">
                      {project.chartType === 'financial' ? <FinancialChartThumbnail /> : <DCFChartThumbnail />}
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
                {/* Two Column Layout for Details */}
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
                  
                  {/* Data Sources & Tools */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Database className="w-4 h-4 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground">Data Sources</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.dataSources.map((source, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-border/60 text-muted-foreground">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">Tools Used</h4>
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
                </div>
                
                {/* Methodology Grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">Key Analysis Performed</h4>
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
