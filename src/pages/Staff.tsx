
import React, { useState } from "react";
import { Search, Users, UserPlus, Trash, Edit, UserCheck, Briefcase, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { Button } from "@/components/skeuomorphic/Button";
import { Input } from "@/components/skeuomorphic/Input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/skeuomorphic/Table";

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredStaff = staffMembers.filter(staff =>
    (activeTab === "all" || staff.position.toLowerCase() === activeTab.toLowerCase()) &&
    (staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     staff.position.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Staff Management</h1>
          <p className="text-gray-600">Manage your pharmacy employees</p>
        </div>

        <Button variant="primary" className="gap-2">
          <UserPlus size={16} />
          Add New Staff
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Staff"
          value="12"
          icon={<Users size={20} />}
          color="blue"
        />
        <StatCard
          title="Pharmacists"
          value="4"
          icon={<UserCheck size={20} />}
          color="green"
        />
        <StatCard
          title="Monthly Payroll"
          value="Rp 42,500,000"
          icon={<DollarSign size={20} />}
          color="peach"
        />
      </div>

      <Card>
        <CardHeader className="border-b border-pharma-gray-dark/10 pb-2">
          <div className="space-y-4">
            <CardTitle>Staff Directory</CardTitle>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Search staff..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex overflow-x-auto pb-1 hide-scrollbar">
                <div className="flex space-x-1">
                  <TabButton 
                    active={activeTab === "all"} 
                    onClick={() => setActiveTab("all")}
                  >
                    All Staff
                  </TabButton>
                  <TabButton 
                    active={activeTab === "pharmacist"} 
                    onClick={() => setActiveTab("pharmacist")}
                  >
                    Pharmacists
                  </TabButton>
                  <TabButton 
                    active={activeTab === "cashier"} 
                    onClick={() => setActiveTab("cashier")}
                  >
                    Cashiers
                  </TabButton>
                  <TabButton 
                    active={activeTab === "accountant"} 
                    onClick={() => setActiveTab("accountant")}
                  >
                    Accountants
                  </TabButton>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Base Salary</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStaff.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pharma-blue-light to-pharma-blue shadow-skeuomorphic flex items-center justify-center text-white font-semibold">
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{staff.name}</p>
                        <p className="text-xs text-gray-500">{staff.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-gray-500" />
                      {staff.position}
                    </div>
                  </TableCell>
                  <TableCell>{staff.phone}</TableCell>
                  <TableCell>Rp {staff.salary.toLocaleString()}</TableCell>
                  <TableCell>{staff.joinedDate}</TableCell>
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
        
        <CardFooter className="border-t border-pharma-gray-dark/10 flex justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredStaff.length} of {staffMembers.length} staff members
          </p>
          <div className="flex items-center gap-1">
            <Button variant="secondary" size="sm" disabled>
              Previous
            </Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
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

// Simple stat card component for staff page
const StatCard = ({ title, value, icon, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'from-pharma-blue-light to-pharma-blue text-pharma-blue-dark';
      case 'green':
        return 'from-pharma-green-light to-pharma-green text-pharma-green-dark';
      case 'peach':
        return 'from-pharma-peach-light to-pharma-peach text-pharma-peach-dark';
      default:
        return 'from-pharma-gray-light to-pharma-gray text-gray-700';
    }
  };

  return (
    <Card>
      <CardContent className="flex items-start justify-between pt-6">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getColorClasses()} shadow-skeuomorphic flex items-center justify-center`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data
const staffMembers = [
  {
    id: 1,
    name: "Dr. Anisa Wijaya",
    position: "Pharmacist",
    email: "anisa@apoteksehat.com",
    phone: "0812-3456-7890",
    salary: 8500000,
    joinedDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Budi Santoso",
    position: "Cashier",
    email: "budi@apoteksehat.com",
    phone: "0813-2345-6789",
    salary: 4500000,
    joinedDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Dewi Lestari",
    position: "Pharmacist",
    email: "dewi@apoteksehat.com",
    phone: "0856-1234-5678",
    salary: 8000000,
    joinedDate: "2023-03-10",
  },
  {
    id: 4,
    name: "Eko Prabowo",
    position: "Accountant",
    email: "eko@apoteksehat.com",
    phone: "0878-9012-3456",
    salary: 6500000,
    joinedDate: "2023-04-05",
  },
  {
    id: 5,
    name: "Fitriani Sari",
    position: "Cashier",
    email: "fitri@apoteksehat.com",
    phone: "0857-8901-2345",
    salary: 4500000,
    joinedDate: "2023-05-12",
  },
  {
    id: 6,
    name: "Gunawan Wibowo",
    position: "Pharmacist",
    email: "gunawan@apoteksehat.com",
    phone: "0812-8901-2345",
    salary: 8200000,
    joinedDate: "2023-06-18",
  },
];

export default Staff;
