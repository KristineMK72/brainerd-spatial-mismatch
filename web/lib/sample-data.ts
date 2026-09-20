/** Sample data — replace with DB queries once auth + org model exist */

export const todayStats = [
  { label: "Revenue booked", value: "$4,280", color: "text-emerald-400" },
  { label: "Appointments", value: "11", color: "text-sky-400" },
  { label: "Jobs", value: "7", color: "text-indigo-400" },
  { label: "Open tasks", value: "14", color: "text-violet-400" },
  { label: "New leads", value: "5", color: "text-amber-400" },
  { label: "Unpaid invoices", value: "$3,840", color: "text-rose-400" },
];

export const needsAttention = [
  "3 overdue invoices",
  "2 unassigned jobs",
  "1 employee absent (Mike — PTO)",
  "4 leads not contacted in 3+ days",
  "Inventory low on 3 items",
];

export const arSummary = [
  { label: "Outstanding", value: "$18,420", color: "text-white" },
  { label: "Due this week", value: "$7,230", color: "text-sky-400" },
  { label: "Overdue", value: "$3,840", color: "text-amber-400" },
  { label: "90+ days", value: "$620", color: "text-rose-400" },
];

export const arFollowUps = [
  { name: "Customer A", amount: 420, days: 12 },
  { name: "Customer B", amount: 1150, days: 7 },
  { name: "Customer C", amount: 300, days: 31 },
  { name: "Customer D", amount: 890, days: 4 },
  { name: "Customer E", amount: 210, days: 18 },
];

export const forgetAlerts = [
  { icon: "⚠️", text: "Quote sent 5 days ago with no response — Acme Roofing" },
  { icon: "⚠️", text: "Customer hasn’t been contacted in 30 days — Jane Smith" },
  { icon: "💳", text: "Invoice overdue — Customer C · $300 · 31 days" },
  { icon: "📋", text: "Contract renewal approaching — Lakeside HOA (14 days)" },
  { icon: "🎓", text: "Employee certification expires next month — Jess (CPR)" },
  { icon: "🔄", text: "Recurring service wasn’t scheduled — Property #14" },
];
