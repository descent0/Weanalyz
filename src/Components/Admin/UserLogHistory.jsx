import React from 'react';

const UserLogHistory = () => {
  const logData = [
    {
      no: '1.',
      signIn: '130821 / 0800',
      staffId: 'XL000001',
      dept: 'OT',
      activity: 'Create Team',
      signOut: '130821 / 0815',
    },
    {
      no: '2.',
      signIn: '130821 / 0805',
      staffId: '',
      dept: '',
      activity: '',
      signOut: '130821 / 0810',
    },
     {
      no: '3.',
      signIn: '',
      staffId: '',
      dept: '',
      activity: '',
      signOut: '',
    }, {
      no: '4.',
      signIn: '',
      staffId: '',
      dept: '',
      activity: '',
      signOut: '',
    }, {
      no: '5.',
      signIn: '',
      staffId: '',
      dept: '',
      activity: '',
      signOut: '',
    },
  ];

  return (
    <div className="font-serif p-6 text-[14px]">
      <h2 className="text-3xl mb-2">User Log History</h2>
      <div className="flex items-center gap-1 text-[13px] mb-2">
        <span>Show:</span>
        <select className="border bg-[#000000]/40 font-bold text-[12px] px-1 py-[1px]">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span>Entries</span>
      </div>
      <table className="w-full border-t border-black border-collapse ">
        <thead>
          <tr className=" bg-gray-100 text-left font-light text-lg py-4">
            <th className=" px-2 py-1">No.</th>
            <th className=" px-2 py-1">Date/Sign InTime</th>
            <th className=" px-2 py-1">Staff ID</th>
            <th className=" px-2 py-1">Department</th>
            <th className=" px-2 py-1">Activity</th>
            <th className=" px-2 py-1">Date/Sign Out time</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((item, index) => (
            <tr key={index} className={`h-[30px] ${index%2==0?'bg-[#C4C4C4]/30':'bg-[#C4C4C4]/60'} text-lg`}>
              <td className=" px-2">{item.no}</td>
              <td className=" px-2">{item.signIn}</td>
              <td className=" px-2">{item.staffId}</td>
              <td className=" px-2">{item.dept}</td>
              <td className=" px-2">{item.activity}</td>
              <td className=" px-2">{item.signOut}</td>
            </tr>
          ))}
          {[...Array(3)].map((_, idx) => (
            <tr key={`empty-${idx}`} className={`h-[30px] ${idx%2!=0?'bg-[#C4C4C4]/30':'bg-[#C4C4C4]/60'} `}>
              <td className="px-2">&nbsp;</td>
              <td className=" px-2"></td>
              <td className=" px-2"></td>
              <td className=" px-2"></td>
              <td className=" px-2"></td>
              <td className=" px-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-1 text-[12px]">Showing 1 to 5 of 5 entries</div>
      <div className="text-right text-[13px] mt-1">
        <span className="inline-block rotate-180 mr-1">&gt;&gt;</span>
        <span className="mr-1">1</span>
        <span className="inline-block">&gt;&gt;</span>
      </div>
    </div>
  );
};

export default UserLogHistory;
