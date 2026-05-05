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

// Britannia Revenue & Margin Trend
const britanniaRevenueTrend = [
  { year: 'FY21', revenue: 13400, netMargin: 11.2 },
  { year: 'FY22', revenue: 14300, netMargin: 10.8 },
  { year: 'FY23', revenue: 16000, netMargin: 11.5 },
  { year: 'FY24', revenue: 16500, netMargin: 12.1 },
  { year: 'FY25E', revenue: 17800, netMargin: 12.4 }
];

// Britannia DuPont Decomposition Trend
const britanniaDupontTrend = [
  { year: 'FY21', roe: 38, netMargin: 11.2, assetTurnover: 1.7, equityMultiplier: 2.0 },
  { year: 'FY22', roe: 35, netMargin: 10.8, assetTurnover: 1.6, equityMultiplier: 2.0 },
  { year: 'FY23', roe: 42, netMargin: 11.5, assetTurnover: 1.8, equityMultiplier: 2.0 },
  { year: 'FY24', roe: 44, netMargin: 12.1, assetTurnover: 1.8, equityMultiplier: 2.0 },
  { year: 'FY25E', roe: 45, netMargin: 12.4, assetTurnover: 1.9, equityMultiplier: 1.9 }
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

// ITC Revenue & Profitability Trend
const itcRevenueTrend = [
  { year: 'FY21', revenue: 49000, ebitdaMargin: 33, netMargin: 22 },
  { year: 'FY22', revenue: 60000, ebitdaMargin: 34, netMargin: 23 },
  { year: 'FY23', revenue: 70000, ebitdaMargin: 35, netMargin: 24 },
  { year: 'FY24', revenue: 75000, ebitdaMargin: 34, netMargin: 23 }
];

// ITC Valuation Comparison
const itcValuationComparison = [
  { metric: 'ITC P/E', value: 28, fill: 'hsl(var(--primary))' },
  { metric: 'Sector Avg P/E', value: 53, fill: 'hsl(var(--accent))' }
];

// Hilton LBO Data - Capital Structure
const hiltonCapitalStructure = [
  { name: 'Senior Debt', value: 6.6, fill: 'hsl(var(--primary))' },
  { name: 'Sponsor Equity', value: 5.5, fill: 'hsl(var(--accent))' }
];

// Hilton LBO Data - Returns Analysis
const hiltonReturnsData = [
  { metric: 'Entry Equity', value: 5.5 },
  { metric: 'Exit Equity', value: 15.8 }
];

// Hilton LBO Data - Debt Paydown & EBITDA Growth
const hiltonDebtEbitda = [
  { year: 'Y0', debt: 6.6, ebitda: 2.0 },
  { year: 'Y1', debt: 6.0, ebitda: 2.2 },
  { year: 'Y2', debt: 5.2, ebitda: 2.5 },
  { year: 'Y3', debt: 4.3, ebitda: 2.8 },
  { year: 'Y4', debt: 3.2, ebitda: 3.0 },
  { year: 'Y5', debt: 2.3, ebitda: 3.1 }
];

// Hilton LBO - Returns Metrics
const hiltonReturnMetrics = [
  { metric: 'MOIC', value: 2.9, unit: '×', color: 'hsl(var(--accent))' },
  { metric: 'IRR', value: 23.6, unit: '%', color: 'hsl(var(--primary))' }
];

// Aegis Logistics DCF Data - Conservative FCFF-based
const aegisFCFFData = [
  { year: 'FY25E', fcff: 380 },
  { year: 'FY26E', fcff: 410 },
  { year: 'FY27E', fcff: 435 },
  { year: 'FY28E', fcff: 460 },
  { year: 'FY29E', fcff: 485 },
  { year: 'FY30E', fcff: 502 }
];

const aegisRevenueEbitda = [
  { year: 'FY25E', revenue: 5200, ebitdaMargin: 15.2 },
  { year: 'FY26E', revenue: 5650, ebitdaMargin: 15.6 },
  { year: 'FY27E', revenue: 6100, ebitdaMargin: 16.0 },
  { year: 'FY28E', revenue: 6580, ebitdaMargin: 16.3 },
  { year: 'FY29E', revenue: 7050, ebitdaMargin: 16.6 },
  { year: 'FY30E', revenue: 7550, ebitdaMargin: 16.9 }
];

const aegisSegmentData = [
  { name: 'Gas Distribution', value: 45, fill: 'hsl(var(--primary))' },
  { name: 'Liquid Terminal', value: 35, fill: 'hsl(var(--accent))' },
  { name: 'LPG', value: 20, fill: 'hsl(210 40% 60%)' }
];

// Aegis - Valuation Sensitivity (WACC vs Terminal Growth)
const aegisValuationMetrics = [
  { metric: 'Intrinsic Value', value: 587, color: 'hsl(var(--primary))' },
  { metric: 'Market Price', value: 691, color: 'hsl(var(--accent))' }
];

const CHART_COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(210 40% 60%)', 'hsl(210 40% 70%)', 'hsl(180 40% 50%)'];

// Aura IPO Data
const auraRevenueGrowth = [
  { year: 'FY22', revenue: 95, growth: 0 },
  { year: 'FY23', revenue: 138, growth: 45 },
  { year: 'FY24', revenue: 195, growth: 41 }
];
const auraEbitdaMargin = [
  { year: 'FY22', margin: 7.5 },
  { year: 'FY23', margin: 9.6 },
  { year: 'FY24', margin: 12.0 }
];
const auraValuation = [
  { method: 'DCF', value: 128, fill: 'hsl(var(--primary))' },
  { method: 'EV/EBITDA', value: 135, fill: 'hsl(var(--accent))' },
  { method: 'P/E', value: 122, fill: 'hsl(210 40% 60%)' }
];
const auraRevenueMix = [
  { name: 'D2C', value: 68, fill: 'hsl(var(--primary))' },
  { name: 'Other Channels', value: 32, fill: 'hsl(var(--accent))' }
];

// Pennar Industries Data
const pennarRevEbitda = [
  { year: 'FY21', revenue: 1850, ebitda: 130 },
  { year: 'FY22', revenue: 2350, ebitda: 175 },
  { year: 'FY23', revenue: 2900, ebitda: 230 },
  { year: 'FY24', revenue: 3320, ebitda: 285 },
  { year: 'FY25E', revenue: 3780, ebitda: 340 }
];
const pennarMargins = [
  { year: 'FY21', ebitdaMargin: 7.0, patMargin: 2.1 },
  { year: 'FY22', ebitdaMargin: 7.4, patMargin: 2.6 },
  { year: 'FY23', ebitdaMargin: 7.9, patMargin: 3.2 },
  { year: 'FY24', ebitdaMargin: 8.6, patMargin: 3.8 },
  { year: 'FY25E', ebitdaMargin: 9.0, patMargin: 4.3 }
];
const pennarReturns = [
  { year: 'FY21', roe: 9.5, roce: 13.2 },
  { year: 'FY22', roe: 11.8, roce: 15.6 },
  { year: 'FY23', roe: 14.2, roce: 17.9 },
  { year: 'FY24', roe: 16.8, roce: 19.8 },
  { year: 'FY25E', roe: 18.5, roce: 21.8 }
];
const pennarSegments = [
  { name: 'PEB', value: 38, fill: 'hsl(var(--primary))' },
  { name: 'Steel Products', value: 27, fill: 'hsl(var(--accent))' },
  { name: 'Engineering Services', value: 20, fill: 'hsl(210 40% 60%)' },
  { name: 'Tubes & Others', value: 15, fill: 'hsl(180 40% 50%)' }
];
const pennarDcf = [
  { metric: 'Enterprise Value', value: 3050, fill: 'hsl(var(--primary))' },
  { metric: 'Net Debt', value: 420, fill: 'hsl(0 60% 55%)' },
  { metric: 'Equity Value', value: 2630, fill: 'hsl(var(--accent))' }
];

const projects = [
  {
    id: 0,
    title: 'Leveraged Buyout (LBO) Case Study – Hilton Hotels',
    company: 'Hilton Hotels',
    sector: 'Private Equity / Hospitality',
    icon: Building2,
    isFeatured: true,
    summary: 'Built a comprehensive LBO model analyzing Blackstone\'s acquisition of Hilton Hotels, demonstrating value creation through operational improvement and deleveraging.',
    transactionOverview: [
      { label: 'Entry Equity Value', value: '~$18.5bn' },
      { label: 'Enterprise Value', value: '~$25.0bn' },
      { label: 'Entry Multiple', value: '12.5× LTM EBITDA' },
      { label: 'Exit Multiple', value: '8.0× EBITDA' },
      { label: 'Investment Horizon', value: '5 years' }
    ],
    capitalStructure: [
      { label: 'Total Debt at Entry', value: '~$6.6bn (~4.8× EBITDA)' },
      { label: 'Sponsor Equity', value: '~$5.5bn' }
    ],
    operatingAssumptions: [
      'Revenue growth driven by steady occupancy and pricing',
      'EBITDA margin expansion through operating leverage',
      'CapEx maintained at ~7% of revenue',
      'Working capital tightly controlled at ~3.3% of sales'
    ],
    returns: [
      { label: 'Exit Enterprise Value', value: '~$25.0bn', type: 'neutral' },
      { label: 'Sponsor Equity at Exit', value: '~$15.8bn', type: 'positive' },
      { label: 'MOIC', value: '~2.9×', type: 'positive' },
      { label: 'IRR', value: '~23.6%', type: 'positive' }
    ],
    insight: 'Despite multiple compression at exit, value creation is driven by EBITDA growth, cash flow–led deleveraging, and disciplined capital allocation. This reinforces the PE principle that operational performance and cash flow matter more than exit multiple expansion.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_lbo-modeling-hilton-activity-7421378895691718656-eOIA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-i-LYB1CFD27drBgEv2IkcEMEtXRny2UM',
    chartType: 'lbo'
  },
  {
    id: 1,
    title: 'Aegis Logistics – DCF Valuation',
    company: 'Aegis Logistics Ltd',
    sector: 'Oil & Gas / Infrastructure',
    icon: TrendingUp,
    summary: 'Built a conservative FCFF-based DCF model to estimate Aegis Logistics\' intrinsic value, incorporating risk-adjusted WACC for equity-heavy capital structure, commodity exposure, and India risk premium.',
    keyAssumptions: [
      { label: 'Revenue CAGR', value: '~7–9% (FY25E–FY30E)' },
      { label: 'FCFF CAGR', value: '~5.4%' },
      { label: 'WACC', value: '11.12%' },
      { label: 'Terminal Growth', value: '6.0–6.5%' },
      { label: 'Exit EBITDA Margin', value: '~16–17%' }
    ],
    keyOutputs: [
      { label: 'Intrinsic Value', value: '₹587/share', type: 'neutral' },
      { label: 'Market Price', value: '₹691/share', type: 'negative' },
      { label: 'Implied Premium', value: '~18% (1.18×)', type: 'negative' }
    ],
    insight: 'Aegis Logistics trades at a modest premium, with ~80% of enterprise value derived from terminal value. While free cash flows are stable and growing, valuation remains sensitive to WACC and long-term growth assumptions, limiting margin of safety at current prices.',
    linkedinUrl: 'https://www.linkedin.com/posts/adarshkumar-_aegis-logistic-dcf-activity-7426826006407106560-RGXp?utm_source=share&utm_medium=member_android&rcm=ACoAAD-i-LYB1CFD27drBgEv2IkcEMEtXRny2UM',
    oneDriveUrl: 'https://1drv.ms/f/c/b46469d9a9abd7cf/IgBX_P0kOERBTIQsEiWbv-h3AYoEjFMfYCIQ12fi_UrGeog?e=GC0osH',
    chartType: 'aegis-dcf'
  },
  {
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: 'Aura IPO Analysis',
    company: 'Aura (D2C Consumer Brand)',
    sector: 'Consumer / IPO',
    icon: TrendingUp,
    summary: 'IPO analysis evaluating financial trajectory, valuation methodologies, and recommended price band, with a focus on D2C-led margin expansion.',
    keyAssumptions: [
      { label: 'Revenue CAGR (FY22–24)', value: '~43%' },
      { label: 'EBITDA Margin', value: '7.5% → 12%' },
      { label: 'D2C Mix', value: '~68%' },
      { label: 'Valuation Approach', value: 'DCF + EV/EBITDA + P/E' }
    ],
    keyOutputs: [
      { label: 'Recommended Band', value: '₹115–₹140', type: 'neutral' },
      { label: 'DCF Value', value: '₹128', type: 'neutral' },
      { label: 'EV/EBITDA Value', value: '₹135', type: 'neutral' }
    ],
    insight: 'Strong margin expansion driven by D2C mix shift; valuation suggests moderate upside with execution and channel-mix risks.',
    linkedinUrl: 'https://www.linkedin.com',
    chartType: 'aura-ipo'
  },
  {
    id: 8,
    title: 'Pennar Industries – Equity Research',
    company: 'Pennar Industries Ltd',
    sector: 'Engineering / Steel Products',
    icon: BarChart3,
    summary: 'Equity research note covering revenue and margin trajectory, capital efficiency, segment mix, and DCF-based intrinsic value.',
    keyAssumptions: [
      { label: 'Revenue CAGR (FY21–25E)', value: '~19%' },
      { label: 'EBITDA Margin', value: '7.0% → 9.0%' },
      { label: 'ROCE (FY25E)', value: '~21.8%' },
      { label: 'WACC', value: '~12.5%' }
    ],
    keyOutputs: [
      { label: 'Intrinsic Value', value: '₹195/share', type: 'positive' },
      { label: 'Equity Value', value: '₹2,630 Cr', type: 'neutral' },
      { label: 'Net Debt', value: '₹420 Cr', type: 'neutral' }
    ],
    insight: 'Operating leverage is improving margins and cash flow generation has turned around, supporting a constructive view at current valuations.',
    linkedinUrl: 'https://www.linkedin.com',
    chartType: 'pennar'
  }
];

const Projects = () => {
  const renderChart = (chartType: string) => {
    switch (chartType) {
      case 'lbo':
        return (
          <div className="h-[320px] space-y-3">
            {/* Debt Paydown & EBITDA Growth Chart */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Debt Paydown vs EBITDA Growth ($bn)</p>
              <ResponsiveContainer width="100%" height={100}>
                <ComposedChart data={hiltonDebtEbitda}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '10px'
                    }}
                    formatter={(value, name) => [`$${value}bn`, name === 'debt' ? 'Debt' : 'EBITDA']}
                  />
                  <Bar dataKey="debt" fill="hsl(var(--primary))" name="Debt" radius={[2, 2, 0, 0]} />
                  <Line type="monotone" dataKey="ebitda" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="EBITDA" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            {/* Capital Structure at Entry */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Capital Structure at Entry ($bn)</p>
              <ResponsiveContainer width="100%" height={70}>
                <BarChart data={hiltonCapitalStructure} layout="vertical">
                  <XAxis type="number" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} width={70} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '10px'
                    }}
                    formatter={(value) => [`$${value}bn`, '']}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {hiltonCapitalStructure.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Returns Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <p className="text-[10px] text-muted-foreground">MOIC</p>
                <p className="text-lg font-bold text-accent">2.9×</p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-[10px] text-muted-foreground">IRR</p>
                <p className="text-lg font-bold text-primary">23.6%</p>
              </div>
              <div className="p-2 rounded-lg bg-muted border border-border text-center">
                <p className="text-[10px] text-muted-foreground">Exit Equity</p>
                <p className="text-lg font-bold text-foreground">$15.8bn</p>
              </div>
            </div>
          </div>
        );
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
          <div className="h-[320px] space-y-3">
            {/* DuPont Circles */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">DuPont Decomposition</p>
              <div className="flex items-center justify-center space-x-3 py-2">
                {britanniaRoeData.map((item, index) => (
                  <React.Fragment key={item.component}>
                    <div className="text-center">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground ${
                        index === 1 ? 'bg-accent' : 'bg-primary'
                      }`}>
                        {typeof item.value === 'number' && item.value < 10 ? `${item.value.toFixed(1)}×` : `${item.value}%`}
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">{item.component}</p>
                    </div>
                    {index < britanniaRoeData.length - 1 && (
                      <span className="text-lg text-muted-foreground font-bold">×</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* ROE Trend Chart */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">ROE Trend & Net Margin (%)</p>
              <ResponsiveContainer width="100%" height={90}>
                <ComposedChart data={britanniaDupontTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Bar dataKey="roe" fill="hsl(var(--primary))" name="ROE (%)" radius={[3, 3, 0, 0]} />
                  <Line type="monotone" dataKey="netMargin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="Net Margin (%)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-[10px] text-muted-foreground">ROE</p>
                <p className="text-lg font-bold text-primary">~45%</p>
              </div>
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <p className="text-[10px] text-muted-foreground">Net Margin</p>
                <p className="text-lg font-bold text-accent">12.4%</p>
              </div>
              <div className="p-2 rounded-lg bg-muted border border-border text-center">
                <p className="text-[10px] text-muted-foreground">Leverage</p>
                <p className="text-lg font-bold text-foreground">Low</p>
              </div>
            </div>
          </div>
        );
      case 'valuation':
        return (
          <div className="h-[320px] space-y-3">
            {/* Revenue Trend */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue (₹Cr) & Net Margin (%)</p>
              <ResponsiveContainer width="100%" height={100}>
                <ComposedChart data={britanniaRevenueTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} domain={[8, 15]} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" fill="hsl(var(--primary))" fillOpacity={0.15} stroke="hsl(var(--primary))" strokeWidth={2} name="Revenue (₹Cr)" />
                  <Line yAxisId="right" type="monotone" dataKey="netMargin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="Net Margin (%)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {/* Valuation Gap */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Intrinsic vs Market (₹/share)</p>
              <ResponsiveContainer width="100%" height={70}>
                <BarChart data={britanniaValuationData} layout="vertical">
                  <XAxis type="number" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis dataKey="metric" type="category" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} width={80} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(value) => [`₹${value}`, '']} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {britanniaValuationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-[10px] text-muted-foreground">Intrinsic</p>
                <p className="text-lg font-bold text-primary">₹1,780</p>
              </div>
              <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                <p className="text-[10px] text-muted-foreground">Market</p>
                <p className="text-lg font-bold text-destructive">₹5,700+</p>
              </div>
              <div className="p-2 rounded-lg bg-muted border border-border text-center">
                <p className="text-[10px] text-muted-foreground">WACC</p>
                <p className="text-lg font-bold text-foreground">13.8%</p>
              </div>
            </div>
          </div>
        );
      case 'itc-financial':
        return (
          <div className="h-[320px] space-y-3">
            {/* Revenue & Profitability */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue (₹Cr) & Margins (%)</p>
              <ResponsiveContainer width="100%" height={110}>
                <ComposedChart data={itcRevenueTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} domain={[15, 40]} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" fill="hsl(var(--primary))" fillOpacity={0.15} stroke="hsl(var(--primary))" strokeWidth={2} name="Revenue (₹Cr)" />
                  <Line yAxisId="right" type="monotone" dataKey="ebitdaMargin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="EBITDA Margin (%)" />
                  <Line yAxisId="right" type="monotone" dataKey="netMargin" stroke="hsl(210 40% 60%)" strokeWidth={2} dot={{ fill: 'hsl(210 40% 60%)', r: 3 }} name="Net Margin (%)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-2">
              {itcFinancialData.map((item, index) => (
                <div key={item.metric} className={`p-2 rounded-lg border ${
                  index % 2 === 0 ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'
                }`}>
                  <p className="text-[10px] text-muted-foreground">{item.metric}</p>
                  <p className={`text-lg font-bold ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                    {item.metric.includes('₹') ? `₹${(item.value / 1000).toFixed(0)}K Cr` : `${item.value}%`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'itc-segment':
        return (
          <div className="h-[320px] space-y-3">
            {/* Segment Pie */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue Mix by Segment (%)</p>
              <ResponsiveContainer width="100%" height={130}>
                <RechartsPie>
                  <Pie
                    data={itcSegmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={55}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {itcSegmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
            {/* P/E Comparison */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">P/E Valuation vs Sector</p>
              <ResponsiveContainer width="100%" height={60}>
                <BarChart data={itcValuationComparison} layout="vertical">
                  <XAxis type="number" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis dataKey="metric" type="category" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} width={80} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(value) => [`${value}×`, '']} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {itcValuationComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-[10px] text-muted-foreground">P/E Ratio</p>
                <p className="text-lg font-bold text-primary">~28×</p>
              </div>
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <p className="text-[10px] text-muted-foreground">Div. Yield</p>
                <p className="text-lg font-bold text-accent">4.2%</p>
              </div>
              <div className="p-2 rounded-lg bg-muted border border-border text-center">
                <p className="text-[10px] text-muted-foreground">Debt</p>
                <p className="text-lg font-bold text-foreground">Zero</p>
              </div>
            </div>
          </div>
        );
      case 'aegis-dcf':
        return (
          <div className="h-[320px] space-y-3">
            {/* FCFF Projections */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">FCFF Projections (₹Cr) – 5.4% CAGR</p>
              <ResponsiveContainer width="100%" height={90}>
                <ComposedChart data={aegisFCFFData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(value) => [`₹${value} Cr`, '']} />
                  <Bar dataKey="fcff" fill="hsl(var(--primary))" name="FCFF" radius={[3, 3, 0, 0]} />
                  <Line type="monotone" dataKey="fcff" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {/* Revenue & EBITDA Margin */}
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue (₹Cr) & EBITDA Margin (%)</p>
              <ResponsiveContainer width="100%" height={90}>
                <ComposedChart data={aegisRevenueEbitda}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} domain={[10, 20]} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" fill="hsl(var(--primary))" fillOpacity={0.15} stroke="hsl(var(--primary))" strokeWidth={2} name="Revenue (₹Cr)" />
                  <Line yAxisId="right" type="monotone" dataKey="ebitdaMargin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="EBITDA Margin (%)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            {/* Valuation Metrics */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-[10px] text-muted-foreground">Intrinsic Value</p>
                <p className="text-lg font-bold text-primary">₹587</p>
              </div>
              <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                <p className="text-[10px] text-muted-foreground">Market Price</p>
                <p className="text-lg font-bold text-destructive">₹691</p>
              </div>
              <div className="p-2 rounded-lg bg-muted border border-border text-center">
                <p className="text-[10px] text-muted-foreground">WACC</p>
                <p className="text-lg font-bold text-foreground">11.12%</p>
              </div>
            </div>
          </div>
        );
      case 'aura-ipo':
        return (
          <div className="h-[320px] space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue (₹Cr) & Growth (%)</p>
              <ResponsiveContainer width="100%" height={90}>
                <ComposedChart data={auraRevenueGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Bar yAxisId="left" dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" radius={[3, 3, 0, 0]} />
                  <Line yAxisId="right" type="monotone" dataKey="growth" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} name="Growth %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">EBITDA Margin (%)</p>
                <ResponsiveContainer width="100%" height={80}>
                  <ComposedChart data={auraEbitdaMargin}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} domain={[5, 14]} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(v) => [`${v}%`, '']} />
                    <Line type="monotone" dataKey="margin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))', r: 3 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">Revenue Mix</p>
                <ResponsiveContainer width="100%" height={80}>
                  <RechartsPie>
                    <Pie data={auraRevenueMix} cx="50%" cy="50%" innerRadius={20} outerRadius={35} dataKey="value" label={({ name, value }) => `${name}: ${value}%`} labelLine={false} style={{ fontSize: 8 }}>
                      {auraRevenueMix.map((e, i) => <Cell key={i} fill={e.fill} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Valuation Comparison (₹/share)</p>
              <ResponsiveContainer width="100%" height={70}>
                <BarChart data={auraValuation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="method" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(v) => [`₹${v}`, '']} />
                  <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                    {auraValuation.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-accent mt-1 font-medium text-center">Recommended Band: ₹115–₹140</p>
            </div>
          </div>
        );
      case 'pennar':
        return (
          <div className="h-[320px] space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Revenue & EBITDA (₹Cr)</p>
              <ResponsiveContainer width="100%" height={90}>
                <BarChart data={pennarRevEbitda}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  <Legend wrapperStyle={{ fontSize: 8 }} />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="ebitda" fill="hsl(var(--accent))" name="EBITDA" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">Margins (%)</p>
                <ResponsiveContainer width="100%" height={80}>
                  <ComposedChart data={pennarMargins}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(v) => [`${v}%`, '']} />
                    <Line type="monotone" dataKey="ebitdaMargin" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 2 }} name="EBITDA %" />
                    <Line type="monotone" dataKey="patMargin" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ r: 2 }} name="PAT %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">ROE & ROCE (%)</p>
                <ResponsiveContainer width="100%" height={80}>
                  <ComposedChart data={pennarReturns}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(v) => [`${v}%`, '']} />
                    <Line type="monotone" dataKey="roe" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 2 }} name="ROE" />
                    <Line type="monotone" dataKey="roce" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ r: 2 }} name="ROCE" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">Segment Mix (%)</p>
                <ResponsiveContainer width="100%" height={80}>
                  <RechartsPie>
                    <Pie data={pennarSegments} cx="50%" cy="50%" innerRadius={18} outerRadius={35} dataKey="value" label={({ value }) => `${value}%`} labelLine={false} style={{ fontSize: 7 }}>
                      {pennarSegments.map((e, i) => <Cell key={i} fill={e.fill} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground mb-1 font-medium">DCF Bridge (₹Cr)</p>
                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={pennarDcf} layout="vertical">
                    <XAxis type="number" tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis dataKey="metric" type="category" tick={{ fontSize: 7, fill: 'hsl(var(--muted-foreground))' }} width={70} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '10px' }} formatter={(v) => [`₹${v} Cr`, '']} />
                    <Bar dataKey="value" radius={[0, 3, 3, 0]}>
                      {pennarDcf.map((e, i) => <Cell key={i} fill={e.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="text-[10px] text-accent font-medium text-center">Intrinsic Value: ₹195/share · ROCE ~21.8%</p>
          </div>
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
            const isFeatured = (project as any).isFeatured;
            
            return (
              <Card key={project.id} className={`border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden ${isFeatured ? 'ring-2 ring-accent/30' : ''}`}>
                {isFeatured && (
                  <div className="bg-accent/10 border-b border-accent/20 px-6 py-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">🔹 Featured Project (Deep Dive)</span>
                  </div>
                )}
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Chart Section */}
                  <div className={`lg:col-span-2 p-6 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border ${isFeatured ? 'lg:col-span-2' : ''}`}>
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

                      {/* LBO Specific Sections */}
                      {(project as any).transactionOverview && (
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2">Transaction Overview</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {(project as any).transactionOverview.map((item: any) => (
                              <div key={item.label} className="text-sm">
                                <span className="text-muted-foreground">{item.label}: </span>
                                <span className="font-medium text-foreground">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(project as any).capitalStructure && (
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2">Capital Structure</p>
                          <div className="grid grid-cols-2 gap-2">
                            {(project as any).capitalStructure.map((item: any) => (
                              <div key={item.label} className="text-sm">
                                <span className="text-muted-foreground">{item.label}: </span>
                                <span className="font-medium text-foreground">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(project as any).operatingAssumptions && (
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2">Operating Assumptions</p>
                          <ul className="space-y-1">
                            {(project as any).operatingAssumptions.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <TrendingUp className="w-3 h-3 text-accent flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(project as any).returns && (
                        <div className="flex flex-wrap gap-2">
                          {(project as any).returns.map((item: any) => (
                            <Badge 
                              key={item.label} 
                              variant={item.type === 'positive' ? 'default' : item.type === 'negative' ? 'destructive' : 'secondary'}
                              className={`text-xs ${item.type === 'positive' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                            >
                              {item.label}: {item.value}
                            </Badge>
                          ))}
                        </div>
                      )}

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

                      {/* Project CTAs */}
                      <div className="flex flex-wrap gap-2">
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
                            {project.linkedinUrl.endsWith('.pdf') ? 'View Full Report (PDF)' : project.linkedinUrl.includes('1drv.ms') ? 'View Full Project (OneDrive)' : 'View Full Project on LinkedIn'}
                          </a>
                        </Button>
                        {(project as any).oneDriveUrl && (
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
                              href={(project as any).oneDriveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Full Project (OneDrive)
                            </a>
                          </Button>
                        )}
                      </div>
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
