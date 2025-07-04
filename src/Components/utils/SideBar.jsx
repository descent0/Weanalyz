import React from 'react';
import { LayoutGrid, Plus, FileText, ChevronRight } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'new-ticket', icon: Plus, label: 'New Ticket' },
    { id: 'my-ticket', icon: FileText, label: 'My Ticket' }
  ];

  return (
    <aside className="bg-gray-200 min-w-fit">
      <nav className="py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div
              key={item.id}
              className={`flex items-center px-3 py-3 cursor-pointer hover:bg-gray-300 transition-colors relative ${
                isActive ? 'bg-gray-300' : ''
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              {/* Arrow indicator - positioned absolutely or with fixed width */}
              <div className="w-6 flex justify-start">
                {isActive && (
                  <ChevronRight className="w-5 h-5 text-[#000000] " strokeWidth={3} />
                )}
              </div>
              
              {/* Icon - now consistently aligned */}
              <Icon className="w-5 h-5 mr-3" />
              
              {/* Label */}
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;