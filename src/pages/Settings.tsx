
import React from "react";
import {
  User,
  Building,
  Bell,
  Shield,
  Users,
  Database,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/skeuomorphic/Card";
import { Button } from "@/components/skeuomorphic/Button";
import { Input } from "@/components/skeuomorphic/Input";

const Settings = () => {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-600">Manage your pharmacy system settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SettingsSidebar activeTab="profile" />
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardHeader className="border-b border-pharma-gray-dark/10">
              <CardTitle>Pharmacy Profile</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full">
                    <Input label="Pharmacy Name" defaultValue="Apotek Sehat" />
                  </div>
                  <div className="w-full">
                    <Input label="License Number" defaultValue="APT-12345678" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full">
                    <Input label="Phone Number" defaultValue="0812-3456-7890" />
                  </div>
                  <div className="w-full">
                    <Input label="Email Address" defaultValue="contact@apoteksehat.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address
                  </label>
                  <textarea
                    className="skeuomorphic-input w-full resize-none"
                    rows={3}
                    defaultValue="Jl. Apotek Sehat No. 123, Kecamatan Sehat, Kota Sejahtera, 12345"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Pharmacy Logo
                  </label>
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-pharma-blue-light to-pharma-blue shadow-skeuomorphic flex items-center justify-center text-white">
                      <Building size={32} />
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        Upload New Logo
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Recommended: Square image, minimum 200x200px
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-medium text-lg mb-3">Operating Hours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-sm">Monday - Friday:</span>
                      <Input defaultValue="08:00 - 20:00" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-sm">Saturday:</span>
                      <Input defaultValue="09:00 - 18:00" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-sm">Sunday:</span>
                      <Input defaultValue="10:00 - 16:00" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-sm">Holidays:</span>
                      <Input defaultValue="10:00 - 16:00" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-2">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface SettingsSidebarProps {
  activeTab: string;
}

type SettingsTab = {
  id: string;
  name: string;
  icon: LucideIcon;
};

// Settings sidebar component
const SettingsSidebar = ({ activeTab }: SettingsSidebarProps) => {
  const tabs: SettingsTab[] = [
    { id: "profile", name: "Pharmacy Profile", icon: Building },
    { id: "account", name: "Account Settings", icon: User },
    { id: "notification", name: "Notifications", icon: Bell },
    { id: "users", name: "User Management", icon: Users },
    { id: "security", name: "Security", icon: Shield },
    { id: "data", name: "Data & Backup", icon: Database },
  ];

  return (
    <nav className="skeuomorphic-card p-2">
      <ul className="space-y-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <li key={tab.id}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-pharma-blue to-pharma-blue-light text-pharma-blue-dark shadow-skeuomorphic font-medium"
                    : "text-gray-600 hover:bg-pharma-gray-light"
                }`}
              >
                <Icon size={isActive ? 18 : 16} />
                <span>{tab.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Settings;
