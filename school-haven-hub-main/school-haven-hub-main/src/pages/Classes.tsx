import { useState } from "react";
import { Plus, Users, Clock, BookOpen, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SearchInput } from "@/components/ui/SearchInput";
import { cn } from "@/lib/utils";

interface ClassInfo {
  id: string;
  name: string;
  section: string;
  teacher: string;
  students: number;
  subjects: string[];
  schedule: string;
  room: string;
}

const classes: ClassInfo[] = [
  {
    id: "1",
    name: "Class 10",
    section: "A",
    teacher: "Dr. Sarah Miller",
    students: 35,
    subjects: ["Mathematics", "Physics", "Chemistry", "English", "History"],
    schedule: "8:00 AM - 2:00 PM",
    room: "Room 101",
  },
  {
    id: "2",
    name: "Class 10",
    section: "B",
    teacher: "Prof. John Anderson",
    students: 32,
    subjects: ["Mathematics", "Physics", "Chemistry", "English", "Geography"],
    schedule: "8:00 AM - 2:00 PM",
    room: "Room 102",
  },
  {
    id: "3",
    name: "Class 9",
    section: "A",
    teacher: "Ms. Emily Clark",
    students: 38,
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Arts"],
    schedule: "8:30 AM - 2:30 PM",
    room: "Room 201",
  },
  {
    id: "4",
    name: "Class 11",
    section: "Science",
    teacher: "Mr. Robert Wilson",
    students: 30,
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    schedule: "7:30 AM - 1:30 PM",
    room: "Room 301",
  },
  {
    id: "5",
    name: "Class 8",
    section: "A",
    teacher: "Mrs. Jennifer Taylor",
    students: 40,
    subjects: ["Mathematics", "Science", "English", "History", "Geography"],
    schedule: "9:00 AM - 3:00 PM",
    room: "Room 105",
  },
  {
    id: "6",
    name: "Class 12",
    section: "Commerce",
    teacher: "Dr. Michael Brown",
    students: 28,
    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics"],
    schedule: "7:30 AM - 1:30 PM",
    room: "Room 401",
  },
];

const colorSchemes = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-indigo-500 to-blue-500",
];

export default function Classes() {
  const [search, setSearch] = useState("");

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(search.toLowerCase()) ||
    cls.teacher.toLowerCase().includes(search.toLowerCase()) ||
    cls.section.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="page-header mb-0">
            <h1 className="page-title">Classes</h1>
            <p className="page-subtitle">Organize and manage class schedules</p>
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Create Class
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchInput
            placeholder="Search classes..."
            value={search}
            onChange={setSearch}
            className="md:w-96"
          />
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredClasses.map((cls, index) => (
            <div
              key={cls.id}
              className={`card-elevated overflow-hidden animate-slide-up stagger-${(index % 4) + 1}`}
              style={{ opacity: 0 }}
            >
              {/* Header with gradient */}
              <div className={cn(
                "p-4 bg-gradient-to-r text-white",
                colorSchemes[index % colorSchemes.length]
              )}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl">
                      {cls.name} - {cls.section}
                    </h3>
                    <p className="text-white/80 text-sm">{cls.room}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Users size={14} />
                    <span className="text-sm font-medium">{cls.students}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Class Teacher</p>
                  <p className="font-medium text-foreground">{cls.teacher}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {cls.subjects.slice(0, 3).map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {subject}
                      </span>
                    ))}
                    {cls.subjects.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                        +{cls.subjects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{cls.schedule}</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    View Details
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
