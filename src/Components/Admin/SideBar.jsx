import React from 'react';
import {
  LayoutDashboard,
  Database,
  Settings,
  History,
  ChevronRight,
} from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'database', icon: Database, label: 'Database' },
    { id: 'setting', icon: Settings, label: 'Setting' },
    { id: 'user-log-history', icon: History, label: 'User Log History' },
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
