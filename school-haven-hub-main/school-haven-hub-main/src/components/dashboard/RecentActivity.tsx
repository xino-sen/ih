import { cn } from "@/lib/utils";
import { UserPlus, CreditCard, ClipboardCheck, Award } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "student",
    message: "New student Emma Watson enrolled in Class 10A",
    time: "5 minutes ago",
    icon: UserPlus,
    color: "text-info bg-info-light",
  },
  {
    id: 2,
    type: "payment",
    message: "Fee payment received from John Smith - $1,200",
    time: "15 minutes ago",
    icon: CreditCard,
    color: "text-success bg-success-light",
  },
  {
    id: 3,
    type: "attendance",
    message: "Attendance marked for Class 8B - 95% present",
    time: "1 hour ago",
    icon: ClipboardCheck,
    color: "text-warning bg-warning-light",
  },
  {
    id: 4,
    type: "exam",
    message: "Final exam results published for Mathematics",
    time: "2 hours ago",
    icon: Award,
    color: "text-primary bg-primary/10",
  },
];

export function RecentActivity() {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-display font-semibold text-lg mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className={cn("flex items-center justify-center w-10 h-10 rounded-full", activity.color)}>
              <activity.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
