import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, BarChart3, PieChart, LineChart, Building2, Briefcase } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  Legend,
  ComposedChart,
  Line
} from 'recharts';

const ITCEquityReport = () => {
  // Revenue & EBITDA Data (FY values in ₹ Cr)
  const financialData = [
    { year: 'FY20', revenue: 49388, ebitda: 18234, ebitdaMargin: 36.9 },
    { year: 'FY21', revenue: 49257, ebitda: 17892, ebitdaMargin: 36.3 },
    { year: 'FY22', revenue: 60645, ebitda: 20156, ebitdaMargin: 33.2 },
    { year: 'FY23', revenue: 70919, ebitda: 23891, ebitdaMargin: 33.7 },
    { year: 'FY24', revenue: 76471, ebitda: 26012, ebitdaMargin: 34.0 },
  ];

  // Segment Revenue Contribution
  const segmentData = [
    { name: 'FMCG - Cigarettes', value: 42, color: '#0ea5e9' },
    { name: 'FMCG - Others', value: 22, color: '#22c55e' },
    { name: 'Hotels', value: 8, color: '#f59e0b' },
    { name: 'Agri Business', value: 18, color: '#8b5cf6' },
    { name: 'Paperboards', value: 10, color: '#ec4899' },
  ];

  // Segment EBIT Margins
  const segmentMarginData = [
    { segment: 'Cigarettes', margin: 72.4 },
    { segment: 'FMCG Others', margin: 8.2 },
    { segment: 'Hotels', margin: 28.5 },
    { segment: 'Agri Business', margin: 9.1 },
    { segment: 'Paperboards', margin: 18.3 },
  ];

  // Key Financial Ratios
  const ratioData = [
    { metric: 'Return on Equity (ROE)', fy22: '24.8%', fy23: '27.1%', fy24: '28.4%' },
    { metric: 'Return on Capital Employed (ROCE)', fy22: '33.2%', fy23: '35.8%', fy24: '37.1%' },
    { metric: 'Net Profit Margin', fy22: '26.1%', fy23: '27.8%', fy24: '28.2%' },
    { metric: 'Debt-to-Equity', fy22: '0.00', fy23: '0.00', fy24: '0.00' },
    { metric: 'Current Ratio', fy22: '1.82', fy23: '1.91', fy24: '2.04' },
    { metric: 'Asset Turnover', fy22: '0.72', fy23: '0.78', fy24: '0.81' },
  ];

  // Valuation Multiples Comparison
  const valuationData = [
    { company: 'ITC Ltd', pe: 28.4, evEbitda: 18.2, pbv: 7.8 },
    { company: 'Hindustan Unilever', pe: 58.2, evEbitda: 42.1, pbv: 11.2 },
    { company: 'Nestle India', pe: 72.5, evEbitda: 48.3, pbv: 64.1 },
    { company: 'Britannia', pe: 52.8, evEbitda: 35.6, pbv: 28.4 },
    { company: 'Sector Average', pe: 52.9, evEbitda: 36.1, pbv: 27.9 },
  ];

  const growthDrivers = [
    'FMCG Others segment nearing profitability breakeven with improving margins',
    'Premium cigarette portfolio shift driving higher realizations per stick',
    'Hotels segment benefiting from post-pandemic travel recovery',
    'Agri-tech investments strengthening farm-to-fork supply chain',
    'Strong free cash flow generation supporting dividend consistency'
  ];

  const keyRisks = [
    'Regulatory overhang on tobacco taxation and advertising restrictions',
    'FMCG competition from established players with stronger distribution',
    'Commodity price volatility impacting agri-business margins',
    'ESG-driven fund outflows due to tobacco portfolio exposure',
    'Slower-than-expected FMCG margin expansion'
  ];

  return (
    <section id="itc-report" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Report Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" className="text-xs font-medium">EQUITY RESEARCH</Badge>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Initiation Coverage</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            ITC Ltd – Equity Research Report
          </h2>
          <p className="text-muted-foreground">
            NSE: ITC | BSE: 500875 | Sector: FMCG – Diversified
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">CMP:</span>
              <span className="font-semibold text-foreground">₹467</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Target Price:</span>
              <span className="font-semibold text-green-600">₹540</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Upside:</span>
              <span className="font-semibold text-green-600">+15.6%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Rating:</span>
              <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">BUY</Badge>
            </div>
          </div>
        </div>

        {/* Investment Summary */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Target className="w-5 h-5 text-primary" />
              Investment Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ITC represents a compelling value play in the Indian FMCG space, trading at a significant discount to peers despite superior return ratios and a debt-free balance sheet. The company's cigarette business remains a cash cow with 70%+ EBIT margins, funding aggressive FMCG expansion. With the FMCG-Others segment approaching profitability inflection and Hotels witnessing post-COVID recovery, we see multiple re-rating catalysts over the next 12-18 months.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">28.4%</p>
                <p className="text-sm text-muted-foreground">ROE (FY24)</p>
              </div>
              <div className="bg-green-500/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">Zero Debt</p>
                <p className="text-sm text-muted-foreground">Balance Sheet Strength</p>
              </div>
              <div className="bg-accent/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent">4.2%</p>
                <p className="text-sm text-muted-foreground">Dividend Yield</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Building2 className="w-5 h-5 text-primary" />
              Business Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ITC is India's leading diversified conglomerate with a portfolio spanning FMCG (cigarettes and non-cigarette products), Hotels, Paperboards & Packaging, and Agri-Business. The company holds dominant market share in the Indian cigarette industry (~80%) and has built significant FMCG brands including Aashirvaad, Sunfeast, Bingo!, and Classmate. Strategic diversification has reduced cigarette revenue dependency from 65% (FY15) to 42% (FY24), while maintaining industry-leading profitability metrics.
            </p>
          </CardContent>
        </Card>

        {/* Segment Analysis with Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Breakdown Pie */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <PieChart className="w-5 h-5 text-primary" />
                Segment Revenue Mix (FY24)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Segment EBIT Margins Bar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="w-5 h-5 text-primary" />
                Segment EBIT Margins (%)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={segmentMarginData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis type="number" domain={[0, 80]} tickFormatter={(v) => `${v}%`} />
                    <YAxis dataKey="segment" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="margin" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Performance Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <LineChart className="w-5 h-5 text-primary" />
              Financial Performance Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" tickFormatter={(v) => `₹${(v/1000).toFixed(0)}K Cr`} />
                  <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => `${v}%`} domain={[30, 40]} />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (name === 'ebitdaMargin') return [`${value}%`, 'EBITDA Margin'];
                      return [`₹${value.toLocaleString()} Cr`, name === 'revenue' ? 'Revenue' : 'EBITDA'];
                    }}
                  />
                  <Legend />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    name="Revenue"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.2}
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                  <Bar yAxisId="left" dataKey="ebitda" name="EBITDA" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ebitdaMargin"
                    name="EBITDA Margin"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ fill: '#22c55e', r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Ratio Analysis Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BarChart3 className="w-5 h-5 text-primary" />
              Key Financial Ratios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Metric</TableHead>
                    <TableHead className="text-center">FY22</TableHead>
                    <TableHead className="text-center">FY23</TableHead>
                    <TableHead className="text-center">FY24</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ratioData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.metric}</TableCell>
                      <TableCell className="text-center">{row.fy22}</TableCell>
                      <TableCell className="text-center">{row.fy23}</TableCell>
                      <TableCell className="text-center font-semibold text-primary">{row.fy24}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Valuation Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TrendingUp className="w-5 h-5 text-primary" />
              Peer Valuation Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Company</TableHead>
                    <TableHead className="text-center">P/E (x)</TableHead>
                    <TableHead className="text-center">EV/EBITDA (x)</TableHead>
                    <TableHead className="text-center">P/BV (x)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {valuationData.map((row, index) => (
                    <TableRow key={index} className={row.company === 'ITC Ltd' ? 'bg-primary/5' : row.company === 'Sector Average' ? 'bg-muted/50 font-medium' : ''}>
                      <TableCell className={row.company === 'ITC Ltd' ? 'font-semibold text-primary' : 'font-medium'}>
                        {row.company}
                      </TableCell>
                      <TableCell className="text-center">{row.pe}x</TableCell>
                      <TableCell className="text-center">{row.evEbitda}x</TableCell>
                      <TableCell className="text-center">{row.pbv}x</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ITC trades at a ~46% discount to sector average P/E despite superior ROE and debt-free status, indicating significant valuation headroom.
            </p>
          </CardContent>
        </Card>

        {/* Growth Drivers & Risks */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-green-600">
                <TrendingUp className="w-5 h-5" />
                Growth Catalysts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {growthDrivers.map((driver, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{driver}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-amber-600">
                <AlertTriangle className="w-5 h-5" />
                Key Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyRisks.map((risk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{risk}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Investment Conclusion */}
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Briefcase className="w-5 h-5 text-primary" />
              Investment Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ITC offers an attractive risk-reward profile for long-term investors seeking exposure to India's consumption story. The stock's valuation discount to FMCG peers is unwarranted given its improving business mix, best-in-class return ratios, and consistent dividend track record. We initiate coverage with a <strong className="text-foreground">BUY</strong> rating and a 12-month target price of <strong className="text-green-600">₹540</strong>, implying ~16% upside from current levels.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 border">
                <p className="text-sm text-muted-foreground mb-1">Current Market Price</p>
                <p className="text-xl font-bold text-foreground">₹467</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-green-500/30">
                <p className="text-sm text-muted-foreground mb-1">Target Price (12M)</p>
                <p className="text-xl font-bold text-green-600">₹540</p>
              </div>
              <div className="bg-background rounded-lg p-4 border">
                <p className="text-sm text-muted-foreground mb-1">Recommendation</p>
                <Badge className="bg-green-500 text-white text-lg px-3 py-1">BUY</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground/60 mt-8 text-center">
          This report is for academic and portfolio demonstration purposes only. It does not constitute investment advice. Data sources include company filings, Screener.in, and industry reports. Analysis conducted independently.
        </p>
      </div>
    </section>
  );
};

export default ITCEquityReport;
