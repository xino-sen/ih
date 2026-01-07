import { useState } from "react";
import { School, Bell, Shield, Users, Palette, Database } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your school system preferences</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-muted/50 p-1 flex-wrap h-auto gap-1">
            <TabsTrigger value="general" className="data-[state=active]:bg-card gap-2">
              <School size={16} />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-card gap-2">
              <Bell size={16} />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-card gap-2">
              <Shield size={16} />
              Security
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-card gap-2">
              <Users size={16} />
              User Roles
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="card-elevated p-6 space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg mb-4">School Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Springfield Academy"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      School Code
                    </label>
                    <input
                      type="text"
                      defaultValue="SA-2024"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="admin@springfield.edu"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 8900"
                      className="input-field"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="123 Education Street, Springfield, ST 12345"
                      className="input-field resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-display font-semibold text-lg mb-4">Academic Year</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Academic Year
                    </label>
                    <select className="input-field">
                      <option>2024-2025</option>
                      <option>2023-2024</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Term/Semester
                    </label>
                    <select className="input-field">
                      <option>Term 2</option>
                      <option>Term 1</option>
                      <option>Term 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <div className="card-elevated p-6 space-y-6">
              <h3 className="font-display font-semibold text-lg">Notification Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates and alerts via email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-foreground">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Get important alerts via text message
                    </p>
                  </div>
                  <Switch
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-foreground">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Browser push notifications for real-time updates
                    </p>
                  </div>
                  <Switch
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Notify me about:</h4>
                <div className="space-y-3">
                  {[
                    "New student enrollments",
                    "Fee payment reminders",
                    "Attendance alerts",
                    "Exam schedules",
                    "Staff announcements",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="card-elevated p-6 space-y-6">
              <h3 className="font-display font-semibold text-lg">Security Settings</h3>
              
              <div>
                <h4 className="font-medium text-foreground mb-4">Password Requirements</h4>
                <div className="space-y-3">
                  {[
                    "Minimum 8 characters",
                    "At least one uppercase letter",
                    "At least one number",
                    "At least one special character",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Session Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Session Timeout
                    </label>
                    <select className="input-field">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>4 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Max Login Attempts
                    </label>
                    <select className="input-field">
                      <option>3 attempts</option>
                      <option>5 attempts</option>
                      <option>10 attempts</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* User Roles */}
          <TabsContent value="users">
            <div className="card-elevated p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg">User Roles & Permissions</h3>
                <button className="btn-secondary text-sm">Add Role</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Administrator", users: 3, color: "bg-destructive" },
                  { name: "Teacher", users: 45, color: "bg-primary" },
                  { name: "Student", users: 850, color: "bg-success" },
                  { name: "Parent", users: 620, color: "bg-info" },
                ].map((role) => (
                  <div
                    key={role.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${role.color}`} />
                      <div>
                        <p className="font-medium text-foreground">{role.name}</p>
                        <p className="text-sm text-muted-foreground">{role.users} users</p>
                      </div>
                    </div>
                    <button className="btn-ghost text-sm">Manage Permissions</button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
