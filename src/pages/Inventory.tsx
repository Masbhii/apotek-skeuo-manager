
import React, { useState } from "react";
import {
  Package,
  Search,
  PlusCircle,
  Filter,
  ChevronDown,
  Trash,
  Edit,
  AlertTriangle
} from "lucide-react";
import { Card } from "@/components/skeuomorphic/Card";
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

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Inventory Management</h1>
          <p className="text-gray-600">Manage your pharmacy products</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="gap-2">
            <Filter size={16} />
            Filter
            <ChevronDown size={16} />
          </Button>
          <Button variant="primary" className="gap-2">
            <PlusCircle size={16} />
            Add Product
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-pharma-gray-dark/10">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Buy Price</TableHead>
                <TableHead>Sell Price</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => {
                  const isLowStock = item.stock <= 10;
                  const isNearExpiry = new Date(item.expiryDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                  
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={isLowStock ? "text-red-500" : ""}>
                            {item.stock}
                          </span>
                          {isLowStock && (
                            <AlertTriangle
                              size={16}
                              className="text-amber-500"
                            />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>Rp {item.buyPrice.toLocaleString()}</TableCell>
                      <TableCell>Rp {item.sellPrice.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={isNearExpiry ? "text-red-500" : ""}>
                            {new Date(item.expiryDate).toLocaleDateString()}
                          </span>
                          {isNearExpiry && (
                            <AlertTriangle
                              size={16}
                              className="text-red-500"
                            />
                          )}
                        </div>
                      </TableCell>
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
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

// Sample data
const inventoryItems = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Analgesics",
    stock: 120,
    buyPrice: 5000,
    sellPrice: 7500,
    expiryDate: "2026-01-15",
  },
  {
    id: 2,
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    stock: 45,
    buyPrice: 12000,
    sellPrice: 15000,
    expiryDate: "2025-09-20",
  },
  {
    id: 3,
    name: "Loratadine 10mg",
    category: "Antihistamines",
    stock: 75,
    buyPrice: 8000,
    sellPrice: 12000,
    expiryDate: "2025-08-05",
  },
  {
    id: 4,
    name: "Vitamin C 1000mg",
    category: "Vitamins",
    stock: 8,
    buyPrice: 15000,
    sellPrice: 25000,
    expiryDate: "2025-12-30",
  },
  {
    id: 5,
    name: "Metformin 500mg",
    category: "Antidiabetics",
    stock: 60,
    buyPrice: 7000,
    sellPrice: 10000,
    expiryDate: "2025-06-15",
  },
  {
    id: 6,
    name: "Ibuprofen 400mg",
    category: "Anti-inflammatory",
    stock: 90,
    buyPrice: 6000,
    sellPrice: 9000,
    expiryDate: "2025-10-25",
  },
];

export default Inventory;
