import { useState } from "react";
import { Plus, FileText, Calendar, Award, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable } from "@/components/ui/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Exam {
  id: string;
  name: string;
  subject: string;
  class: string;
  date: string;
  duration: string;
  totalMarks: number;
  status: "upcoming" | "ongoing" | "completed";
}

interface Result {
  id: string;
  studentName: string;
  rollNo: string;
  exam: string;
  subject: string;
  marks: number;
  totalMarks: number;
  grade: string;
  percentage: number;
}

const exams: Exam[] = [
  {
    id: "1",
    name: "Mid-Term Examination",
    subject: "Mathematics",
    class: "Class 10-A",
    date: "Jan 25, 2025",
    duration: "3 hours",
    totalMarks: 100,
    status: "upcoming",
  },
  {
    id: "2",
    name: "Unit Test 3",
    subject: "Physics",
    class: "Class 11-Science",
    date: "Jan 20, 2025",
    duration: "1.5 hours",
    totalMarks: 50,
    status: "ongoing",
  },
  {
    id: "3",
    name: "Final Examination",
    subject: "English",
    class: "Class 9-A",
    date: "Jan 10, 2025",
    duration: "3 hours",
    totalMarks: 100,
    status: "completed",
  },
];

const results: Result[] = [
  {
    id: "1",
    studentName: "Emma Watson",
    rollNo: "1001",
    exam: "Unit Test 2",
    subject: "Mathematics",
    marks: 45,
    totalMarks: 50,
    grade: "A+",
    percentage: 90,
  },
  {
    id: "2",
    studentName: "James Smith",
    rollNo: "1002",
    exam: "Unit Test 2",
    subject: "Mathematics",
    marks: 42,
    totalMarks: 50,
    grade: "A",
    percentage: 84,
  },
  {
    id: "3",
    studentName: "Sophie Johnson",
    rollNo: "1003",
    exam: "Unit Test 2",
    subject: "Mathematics",
    marks: 38,
    totalMarks: 50,
    grade: "B+",
    percentage: 76,
  },
];

const examColumns = [
  { key: "name", header: "Exam Name" },
  { key: "subject", header: "Subject" },
  { key: "class", header: "Class" },
  { key: "date", header: "Date" },
  { key: "duration", header: "Duration" },
  {
    key: "status",
    header: "Status",
    render: (exam: Exam) => (
      <StatusBadge
        status={
          exam.status === "completed"
            ? "success"
            : exam.status === "ongoing"
            ? "warning"
            : "info"
        }
      >
        {exam.status}
      </StatusBadge>
    ),
  },
];

const resultColumns = [
  { key: "studentName", header: "Student" },
  { key: "rollNo", header: "Roll No" },
  { key: "exam", header: "Exam" },
  { key: "subject", header: "Subject" },
  {
    key: "marks",
    header: "Marks",
    render: (result: Result) => (
      <span className="font-medium">
        {result.marks}/{result.totalMarks}
      </span>
    ),
  },
  {
    key: "grade",
    header: "Grade",
    render: (result: Result) => (
      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
        {result.grade}
      </span>
    ),
  },
  {
    key: "percentage",
    header: "Percentage",
    render: (result: Result) => (
      <div className="flex items-center gap-2">
        <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${result.percentage}%` }}
          />
        </div>
        <span className="text-sm font-medium">{result.percentage}%</span>
      </div>
    ),
  },
];

export default function Exams() {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="page-header mb-0">
            <h1 className="page-title">Exams & Results</h1>
            <p className="page-subtitle">Manage examinations and view results</p>
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Create Exam
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-info-light flex items-center justify-center">
              <Calendar size={24} className="text-info" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground">Upcoming</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-warning-light flex items-center justify-center">
              <FileText size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
              <Award size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">28</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="card-elevated p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">78%</p>
              <p className="text-sm text-muted-foreground">Avg. Score</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="exams" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="exams" className="data-[state=active]:bg-card">
              Examinations
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-card">
              Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exams">
            <DataTable columns={examColumns} data={exams} />
          </TabsContent>

          <TabsContent value="results">
            <DataTable columns={resultColumns} data={results} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
