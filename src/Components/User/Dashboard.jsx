import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Tickets', value: '12', color: 'bg-[#2F82FF]' },
    { title: 'Total Solved', value: '8', color: 'bg-[#0BFF68]' },
    { title: 'Total\nAwaiting\nApproval', value: '2', color: 'bg-[#FE594E]' },
    { title: 'Total in\nProgress', value: '2', color: 'bg-[#FCFF6C]' },

  ];

  return (
    <div className="bg-gray-100  p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-normal tracking-wide  text-black">Dashboard</h1>
      </div>
      
      <div className="flex justify-center gap-6 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="w-50 h-60 relative">
            {/* Shadow layer - dark div behind */}
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl opacity-30"></div>
            
            {/* Main card */}
            <div className={`${stat.color} w-full h-full rounded-2xl p-2 pb-14 flex flex-col justify-center items-center text-white relative z-10`}>
              <div className=' px-8 flex-1  text-center text-lg font-medium  text-[#000000]'>
              {stat.title}
              </div>
              <div className=' flex-2 content-end text-8xl text-[#05386B] font-medium'>
              {stat.value}
              </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;