
import React, { useState } from "react";
import { Calendar, Download, FileText, BarChart3, PieChart, TrendingUp, Printer } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { Button } from "@/components/skeuomorphic/Button";

const Reports = () => {
  const [dateRange, setDateRange] = useState("monthly");

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-gray-600">Generate and access pharmacy reports</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-pharma-gray p-1 rounded-md">
            <DateRangeButton
              active={dateRange === "weekly"}
              onClick={() => setDateRange("weekly")}
            >
              Weekly
            </DateRangeButton>
            <DateRangeButton
              active={dateRange === "monthly"}
              onClick={() => setDateRange("monthly")}
            >
              Monthly
            </DateRangeButton>
            <DateRangeButton
              active={dateRange === "yearly"}
              onClick={() => setDateRange("yearly")}
            >
              Yearly
            </DateRangeButton>
          </div>
          <Button variant="secondary" className="gap-2">
            <Calendar size={16} />
            May 2025
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard
          title="Sales Performance"
          icon={<BarChart3 size={20} />}
          chartType="bar"
          height="h-80"
        />
        <ChartCard
          title="Product Categories"
          icon={<PieChart size={20} />}
          chartType="pie"
          height="h-80"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReportCard
          title="Financial Reports"
          icon={<TrendingUp size={24} />}
          reports={[
            { name: "Income Statement", type: "PDF" },
            { name: "Balance Sheet", type: "PDF" },
            { name: "Cash Flow Statement", type: "PDF" },
            { name: "Tax Summary", type: "XLS" },
          ]}
        />
        
        <ReportCard
          title="Inventory Reports"
          icon={<FileText size={24} />}
          reports={[
            { name: "Stock Status Report", type: "PDF" },
            { name: "Expiry Report", type: "PDF" },
            { name: "Product Movement", type: "XLS" },
            { name: "Inventory Valuation", type: "PDF" },
          ]}
        />
        
        <ReportCard
          title="Staff Reports"
          icon={<FileText size={24} />}
          reports={[
            { name: "Payroll Report", type: "PDF" },
            { name: "Attendance Summary", type: "PDF" },
            { name: "Performance Metrics", type: "PDF" },
            { name: "Commission Report", type: "XLS" },
          ]}
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Recently Generated Reports</CardTitle>
            <Button variant="secondary" size="sm" className="gap-2">
              <FileText size={16} />
              Generate Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div 
                key={report.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-pharma-cream border border-pharma-gray-dark/10 shadow-skeuomorphic"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pharma-green-light to-pharma-green shadow-skeuomorphic flex items-center justify-center text-pharma-green-dark">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-xs text-gray-500">{report.date} • {report.type}</p>
                  </div>
                </div>
                <div className="flex ml-14 sm:ml-0 gap-2">
                  <Button variant="secondary" size="sm" className="gap-1">
                    <Printer size={14} />
                    Print
                  </Button>
                  <Button variant="primary" size="sm" className="gap-1">
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-pharma-gray-dark/10 flex justify-between">
          <p className="text-sm text-gray-500">
            Showing {recentReports.length} of 24 reports
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

// Date range button component
const DateRangeButton = ({ children, active, onClick }) => {
  return (
    <button
      className={`px-4 py-1.5 text-sm rounded-md transition-all ${
        active
          ? "bg-white shadow-skeuomorphic font-medium"
          : "text-gray-600 hover:bg-pharma-gray-light"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Chart card component
const ChartCard = ({ title, icon, chartType, height }) => {
  return (
    <Card>
      <CardHeader className="border-b border-pharma-gray-dark/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pharma-blue-light to-pharma-blue shadow-skeuomorphic flex items-center justify-center text-pharma-blue-dark">
              {icon}
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
          <Button variant="secondary" size="sm" className="gap-1">
            <Download size={14} />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`${height} flex items-center justify-center bg-gradient-to-r from-pharma-blue-light/20 to-pharma-green-light/20 rounded-lg border border-pharma-gray-dark/10 shadow-skeuomorphic-inset`}>
          <div className="flex flex-col items-center justify-center text-gray-500">
            {chartType === "bar" ? (
              <BarChart3 size={40} className="mb-2" />
            ) : (
              <PieChart size={40} className="mb-2" />
            )}
            <p>{chartType === "bar" ? "Bar chart" : "Pie chart"} will be displayed here</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Report card component
const ReportCard = ({ title, icon, reports }) => {
  return (
    <Card>
      <CardHeader className="border-b border-pharma-gray-dark/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pharma-peach-light to-pharma-peach shadow-skeuomorphic flex items-center justify-center text-pharma-peach-dark">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-pharma-gray-dark/10">
          {reports.map((report, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 hover:bg-pharma-gray-light transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-gray-500" />
                <span>{report.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium bg-pharma-gray-dark/10 px-2 py-0.5 rounded">
                  {report.type}
                </span>
                <Download size={16} className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data
const recentReports = [
  {
    id: 1,
    name: "Monthly Sales Report",
    date: "May 5, 2025",
    type: "PDF",
  },
  {
    id: 2,
    name: "Inventory Status Report",
    date: "May 4, 2025",
    type: "PDF",
  },
  {
    id: 3,
    name: "Expired Products Report",
    date: "May 3, 2025",
    type: "Excel",
  },
  {
    id: 4,
    name: "Staff Payroll Summary",
    date: "May 1, 2025",
    type: "PDF",
  },
];

export default Reports;
