import { Calendar, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    date: "Jan 15, 2025",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    date: "Jan 20, 2025",
    time: "9:00 AM",
    type: "event",
  },
  {
    id: 3,
    title: "Mid-term Exams Begin",
    date: "Jan 25, 2025",
    time: "8:00 AM",
    type: "exam",
  },
  {
    id: 4,
    title: "Science Exhibition",
    date: "Feb 1, 2025",
    time: "11:00 AM",
    type: "event",
  },
];

export function UpcomingEvents() {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-display font-semibold text-lg mb-4">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Calendar size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{event.title}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                <span>{event.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {event.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
