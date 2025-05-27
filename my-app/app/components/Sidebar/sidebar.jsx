"use client";
import React, { useState } from "react";

// Import section components
// import Installation from "@/components/SidebarSections/Installation";
// import Plugins from "@/components/SidebarSections/Plugins";
// import Migrations from "@/components/SidebarSections/Migrations";
// import Appearance from "@/components/SidebarSections/Appearance";
// import MambaUI from "@/components/SidebarSections/MambaUI";
import Manager from "@/app/components/Sidebarsection/Manager";

export default function SidebarWithContent() {
  const [activeComponent, setActiveComponent] = useState("Installation");

  const renderComponent = () => {
    switch (activeComponent) {
    //   case "Installation":
    //     return <Installation />;
    //   case "Plugins":
    //     return <Plugins />;
    //   case "Migrations":
    //     return <Migrations />;
    //   case "Appearance":
    //     return <Appearance />;
    //   case "Mamba UI":
    //     return <MambaUI />;
      case "Manager":
        return <Manager />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  const menuItems = [
    // "Installation",
    // "Plugins",
    // "Migrations",
    // "Appearance",
    // "Mamba UI",
    "Manager",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full sm:w-60 p-6 bg-white shadow-md">
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
                  className={`text-left px-2 py-1 rounded hover:bg-blue-100 ${
                    activeComponent === item ? "font-bold text-blue-600" : ""
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
  );
}
