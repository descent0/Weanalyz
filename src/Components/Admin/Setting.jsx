import React from 'react';
import { ChevronDown } from 'lucide-react';
import CustomToggleIcon from '../../assets/icons/CustomToggleIcon';

const Setting = () => {
  return (
    <div className="bg-white font-serif text-[15px] w-full px-10 mx-auto">
      <h1 className="text-2xl px-2 pb-4 py-4">Setting</h1>

      {/* Section Template */}
      {[
        {
          title: 'General',
          content: (
            <>
              <Row label="Language">
                <div className="space-x-1">
                  <CustomToggleIcon/>
                </div>
              </Row>
              <Row label="Data Backup">
                <Checkbox />
              </Row>
            </>
          ),
        },
        {
          title: 'Connect To',
          content: (
            <>
              <Row label="GoDash"><Checkbox /></Row>
              <Row label="SuperController"><Checkbox /></Row>
            </>
          ),
        },
        {
          title: 'Email',
          content: <Row label="Enable SMTP"><Checkbox /></Row>,
        },
        {
          title: 'Authorization',
          content: (
            <>
              <Row label="Edit authorization"><Checkbox /></Row>
              <Row label="Authority Level">
                <select className="bg-gray-400 text-xs px-2 py-[2px] border border-gray-500 rounded">
                  <option>▼</option>
                </select>
              </Row>
            </>
          ),
        },
        {
          title: 'Notification',
          content: <Row label="Enable Notification"><Checkbox /></Row>,
        },
      ].map((section, i) => (
        <div key={i} className="mb-2">
          <div className="bg-[#3fd0c9] px-2 py-1 flex justify-start gap-4 text-lg tracking-wide items-center hover:outline-2 hover:outline-blue-700">
            <span>{section.title}</span>
            <ChevronDown size={16} />
          </div>
          <div className="bg-[#eeeeee] ">{section.content}</div>
        </div>
      ))}
    </div>
  );
};

// Reusable Row Component
const Row = ({ label, children }) => (
  <div className="flex justify-between items-center px-4 py-2 hover:outline-2 hover:outline-blue-700 border-b border-white last:border-0">
    <span>{label}</span>
    {children}
  </div>
);

// Reusable Checkbox
const Checkbox = () => (
  <input
    type="checkbox"
    checked
    readOnly
    className="accent-black w-4 h-4"
  />
);

export default Setting;
