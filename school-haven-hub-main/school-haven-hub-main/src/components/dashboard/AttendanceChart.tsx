import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 92, absent: 8 },
  { name: "Tue", present: 88, absent: 12 },
  { name: "Wed", present: 95, absent: 5 },
  { name: "Thu", present: 90, absent: 10 },
  { name: "Fri", present: 85, absent: 15 },
];

export function AttendanceChart() {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-display font-semibold text-lg mb-4">Weekly Attendance</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Bar 
              dataKey="present" 
              fill="hsl(var(--success))" 
              radius={[4, 4, 0, 0]}
              name="Present %"
            />
            <Bar 
              dataKey="absent" 
              fill="hsl(var(--destructive))" 
              radius={[4, 4, 0, 0]}
              name="Absent %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
