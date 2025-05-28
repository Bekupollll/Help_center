"use client";
import React, { useState } from "react";
// Removed lucide-react dependency

import Manager from "@/app/components/Sidebarsection/Manager";
import Admin from "../Sidebarsection/Admin";
import Teacher from "../Sidebarsection/Teacher";
import Student from "../Sidebarsection/Student";
import APP from "../Sidebarsection/APP";

export default function SidebarWithContent() {
  const [activeComponent, setActiveComponent] = useState("Захирал");
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Enhanced menu structure with dropdown support
  const menuItems = [
    {
      id: "Захирал",
      label: "Захирал",
      component: "Захирал",
      children: [
        { id: "admin-users", label: "Хэрэглэгчид", component: "Захирал" },
        { id: "admin-settings", label: "Тохиргоо", component: "Захирал" },
        { id: "admin-reports", label: "Тайлан", component: "Захирал" },
      ],
    },
    {
      id: "Менежер",
      label: "Менежер",
      component: "Менежер",
      children: [
        { id: "manager-projects", label: "Төслүүд", component: "Менежер" },
        { id: "manager-teams", label: "Багууд", component: "Менежер" },
      ],
    },
    {
      id: "Багш",
      label: "Багш",
      component: "Багш",
      children: [
        { id: "teacher-classes", label: "Ангиуд", component: "Багш" },
        { id: "teacher-subjects", label: "Хичээлүүд", component: "Багш" },
        { id: "teacher-grades", label: "Үнэлгээ", component: "Багш" },
      ],
    },
    {
      id: "Сурагч",
      label: "Сурагч",
      component: "Сурагч",
      children: [
        { id: "student-courses", label: "Курсууд", component: "Сурагч" },
        { id: "student-assignments", label: "Даалгавар", component: "Сурагч" },
        { id: "student-results", label: "Үр дүн", component: "Сурагч" },
      ],
    },
    {
      id: "АПП",
      label: "АПП",
      component: "АПП",
      children: [
        { id: "student-courses", label: "Курсууд", component: "Сурагч" },
        { id: "student-assignments", label: "Даалгавар", component: "Сурагч" },
        { id: "student-results", label: "Үр дүн", component: "Сурагч" },
      ],
    },
  ];

  const toggleDropdown = (itemId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item, childItem = null) => {
    if (childItem) {
      setActiveComponent(childItem.component);
    } else if (item.children && item.children.length > 0) {
      // If it has children, toggle dropdown
      toggleDropdown(item.id);
    } else {
      // If no children, set as active component
      setActiveComponent(item.component);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Захирал":
        return <Admin />;
      case "Багш":
        return <Teacher />;
      case "Сурагч":
        return <Student />;
      case "АПП":
        return <APP />;
      case "Менежер":
        return <Manager />;
      default:
        return <Admin />;
    }
  };

  const renderMenuItem = (item) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdowns[item.id];
    const isActive = activeComponent === item.component;

    return (
      <div key={item.id} className="space-y-1">
        <button
          onClick={() => handleItemClick(item)}
          className={`w-full flex items-center justify-between text-left text-gray-700 px-2 py-2 rounded hover:bg-blue-100 transition-colors ${
            isActive ? "font-bold text-blue-600 bg-blue-50" : ""
          }`}
        >
          <span>{item.label}</span>
          {hasChildren && (
            <span className="ml-2 transform transition-transform duration-200">
              <svg
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          )}
        </button>

        {hasChildren && isOpen && (
          <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
            {item.children.map((child) => (
              <button
                key={child.id}
                onClick={() => handleItemClick(item, child)}
                className={`w-full text-left text-gray-600 px-2 py-1 rounded hover:bg-blue-50 transition-colors text-sm ${
                  activeComponent === child.component
                    ? "font-semibold text-blue-600 bg-blue-50"
                    : ""
                }`}
              >
                {child.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // For mobile, create a flattened menu
  const flatMenuItems = menuItems.reduce((acc, item) => {
    acc.push(item);
    if (item.children) {
      acc.push(...item.children);
    }
    return acc;
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-full sm:w-60 p-6 shadow-md bg-gray-50">
            <nav className="space-y-8 text-sm">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                  Sections
                </h2>
                <div className="flex flex-col space-y-1">
                  {menuItems.map(renderMenuItem)}
                </div>
              </div>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-6 bg-white shadow-inner">
            {renderComponent()}
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="bg-gray-200 h-auto flex flex-col">
          <main className="flex-1 p-6 bg-white shadow-inner pb-20">
            {renderComponent()}
          </main>
          <div className="fixed bottom-0 right-0 left-0 bg-gray-200 p-3">
            <div className="flex justify-between overflow-x-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveComponent(item.component)}
                  className={`flex-shrink-0 text-gray-700 font-semibold px-3 py-2 rounded hover:bg-blue-100 transition-colors whitespace-nowrap ${
                    activeComponent === item.component
                      ? "text-blue-600 font-extrabold bg-gray-400"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
