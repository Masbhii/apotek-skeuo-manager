
import React, { useState } from "react";
import { 
  FileText, 
  BookOpen, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  Download,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { Button } from "@/components/skeuomorphic/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/skeuomorphic/Table";

const Accounting = () => {
  const [activePeriod, setActivePeriod] = useState("may2025");
  const [activeJournalTab, setActiveJournalTab] = useState("general");

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Accounting</h1>
          <p className="text-gray-600">Financial records and reporting</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="gap-2">
            <Calendar size={16} />
            May 2025
            <ChevronDown size={16} />
          </Button>
          <Button variant="secondary" className="gap-2">
            <Download size={16} />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ReportCard
          title="Revenue"
          value="Rp 45,750,000"
          change={"+15%"}
          trend="up"
          icon={<TrendingUp size={20} />}
        />
        <ReportCard
          title="Expenses"
          value="Rp 28,300,000"
          change={"+5%"}
          trend="up"
          icon={<CreditCard size={20} />}
        />
        <ReportCard
          title="Profit"
          value="Rp 17,450,000"
          change={"+18%"}
          trend="up"
          icon={<TrendingUp size={20} />}
        />
        <ReportCard
          title="Cash Balance"
          value="Rp 125,680,000"
          change={"+8%"}
          trend="up"
          icon={<CreditCard size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b border-pharma-gray-dark/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle>Journals</CardTitle>
              
              <div className="flex overflow-x-auto pb-1 hide-scrollbar">
                <div className="flex space-x-1">
                  <TabButton 
                    active={activeJournalTab === "general"} 
                    onClick={() => setActiveJournalTab("general")}
                  >
                    General Journal
                  </TabButton>
                  <TabButton 
                    active={activeJournalTab === "cash"} 
                    onClick={() => setActiveJournalTab("cash")}
                  >
                    Cash Journal
                  </TabButton>
                  <TabButton 
                    active={activeJournalTab === "purchase"} 
                    onClick={() => setActiveJournalTab("purchase")}
                  >
                    Purchase Journal
                  </TabButton>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Debit</TableHead>
                  <TableHead>Credit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {journalEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>{entry.description}</TableCell>
                    <TableCell>{entry.account}</TableCell>
                    <TableCell>
                      {entry.debit ? `Rp ${entry.debit.toLocaleString()}` : ""}
                    </TableCell>
                    <TableCell>
                      {entry.credit ? `Rp ${entry.credit.toLocaleString()}` : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-pharma-gray-dark/10">
            <CardTitle>Financial Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ReportLink
              icon={<FileText size={20} />}
              title="Income Statement"
              description="Revenue and expenses summary"
              date="May 2025"
            />
            <ReportLink
              icon={<BookOpen size={20} />}
              title="Balance Sheet"
              description="Assets, liabilities, and equity"
              date="May 2025"
            />
            <ReportLink
              icon={<TrendingUp size={20} />}
              title="Cash Flow"
              description="Cash inflows and outflows"
              date="May 2025"
            />
            <ReportLink
              icon={<CreditCard size={20} />}
              title="Expense Report"
              description="Detailed expense breakdown"
              date="May 2025"
              isLast
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-pharma-gray-dark/10">
          <CardTitle>General Ledger</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ledgerAccounts.map((account) => (
              <LedgerAccountCard
                key={account.id}
                name={account.name}
                code={account.code}
                balance={account.balance}
                type={account.type}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Tab button component
const TabButton = ({ children, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-all ${
        active
          ? "bg-gradient-to-r from-pharma-blue to-pharma-blue-light text-pharma-blue-dark shadow-skeuomorphic font-medium"
          : "text-gray-600 hover:bg-pharma-gray-light"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Financial report card
const ReportCard = ({ title, value, change, trend, icon }) => {
  return (
    <Card>
      <CardContent className="flex items-start justify-between pt-6">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          <div className="flex items-center gap-1 mt-1">
            <span
              className={`text-xs font-medium ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pharma-green-light to-pharma-green shadow-skeuomorphic flex items-center justify-center text-pharma-green-dark">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

// Report link component
const ReportLink = ({ icon, title, description, date, isLast = false }) => {
  return (
    <div className={`flex items-center gap-4 p-4 hover:bg-pharma-gray-light transition-colors ${!isLast && 'border-b border-pharma-gray-dark/10'}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pharma-blue-light to-pharma-blue shadow-skeuomorphic flex items-center justify-center text-pharma-blue-dark">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">{date}</p>
        <Button variant="secondary" size="sm" className="mt-1">
          View
        </Button>
      </div>
    </div>
  );
};

// Ledger account card
const LedgerAccountCard = ({ name, code, balance, type }) => {
  return (
    <div className="skeuomorphic-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">{name}</h3>
        <span className="text-xs text-gray-500">{code}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{type}</span>
        <span className="font-semibold">Rp {balance.toLocaleString()}</span>
      </div>
    </div>
  );
};

// Sample data
const journalEntries = [
  {
    id: 1,
    date: "2025-05-01",
    description: "Purchase of medicine inventory",
    account: "Inventory",
    debit: 1250000,
    credit: null,
  },
  {
    id: 2,
    date: "2025-05-01",
    description: "Purchase of medicine inventory",
    account: "Accounts Payable",
    debit: null,
    credit: 1250000,
  },
  {
    id: 3,
    date: "2025-05-03",
    description: "Cash payment for electricity",
    account: "Utility Expense",
    debit: 750000,
    credit: null,
  },
  {
    id: 4,
    date: "2025-05-03",
    description: "Cash payment for electricity",
    account: "Cash",
    debit: null,
    credit: 750000,
  },
  {
    id: 5,
    date: "2025-05-05",
    description: "Cash sales",
    account: "Cash",
    debit: 2500000,
    credit: null,
  },
  {
    id: 6,
    date: "2025-05-05",
    description: "Cash sales",
    account: "Sales Revenue",
    debit: null,
    credit: 2500000,
  },
];

const ledgerAccounts = [
  {
    id: 1,
    name: "Cash",
    code: "1-1001",
    balance: 125680000,
    type: "Asset",
  },
  {
    id: 2,
    name: "Accounts Receivable",
    code: "1-1002",
    balance: 8500000,
    type: "Asset",
  },
  {
    id: 3,
    name: "Inventory",
    code: "1-1003",
    balance: 75300000,
    type: "Asset",
  },
  {
    id: 4,
    name: "Accounts Payable",
    code: "2-1001",
    balance: 24500000,
    type: "Liability",
  },
  {
    id: 5,
    name: "Sales Revenue",
    code: "4-1001",
    balance: 45750000,
    type: "Revenue",
  },
  {
    id: 6,
    name: "Salary Expense",
    code: "5-1001",
    balance: 18500000,
    type: "Expense",
  },
];

export default Accounting;
