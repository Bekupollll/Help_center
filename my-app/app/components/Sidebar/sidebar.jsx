"use client";
import React, { useState } from "react";

import Manager from "@/app/components/Sidebarsection/Manager";
import Admin from "../Sidebarsection/Admin";
import Teacher from "../Sidebarsection/Teacher";
import Student from "../Sidebarsection/Student";
import APP from "../Sidebarsection/APP";

export default function SidebarWithContent() {
  const [activeComponent, setActiveComponent] = useState("Installation");

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
        return <div>Select a menu item</div>;
    }
  };

  const menuItems = ["Захирал", "Менежер", "Багш", "Сурагч", "АПП"];

  return (
    <div className="w-full bg-white">
      <div className="hidden md:block">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-full sm:w-60 p-6 shadow-md">
            <nav className="space-y-8 text-sm">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                  Sections
                </h2>
                <div className="flex flex-col space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveComponent(item)}
                      className={`text-left text-gray-700 px-2 py-1 rounded hover:bg-blue-100 ${
                        activeComponent === item
                          ? "font-bold text-blue-600"
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                  ))}
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
      <div className="block md:hidden">
        <div className="bg-gray-200 h-auto flex flex-col">
          <main className="flex-1 p-6 bg-white shadow-inner">
            {renderComponent()}
          </main>
          <div className=" fixed not-first:bottom-0 right-0 left-0 bg-gray-200 p-5">
            <div className="flex justify-between">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveComponent(item)}
                  className={`text-left text-gray-700 font-semibold px-2 py-1 rounded hover:bg-blue-100 ${
                    activeComponent === item ? "text-blue-600 font-extrabold sm:py-2 sm:px-8 bg-gray-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
