import { useState } from "react";
import { Calendar, Check, X, Clock } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface StudentAttendance {
  id: string;
  name: string;
  rollNo: string;
  status: "present" | "absent" | "late" | null;
}

const studentsAttendance: StudentAttendance[] = [
  { id: "1", name: "Emma Watson", rollNo: "1001", status: "present" },
  { id: "2", name: "James Smith", rollNo: "1002", status: "present" },
  { id: "3", name: "Sophie Johnson", rollNo: "1003", status: "absent" },
  { id: "4", name: "Michael Brown", rollNo: "1004", status: "late" },
  { id: "5", name: "Olivia Davis", rollNo: "1005", status: "present" },
  { id: "6", name: "William Miller", rollNo: "1006", status: null },
  { id: "7", name: "Ava Wilson", rollNo: "1007", status: null },
  { id: "8", name: "Alexander Moore", rollNo: "1008", status: null },
];

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [students, setStudents] = useState(studentsAttendance);

  const handleStatusChange = (studentId: string, status: "present" | "absent" | "late") => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, status } : s))
    );
  };

  const presentCount = students.filter((s) => s.status === "present").length;
  const absentCount = students.filter((s) => s.status === "absent").length;
  const lateCount = students.filter((s) => s.status === "late").length;
  const unmarkedCount = students.filter((s) => s.status === null).length;

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Attendance</h1>
          <p className="page-subtitle">Track and manage daily attendance</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-muted-foreground" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input-field md:w-48"
            />
          </div>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="10-A">Class 10-A</option>
            <option value="10-B">Class 10-B</option>
            <option value="9-A">Class 9-A</option>
            <option value="11-Science">Class 11-Science</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
              <Check size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{presentCount}</p>
              <p className="text-sm text-muted-foreground">Present</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-destructive-light flex items-center justify-center">
              <X size={24} className="text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{absentCount}</p>
              <p className="text-sm text-muted-foreground">Absent</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-warning-light flex items-center justify-center">
              <Clock size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{lateCount}</p>
              <p className="text-sm text-muted-foreground">Late</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">?</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{unmarkedCount}</p>
              <p className="text-sm text-muted-foreground">Unmarked</p>
            </div>
          </div>
        </div>

        {/* Attendance List */}
        <div className="card-elevated p-6">
          <h3 className="font-display font-semibold text-lg mb-4">Mark Attendance</h3>
          <div className="space-y-3">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {student.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-sm text-muted-foreground">Roll No: {student.rollNo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStatusChange(student.id, "present")}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      student.status === "present"
                        ? "bg-success text-success-foreground"
                        : "bg-muted hover:bg-success-light hover:text-success"
                    )}
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={() => handleStatusChange(student.id, "absent")}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      student.status === "absent"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-muted hover:bg-destructive-light hover:text-destructive"
                    )}
                  >
                    <X size={18} />
                  </button>
                  <button
                    onClick={() => handleStatusChange(student.id, "late")}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      student.status === "late"
                        ? "bg-warning text-warning-foreground"
                        : "bg-muted hover:bg-warning-light hover:text-warning"
                    )}
                  >
                    <Clock size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button className="btn-primary">Save Attendance</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
