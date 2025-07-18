import React from 'react';
import {
  LayoutGrid,
  ClipboardCheck,
  FileText,
  BarChart2,
  ChevronRight,
} from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'ticket-approval', icon: ClipboardCheck, label: 'Ticket Approval' }, 
    { id: 'my-ticket', icon: FileText, label: 'My Ticket' },
    { id: 'performance', icon: BarChart2, label: 'Performance' },
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
              <div className="w-6 flex justify-start">
                {isActive && (
                  <ChevronRight className="w-5 h-5 text-black" strokeWidth={3} />
                )}
              </div>

              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
