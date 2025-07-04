import React from "react";
import { Star } from "lucide-react";

// ✅ Correct way to import images in React (Vite/CRA)
import technicalImg from "../../assets/images/technical.png";
import operationImg from "../../assets/images/operation.png";

const Dashboard = () => {
  const stats = [
    { title: "Total Tickets", value: "12", color: "bg-[#2F82FF]" },
    { title: "Total Solved", value: "8", color: "bg-[#0BFF68]" },
    { title: "Total\nAwaiting\nApproval", value: "2", color: "bg-[#FE594E]" },
    { title: "Total in\nProgress", value: "2", color: "bg-[#FCFF6C]" },
  ];

  return (
    <div className="bg-[#ffffff] p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-normal tracking-wide text-black">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="flex justify-center gap-6 flex-wrap mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="w-52 h-60 relative">
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl opacity-30"></div>
            <div
              className={`${stat.color} w-full h-full rounded-2xl p-4 pb-12 flex flex-col justify-center items-center relative z-10`}
            >
              <div className="text-center text-base font-medium text-black whitespace-pre-line">
                {stat.title}
              </div>
              <div className="text-6xl font-medium text-[#05386B] mt-4">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Support Section */}
      <div className="flex gap-4 pb-10 justify-between">
        {/* Bar Chart Icon Section */}
        <div className="flex-1 bg-[#5CD6C0] flex items-center justify-center rounded-md">
          <svg
            width="120"
            height="120"
            viewBox="0 0 269 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M184.844 18.564C184.844 13.7682 186.612 9.16883 189.759 5.7777C192.906 2.38656 197.174 0.481445 201.625 0.481445H235.188C239.638 0.481445 243.907 2.38656 247.054 5.7777C250.201 9.16883 251.969 13.7682 251.969 18.564V235.554H260.359C262.585 235.554 264.719 236.507 266.292 238.203C267.866 239.898 268.75 242.198 268.75 244.596C268.75 246.994 267.866 249.293 266.292 250.989C264.719 252.684 262.585 253.637 260.359 253.637H8.64062C6.41529 253.637 4.2811 252.684 2.70756 250.989C1.13401 249.293 0.25 246.994 0.25 244.596C0.25 242.198 1.13401 239.898 2.70756 238.203C4.2811 236.507 6.41529 235.554 8.64062 235.554H17.0312V181.307C17.0312 176.511 18.7993 171.912 21.9464 168.521C25.0935 165.129 29.3618 163.224 33.8125 163.224H67.375C71.8257 163.224 76.094 165.129 79.2411 168.521C82.3882 171.912 84.1562 176.511 84.1562 181.307V235.554H100.938V108.977C100.938 104.181 102.706 99.5815 105.853 96.1904C109 92.7993 113.268 90.8941 117.719 90.8941H151.281C155.732 90.8941 160 92.7993 163.147 96.1904C166.294 99.5815 168.062 104.181 168.062 108.977V235.554H184.844V18.564ZM201.625 235.554H235.188V18.564H201.625V235.554ZM151.281 235.554V108.977H117.719V235.554H151.281ZM67.375 235.554V181.307H33.8125V235.554H67.375Z"
              fill="#05386B"
            />
          </svg>
        </div>

        {/* Support & Feedback Section */}
        <div className="flex flex-1 flex-col justify-between w-[250px] h-[200px]">
          <div className="bg-[#5CD6C0] flex justify-around py-4 rounded-md">
            {/* Technical Supports */}
            <div className="flex flex-col items-center">
              <img src={technicalImg} alt="tech" className="w-10 h-10" />
              <p className="text-center font-medium text-lg">3</p>
              <p className="text-center text-sm leading-tight">
                Technical
                <br />
                Supports
              </p>
            </div>

            {/* Operation Team */}
            <div className="flex flex-col items-center">
              <img src={operationImg} alt="operation" className="w-10 h-10" />
              <p className="text-center font-medium text-lg">4</p>
              <p className="text-center text-sm leading-tight">
                Operation
                <br />
                Team
              </p>
            </div>
          </div>

          {/* Customer Feedback */}
          <div className="bg-[#5CD6C0] rounded-md text-center py-2 mt-1">
            <p className="text-black font-semibold mb-1">Customer Feedback</p>
            <div className="flex justify-center text-yellow-500">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
