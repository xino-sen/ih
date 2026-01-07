import { useState } from "react";
import { Plus, DollarSign, AlertTriangle, CheckCircle, Clock, Download } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SearchInput } from "@/components/ui/SearchInput";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface Invoice {
  id: string;
  studentName: string;
  rollNo: string;
  class: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  type: string;
}

const invoices: Invoice[] = [
  {
    id: "INV-001",
    studentName: "Emma Watson",
    rollNo: "1001",
    class: "10-A",
    amount: 1200,
    dueDate: "Jan 15, 2025",
    status: "paid",
    type: "Tuition Fee",
  },
  {
    id: "INV-002",
    studentName: "James Smith",
    rollNo: "1002",
    class: "10-B",
    amount: 1200,
    dueDate: "Jan 15, 2025",
    status: "pending",
    type: "Tuition Fee",
  },
  {
    id: "INV-003",
    studentName: "Sophie Johnson",
    rollNo: "1003",
    class: "9-A",
    amount: 1100,
    dueDate: "Jan 10, 2025",
    status: "overdue",
    type: "Tuition Fee",
  },
  {
    id: "INV-004",
    studentName: "Michael Brown",
    rollNo: "1004",
    class: "11-C",
    amount: 500,
    dueDate: "Jan 20, 2025",
    status: "pending",
    type: "Lab Fee",
  },
  {
    id: "INV-005",
    studentName: "Olivia Davis",
    rollNo: "1005",
    class: "8-A",
    amount: 1000,
    dueDate: "Jan 15, 2025",
    status: "paid",
    type: "Tuition Fee",
  },
];

export default function Fees() {
  const [search, setSearch] = useState("");

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.studentName.toLowerCase().includes(search.toLowerCase()) ||
    invoice.id.toLowerCase().includes(search.toLowerCase()) ||
    invoice.rollNo.includes(search)
  );

  const totalCollected = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);
  const totalPending = invoices
    .filter((i) => i.status === "pending")
    .reduce((sum, i) => sum + i.amount, 0);
  const totalOverdue = invoices
    .filter((i) => i.status === "overdue")
    .reduce((sum, i) => sum + i.amount, 0);

  const columns = [
    { key: "id", header: "Invoice ID" },
    {
      key: "studentName",
      header: "Student",
      render: (invoice: Invoice) => (
        <div>
          <p className="font-medium text-foreground">{invoice.studentName}</p>
          <p className="text-sm text-muted-foreground">
            {invoice.class} • {invoice.rollNo}
          </p>
        </div>
      ),
    },
    { key: "type", header: "Type" },
    {
      key: "amount",
      header: "Amount",
      render: (invoice: Invoice) => (
        <span className="font-semibold text-foreground">
          ${invoice.amount.toLocaleString()}
        </span>
      ),
    },
    { key: "dueDate", header: "Due Date" },
    {
      key: "status",
      header: "Status",
      render: (invoice: Invoice) => (
        <StatusBadge
          status={
            invoice.status === "paid"
              ? "success"
              : invoice.status === "overdue"
              ? "error"
              : "warning"
          }
        >
          {invoice.status}
        </StatusBadge>
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground">
          <Download size={16} />
        </button>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="page-header mb-0">
            <h1 className="page-title">Fees & Invoices</h1>
            <p className="page-subtitle">Manage payments and generate invoices</p>
          </div>
          <button className="btn-primary">
            <Plus size={18} />
            Create Invoice
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                <CheckCircle size={24} className="text-success" />
              </div>
              <span className="text-sm text-success font-medium">Collected</span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              ${totalCollected.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Total collected this month</p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-warning-light flex items-center justify-center">
                <Clock size={24} className="text-warning" />
              </div>
              <span className="text-sm text-warning font-medium">Pending</span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              ${totalPending.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Awaiting payment</p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-destructive-light flex items-center justify-center">
                <AlertTriangle size={24} className="text-destructive" />
              </div>
              <span className="text-sm text-destructive font-medium">Overdue</span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              ${totalOverdue.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Past due date</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchInput
            placeholder="Search by student name, invoice ID..."
            value={search}
            onChange={setSearch}
            className="md:w-96"
          />
          <select className="input-field md:w-40">
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
          <select className="input-field md:w-40">
            <option value="">All Types</option>
            <option value="tuition">Tuition Fee</option>
            <option value="lab">Lab Fee</option>
            <option value="transport">Transport Fee</option>
          </select>
        </div>

        {/* Table */}
        <DataTable columns={columns} data={filteredInvoices} />
      </div>
    </DashboardLayout>
  );
}
