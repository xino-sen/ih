import { cn } from "@/lib/utils";

type StatusType = "success" | "warning" | "error" | "info";

interface StatusBadgeProps {
  status: StatusType;
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  return (
    <span className={cn("status-badge", status, className)}>
      {children}
    </span>
  );
}
