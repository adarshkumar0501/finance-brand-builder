import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, TrendingDown, Target, AlertTriangle, BarChart3, PieChart, Smartphone, Building2, FileText } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
  Legend,
  ComposedChart,
  Line,
  Area
} from 'recharts';

// Zomato DCF Data
const zomatoFCFFData = [
  { year: 'FY25E', fcff: -800 },
  { year: 'FY26E', fcff: -400 },
  { year: 'FY27E', fcff: 200 },
  { year: 'FY28E', fcff: 800 },
  { year: 'FY29E', fcff: 1400 },
  { year: 'FY30E', fcff: 2200 }
];

// Britannia DuPont Data
const britanniaRoeData = [
  { component: 'Net Margin', value: 12, fill: 'hsl(var(--primary))' },
  { component: 'Asset Turnover', value: 1.8, fill: 'hsl(var(--accent))' },
  { component: 'Equity Multiplier', value: 1.5, fill: 'hsl(var(--primary))' }
];

// Britannia Valuation Data
const britanniaValuationData = [
  { metric: 'Intrinsic Value', value: 1780, fill: 'hsl(var(--primary))' },
  { metric: 'Market Price', value: 5700, fill: 'hsl(var(--accent))' }
];

// ITC Financial Data
const itcFinancialData = [
  { metric: 'Revenue (₹Cr)', value: 75000 },
  { metric: 'EBITDA Margin', value: 34 },
  { metric: 'Net Margin', value: 23 },
  { metric: 'ROE', value: 28 }
];

// ITC Segment Data
const itcSegmentData = [
  { name: 'Cigarettes', value: 42, fill: 'hsl(var(--primary))' },
  { name: 'FMCG', value: 18, fill: 'hsl(var(--accent))' },
  { name: 'Hotels', value: 8, fill: 'hsl(210 40% 60%)' },
  { name: 'Agri', value: 18, fill: 'hsl(210 40% 70%)' },
  { name: 'Paper', value: 14, fill: 'hsl(180 40% 50%)' }
];

const CHART_COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(210 40% 60%)', 'hsl(210 40% 70%)', 'hsl(180 40% 50%)'];

const projects = [
  {
    id: 1,
    title: 'Zomato – DCF Valuation',
    company: 'Zomato Ltd',
    sector: 'Technology / Platform Business',
    icon: Smartphone,
    summary: 'Built a full FCFF-based DCF model to estimate Zomato\'s intrinsic value under aggressive growth assumptions.',
    keyAssumptions: [
      { label: 'Revenue CAGR', value: '~30% till FY30' },
      { label: 'WACC', value: '~15.4%' },
      { label: 'ROIC', value: '~1.6%' },
      { label: 'Terminal Growth', value: '~6.5%' }
    ],
    keyOutputs: [
      { label: 'Intrinsic Value', value: '₹59/share', type: 'neutral' },
      { label: 'Market Price', value: '₹319', type: 'negative' },
      { label: 'Premium', value: '~5× intrinsic', type: 'negative' }
    ],
    insight: 'Even under optimistic growth and terminal assumptions, valuation remains significantly below market price due to weak capital efficiency and high reinvestment requirements.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_zomato-dcf-activity-7374643500304334848-l2Ig',
    chartType: 'zomato'
  },
  {
    id: 2,
    title: 'Britannia – DuPont Analysis',
    company: 'Britannia Industries Ltd',
    sector: 'FMCG',
    icon: PieChart,
    summary: 'Performed DuPont analysis to decompose ROE into its core drivers and evaluate profitability, efficiency, and leverage.',
    keyFindings: [
      'ROE primarily driven by strong operating margins',
      'Asset turnover supports efficiency-driven returns',
      'Low leverage confirms quality of earnings'
    ],
    insight: 'Britannia\'s return profile is driven by operating performance rather than balance-sheet risk.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_britannia-industry-dupont-analysis-activity-7342785833533333504-8We3',
    chartType: 'dupont'
  },
  {
    id: 3,
    title: 'Britannia – Financial Modeling & Valuation',
    company: 'Britannia Industries Ltd',
    sector: 'FMCG',
    icon: Building2,
    summary: 'Built a comprehensive financial model and FCFF-based DCF valuation for Britannia Industries.',
    keyOutputs: [
      { label: 'WACC', value: '~13.8%', type: 'neutral' },
      { label: 'Terminal Growth', value: '~5%', type: 'neutral' },
      { label: 'Intrinsic Value', value: '₹1,780/share', type: 'neutral' },
      { label: 'Market Price', value: '₹5,700+', type: 'negative' },
      { label: 'Implied Premium', value: '>3×', type: 'negative' }
    ],
    insight: 'Despite strong fundamentals and cash generation, the stock trades at a significant premium, implying extremely optimistic long-term assumptions.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_britannia-financial-modeling-and-valuation-activity-7350755763247632384-qjM-',
    chartType: 'valuation'
  },
  {
    id: 4,
    title: 'ITC – Financial Statement Analysis',
    company: 'ITC Ltd',
    sector: 'FMCG | Hotels | Paperboards | Agri-Business',
    icon: BarChart3,
    summary: 'Conducted detailed financial statement analysis covering profitability, liquidity, solvency, and cash-flow trends.',
    keyHighlights: [
      { label: 'Revenue', value: '₹75,000+ Cr' },
      { label: 'EBITDA Margin', value: '~34%' },
      { label: 'Net Profit Margin', value: '~23%' },
      { label: 'ROE', value: '~28%' },
      { label: 'Net Debt', value: 'Zero' }
    ],
    insight: 'ITC demonstrates strong cash-flow generation, margin stability, and balance-sheet strength across business cycles.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_itc-financial-analysis-activity-7414871028784418816-GuWP',
    chartType: 'itc-financial'
  },
  {
    id: 5,
    title: 'ITC – Equity Research Report',
    company: 'ITC Ltd',
    sector: 'FMCG',
    icon: FileText,
    summary: 'Prepared a full equity research report including business overview, segment analysis, valuation, risks, and catalysts.',
    valuationSnapshot: [
      { label: 'P/E', value: '~28× vs sector 53×' },
      { label: 'Dividend Yield', value: '~4.2%' },
      { label: 'Debt Status', value: 'Debt-free' }
    ],
    investmentView: 'Strong cash flows, improving FMCG mix, and capital discipline support attractive risk-reward, with regulatory risks clearly identified.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_itc-equity-research-report-activity-7421105963874816001-N4si',
    chartType: 'itc-segment'
  }
];

