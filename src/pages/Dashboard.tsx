
import React from "react";
import { BarChart3, CreditCard, Package, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { StatCard } from "@/components/skeuomorphic/StatCard";
import { Button } from "@/components/skeuomorphic/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/skeuomorphic/Table";

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Pharmacy Management System!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="Rp 5,349,000"
          icon={<CreditCard size={20} />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Products"
          value="254"
          icon={<Package size={20} />}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Purchases"
          value="78"
          icon={<ShoppingCart size={20} />}
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard
          title="Staff"
          value="12"
          icon={<Users size={20} />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gradient-to-r from-pharma-blue-light/20 to-pharma-green-light/20 rounded-lg border border-pharma-gray-dark/10 shadow-skeuomorphic-inset">
              <div className="flex flex-col items-center justify-center text-gray-500">
                <BarChart3 size={40} className="mb-2" />
                <p>Revenue chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Low Stock Items</CardTitle>
              <Button variant="secondary" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-3 rounded-md bg-gradient-to-r from-white to-pharma-cream border border-pharma-gray-dark/10 shadow-skeuomorphic"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-500 font-medium">{item.stock} left</p>
                    <p className="text-xs text-gray-500">Min: {item.min}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Purchases</CardTitle>
            <Button variant="secondary" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPurchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>{purchase.id}</TableCell>
                  <TableCell>{purchase.supplier}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>Rp {purchase.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "skeuomorphic-badge",
                        purchase.status === "Open" 
                          ? "bg-pharma-peach border-pharma-peach-dark text-pharma-peach-dark" 
                          : "bg-pharma-green-light border-pharma-green-dark text-pharma-green-dark"
                      )}
                    >
                      {purchase.status}
                    </span>
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

// Sample data
const lowStockItems = [
  { id: 1, name: "Paracetamol 500mg", sku: "MED-1001", stock: 5, min: 10 },
  { id: 2, name: "Amoxicillin 500mg", sku: "MED-1002", stock: 3, min: 8 },
  { id: 3, name: "Vitamin C 1000mg", sku: "VIT-2001", stock: 7, min: 15 },
];

const recentPurchases = [
  { id: "PO-0025", supplier: "PT Kimia Farma", date: "2025-05-05", amount: 1250000, status: "Open" },
  { id: "PO-0024", supplier: "PT Kalbe Farma", date: "2025-05-03", amount: 760000, status: "Closed" },
  { id: "PO-0023", supplier: "PT Bintang Toedjoe", date: "2025-05-01", amount: 900000, status: "Closed" },
  { id: "PO-0022", supplier: "PT Sanbe Farma", date: "2025-04-29", amount: 1100000, status: "Closed" },
];

// Helper function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default Dashboard;
