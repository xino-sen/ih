import { Users, GraduationCap, BookOpen, DollarSign } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    icon: <Users size={24} />,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Total Teachers",
    value: "156",
    icon: <GraduationCap size={24} />,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Active Classes",
    value: "48",
    icon: <BookOpen size={24} />,
    trend: { value: 5, isPositive: true },
  },
  {
    title: "Fee Collection",
    value: "$284,500",
    icon: <DollarSign size={24} />,
    trend: { value: 15, isPositive: true },
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's what's happening at your school.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`animate-slide-up stagger-${index + 1}`}
              style={{ opacity: 0 }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AttendanceChart />
          <RecentActivity />
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingEvents />
        </div>
      </div>
    </DashboardLayout>
  );
}