const Projects = () => {
  const renderChart = (chartType: string) => {
    switch (chartType) {
      case 'zomato':
        return (
          <ResponsiveContainer width="100%" height={180}>
            <ComposedChart data={zomatoFCFFData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }} 
              />
              <Bar dataKey="fcff" fill="hsl(var(--primary))" name="FCFF (₹Cr)" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="fcff" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))' }} />
            </ComposedChart>
          </ResponsiveContainer>
        );
      case 'dupont':
        return (
          <div className="h-[180px] flex items-center justify-center">
            <div className="flex items-center space-x-4">
              {britanniaRoeData.map((item, index) => (
                <div key={item.component} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground mb-2 ${
                    index === 1 ? 'bg-accent' : 'bg-primary'
                  }`}>
                    {typeof item.value === 'number' && item.value < 10 ? `${item.value.toFixed(1)}x` : `${item.value}%`}
                  </div>
                  <p className="text-xs text-muted-foreground">{item.component}</p>
                  {index < britanniaRoeData.length - 1 && (
                    <span className="text-lg text-muted-foreground absolute ml-20 -mt-12">×</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'valuation':
        return (
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={britanniaValuationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis dataKey="metric" type="category" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => [`₹${value}`, 'Per Share']}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {britanniaValuationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'itc-financial':
        return (
          <div className="h-[180px] grid grid-cols-2 gap-3 p-2">
            {itcFinancialData.map((item, index) => (
              <div key={item.metric} className={`p-3 rounded-lg border ${
                index % 2 === 0 ? 'bg-primary/5 border-primary/20' : 'bg-accent/5 border-accent/20'
              }`}>
                <p className="text-xs text-muted-foreground mb-1">{item.metric}</p>
                <p className={`text-xl font-bold ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                  {item.metric.includes('₹') ? `₹${(item.value / 1000).toFixed(0)}K Cr` : `${item.value}%`}
                </p>
              </div>
            ))}
          </div>
        );
      case 'itc-segment':
        return (
          <ResponsiveContainer width="100%" height={180}>
            <RechartsPie>
              <Pie
                data={itcSegmentData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={65}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {itcSegmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </RechartsPie>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-company, analyst-style projects demonstrating valuation, financial analysis, and equity research capabilities.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isAccent = index % 2 === 1;
            
            return (
              <Card key={project.id} className="border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Chart Section */}
                  <div className="lg:col-span-2 p-6 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="h-full flex flex-col">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className={`p-2 rounded-lg ${isAccent ? 'bg-accent/10' : 'bg-primary/10'}`}>
                          <Icon className={`w-5 h-5 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                        </div>
                        <Badge variant="outline" className="text-xs">{project.sector}</Badge>
                      </div>
                      {renderChart(project.chartType)}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-sm text-muted-foreground">{project.summary}</p>

                      {/* Key Assumptions/Outputs */}
                      {project.keyAssumptions && (
                        <div className="grid grid-cols-2 gap-2">
                          {project.keyAssumptions.map((item) => (
                            <div key={item.label} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.label}:</span>
                              <span className="font-medium text-foreground">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {project.keyOutputs && (
                        <div className="flex flex-wrap gap-2">
                          {project.keyOutputs.map((item) => (
                            <Badge 
                              key={item.label} 
                              variant={item.type === 'negative' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {item.label}: {item.value}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {project.keyFindings && (
                        <ul className="space-y-1">
                          {project.keyFindings.map((finding, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{finding}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.keyHighlights && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {project.keyHighlights.map((item) => (
                            <div key={item.label} className="text-sm">
                              <span className="text-muted-foreground">{item.label}: </span>
                              <span className="font-medium text-foreground">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {project.valuationSnapshot && (
                        <div className="flex flex-wrap gap-3">
                          {project.valuationSnapshot.map((item) => (
                            <div key={item.label} className="text-sm">
                              <span className="text-muted-foreground">{item.label}: </span>
                              <span className="font-medium text-primary">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Insight */}
                      <div className={`p-3 rounded-lg border ${isAccent ? 'bg-accent/5 border-accent/20' : 'bg-primary/5 border-primary/20'}`}>
                        <div className="flex items-start space-x-2">
                          <Target className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Key Insight: </span>
                            {project.insight || project.investmentView}
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn CTA */}
                      <Button 
                        asChild
                        variant="outline"
                        className={`w-full sm:w-auto ${
                          isAccent 
                            ? 'border-accent/30 text-accent hover:bg-accent/5 hover:border-accent' 
                            : 'border-primary/30 text-primary hover:bg-primary/5 hover:border-primary'
                        }`}
                      >
                        <a 
                          href={project.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Full Project on LinkedIn
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
