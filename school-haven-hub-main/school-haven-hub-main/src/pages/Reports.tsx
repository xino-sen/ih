import { BarChart3, TrendingUp, Download, FileText, Users, DollarSign } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const attendanceData = [
  { month: "Sep", rate: 94 },
  { month: "Oct", rate: 92 },
  { month: "Nov", rate: 88 },
  { month: "Dec", rate: 91 },
  { month: "Jan", rate: 93 },
];

const feeCollectionData = [
  { month: "Sep", amount: 45000 },
  { month: "Oct", amount: 52000 },
  { month: "Nov", amount: 48000 },
  { month: "Dec", amount: 58000 },
  { month: "Jan", amount: 62000 },
];

const gradeDistribution = [
  { name: "A+", value: 25, color: "hsl(142, 76%, 36%)" },
  { name: "A", value: 35, color: "hsl(199, 89%, 48%)" },
  { name: "B", value: 25, color: "hsl(38, 92%, 50%)" },
  { name: "C", value: 10, color: "hsl(0, 84%, 60%)" },
  { name: "D", value: 5, color: "hsl(215, 16%, 47%)" },
];

const reports = [
  {
    id: "1",
    name: "Monthly Attendance Report",
    description: "Detailed attendance statistics for all classes",
    icon: Users,
    type: "attendance",
  },
  {
    id: "2",
    name: "Academic Performance Report",
    description: "Student grades and performance analysis",
    icon: TrendingUp,
    type: "academic",
  },
  {
    id: "3",
    name: "Fee Collection Report",
    description: "Financial summary and pending payments",
    icon: DollarSign,
    type: "financial",
  },
  {
    id: "4",
    name: "Teacher Workload Report",
    description: "Teaching hours and class assignments",
    icon: FileText,
    type: "staff",
  },
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">View insights and generate reports</p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Trend */}
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg">Attendance Trend</h3>
              <select className="input-field w-32 text-sm py-1.5">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={[80, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Grade Distribution */}
          <div className="card-elevated p-6">
            <h3 className="font-display font-semibold text-lg mb-6">Grade Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gradeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {gradeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {gradeDistribution.map((grade) => (
                <div key={grade.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: grade.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {grade.name}: {grade.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Collection */}
          <div className="card-elevated p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg">Fee Collection Overview</h3>
              <button className="btn-secondary text-sm">
                <Download size={16} />
                Export
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={feeCollectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Collection"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(var(--success))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Available Reports */}
        <div className="mb-8">
          <h3 className="font-display font-semibold text-lg mb-4">Available Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="card-elevated p-4 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <report.icon size={20} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{report.name}</h4>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                </div>
                <button className="w-full mt-4 btn-ghost text-sm flex items-center justify-center gap-2">
                  <Download size={14} />
                  Generate Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
