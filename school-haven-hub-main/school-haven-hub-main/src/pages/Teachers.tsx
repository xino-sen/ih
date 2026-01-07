import { useState } from "react";
import { Plus, MoreVertical, Mail, Phone, BookOpen } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SearchInput } from "@/components/ui/SearchInput";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  experience: string;
  status: "active" | "on-leave";
  avatar?: string;
}

const teachers: Teacher[] = [
  {
    id: "1",
    name: "Dr. Sarah Miller",
    email: "sarah.miller@school.edu",
    phone: "+1 234 567 8901",
    subject: "Mathematics",
    department: "Science",
    experience: "12 years",
    status: "active",
  },
  {
    id: "2",
    name: "Prof. John Anderson",
    email: "john.anderson@school.edu",
    phone: "+1 234 567 8902",
    subject: "Physics",
    department: "Science",
    experience: "8 years",
    status: "active",
  },
  {
    id: "3",
    name: "Ms. Emily Clark",
    email: "emily.clark@school.edu",
    phone: "+1 234 567 8903",
    subject: "English Literature",
    department: "Humanities",
    experience: "5 years",
    status: "on-leave",
  },
  {
    id: "4",
    name: "Mr. Robert Wilson",
    email: "robert.wilson@school.edu",
    phone: "+1 234 567 8904",
    subject: "Chemistry",
    department: "Science",
    experience: "15 years",
    status: "active",
  },
  {
    id: "5",
    name: "Mrs. Jennifer Taylor",
    email: "jennifer.taylor@school.edu",
    phone: "+1 234 567 8905",
    subject: "History",
    department: "Humanities",
    experience: "10 years",
    status: "active",
  },
];

export default function Teachers() {
  const [search, setSearch] = useState("");

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.email.toLowerCase().includes(search.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="page-header mb-0">
            <h1 className="page-title">Teachers</h1>
            <p className="page-subtitle">Manage teacher profiles and assignments</p>
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Add Teacher
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchInput
            placeholder="Search teachers by name, email, or subject..."
            value={search}
            onChange={setSearch}
            className="md:w-96"
          />
          <select className="input-field md:w-48">
            <option value="">All Departments</option>
            <option value="science">Science</option>
            <option value="humanities">Humanities</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`card-elevated p-6 animate-slide-up stagger-${(index % 4) + 1}`}
              style={{ opacity: 0 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={teacher.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {teacher.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.department}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 hover:bg-muted rounded-lg">
                    <MoreVertical size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen size={16} className="text-primary" />
                  <span>{teacher.subject}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} />
                  <span className="truncate">{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={16} />
                  <span>{teacher.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Experience: <span className="font-medium text-foreground">{teacher.experience}</span>
                </span>
                <StatusBadge status={teacher.status === "active" ? "success" : "warning"}>
                  {teacher.status === "active" ? "Active" : "On Leave"}
                </StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
