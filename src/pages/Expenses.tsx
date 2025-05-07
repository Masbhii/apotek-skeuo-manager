
import React, { useState } from "react";
import {
  Bookmark,
  Calendar,
  Download,
  Plus,
  Search,
  Trash,
  Edit,
  CreditCard,
  Filter,
  Check,
  X
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { Button } from "@/components/skeuomorphic/Button";
import { Input } from "@/components/skeuomorphic/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/skeuomorphic/Table";

const Expenses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Daily Expenses</h1>
          <p className="text-gray-600">Track and manage your pharmacy expenses</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="gap-2">
            <Calendar size={16} />
            May 2025
          </Button>
          <Button variant="secondary" className="gap-2">
            <Download size={16} />
            Export
          </Button>
          <Button 
            variant="primary" 
            className="gap-2"
            onClick={() => setIsAddingExpense(!isAddingExpense)}
          >
            <Plus size={16} />
            Add Expense
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Expenses This Month"
          value="Rp 2,750,000"
          icon={<CreditCard size={20} />}
        />
        <StatCard
          title="Utilities"
          value="Rp 1,350,000"
          icon={<Filter size={20} />}
        />
        <StatCard
          title="Supplies"
          value="Rp 1,400,000"
          icon={<Bookmark size={20} />}
        />
      </div>

      <Card>
        <CardHeader className="border-b border-pharma-gray-dark/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Expense Transactions</CardTitle>
            <div className="relative w-full sm:w-64 md:w-80">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Search expenses..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isAddingExpense && (
            <div className="mb-6 p-4 bg-pharma-cream rounded-lg border border-pharma-gray-dark/20 shadow-skeuomorphic">
              <h3 className="font-medium mb-3">Add New Expense</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <Input label="Expense Name" placeholder="e.g., Cleaning Supplies" />
                <Input label="Amount (Rp)" placeholder="e.g., 150000" type="number" />
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select className="skeuomorphic-select w-full">
                    <option>Utilities</option>
                    <option>Supplies</option>
                    <option>Maintenance</option>
                    <option>Staff Related</option>
                    <option>Others</option>
                  </select>
                </div>
                <Input label="Date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input label="Responsible Staff" placeholder="Staff name" />
                <Input label="Receipt Number (Optional)" placeholder="e.g., REC-001" />
              </div>
              <Input label="Notes (Optional)" placeholder="Any additional details..." />
              <div className="mt-4 flex justify-end gap-2">
                <Button 
                  variant="secondary" 
                  className="gap-2"
                  onClick={() => setIsAddingExpense(false)}
                >
                  <X size={16} />
                  Cancel
                </Button>
                <Button variant="primary" className="gap-2">
                  <Check size={16} />
                  Save Expense
                </Button>
              </div>
            </div>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses
                .filter(expense =>
                  expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  expense.category.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell className="font-medium">{expense.description}</TableCell>
                    <TableCell>
                      <span className="skeuomorphic-badge bg-pharma-blue-light border-pharma-blue-dark text-pharma-blue-dark">
                        {expense.category}
                      </span>
                    </TableCell>
                    <TableCell>Rp {expense.amount.toLocaleString()}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.staff}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          className="h-8 w-8 p-0 flex items-center justify-center"
                        >
                          <Edit size={14} />
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 w-8 p-0 flex items-center justify-center text-red-500 hover:bg-red-50"
                        >
                          <Trash size={14} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

// Simple stat card component for expenses page
const StatCard = ({ title, value, icon }) => {
  return (
    <Card>
      <CardContent className="flex items-start justify-between pt-6">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pharma-peach-light to-pharma-peach shadow-skeuomorphic flex items-center justify-center text-pharma-peach-dark">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data
const expenses = [
  {
    id: 1,
    description: "Electricity Bill",
    category: "Utilities",
    amount: 750000,
    date: "2025-05-05",
    staff: "Rizki Ananda",
  },
  {
    id: 2,
    description: "Water Bill",
    category: "Utilities",
    amount: 250000,
    date: "2025-05-04",
    staff: "Rizki Ananda",
  },
  {
    id: 3,
    description: "Cleaning Supplies",
    category: "Supplies",
    amount: 350000,
    date: "2025-05-03",
    staff: "Sarah Wijaya",
  },
  {
    id: 4,
    description: "AC Maintenance",
    category: "Maintenance",
    amount: 450000,
    date: "2025-05-02",
    staff: "Hadi Santoso",
  },
  {
    id: 5,
    description: "Office Stationery",
    category: "Supplies",
    amount: 200000,
    date: "2025-05-01",
    staff: "Sarah Wijaya",
  },
  {
    id: 6,
    description: "Internet Bill",
    category: "Utilities",
    amount: 350000,
    date: "2025-04-30",
    staff: "Rizki Ananda",
  },
];

export default Expenses;
