import { useState } from "react";
import { Plus, MoreVertical, Mail, Phone } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SearchInput } from "@/components/ui/SearchInput";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  class: string;
  section: string;
  rollNo: string;
  status: "active" | "inactive";
  avatar?: string;
}

const students: Student[] = [
  {
    id: "1",
    name: "Emma Watson",
    email: "emma.watson@school.edu",
    phone: "+1 234 567 8901",
    class: "10",
    section: "A",
    rollNo: "1001",
    status: "active",
  },
  {
    id: "2",
    name: "James Smith",
    email: "james.smith@school.edu",
    phone: "+1 234 567 8902",
    class: "10",
    section: "B",
    rollNo: "1002",
    status: "active",
  },
  {
    id: "3",
    name: "Sophie Johnson",
    email: "sophie.johnson@school.edu",
    phone: "+1 234 567 8903",
    class: "9",
    section: "A",
    rollNo: "903",
    status: "active",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@school.edu",
    phone: "+1 234 567 8904",
    class: "11",
    section: "C",
    rollNo: "1104",
    status: "inactive",
  },
  {
    id: "5",
    name: "Olivia Davis",
    email: "olivia.davis@school.edu",
    phone: "+1 234 567 8905",
    class: "8",
    section: "A",
    rollNo: "805",
    status: "active",
  },
];

export default function Students() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNo.includes(search)
  );

  const columns = [
    {
      key: "name",
      header: "Student",
      render: (student: Student) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={student.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {student.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{student.name}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Mail size={12} /> {student.email}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "phone",
      header: "Phone",
      render: (student: Student) => (
        <span className="flex items-center gap-1 text-muted-foreground">
          <Phone size={14} /> {student.phone}
        </span>
      ),
    },
    {
      key: "class",
      header: "Class",
      render: (student: Student) => (
        <span className="font-medium">
          {student.class}-{student.section}
        </span>
      ),
    },
    {
      key: "rollNo",
      header: "Roll No",
    },
    {
      key: "status",
      header: "Status",
      render: (student: Student) => (
        <StatusBadge status={student.status === "active" ? "success" : "error"}>
          {student.status}
        </StatusBadge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: (student: Student) => (
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 hover:bg-muted rounded-lg">
            <MoreVertical size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit Student</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      className: "w-12",
    },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="page-header mb-0">
            <h1 className="page-title">Students</h1>
            <p className="page-subtitle">Manage all student records and information</p>
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Add Student
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchInput
            placeholder="Search students by name, email, or roll number..."
            value={search}
            onChange={setSearch}
            className="md:w-96"
          />
          <select className="input-field md:w-40">
            <option value="">All Classes</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
          <select className="input-field md:w-40">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Table */}
        <DataTable columns={columns} data={filteredStudents} />

        {/* Pagination placeholder */}
        <div className="flex items-center justify-between mt-6 px-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStudents.length} of {students.length} students
          </p>
          <div className="flex gap-2">
            <button className="btn-ghost text-sm">Previous</button>
            <button className="btn-primary text-sm">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
