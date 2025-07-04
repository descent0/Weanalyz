import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const Database = () => {
  const data = [
    { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
    { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
    { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
  ];

  return (
    <div className="bg-white p-4 px-10 font-serif">
      <h1 className="text-2xl mb-4">Database</h1>

      {/* Tabs */}
      <div className="flex border border-black text-center w-full overflow-hidden mb-4">
        <div className="bg-[#5CD6C0] text-black flex-1 px-4 py-1 border-r border-black cursor-pointer">
          User
        </div>
        <div className="bg-[#5CD6C0] text-black flex-1 px-4 py-1 border-r border-black cursor-pointer">
          Operation Team
        </div>
        <div className="bg-[#5CD6C0] text-black flex-1 px-4 py-1 cursor-pointer">
          Technical Support
        </div>
      </div>

      {/* Search & Entries */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-bold  rounded-md shadow-[0_10px_15px_rgba(0,0,0,0.2)] bg-[#C4C4C4]/60 px-2">
          <input
            type="text"
            placeholder="Find ticket"
            className="outline-none py-1 text-sm"
          />
          <svg width="25" height="20" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.82 14.8784C21.4423 13.0201 22.1689 10.7162 21.8545 8.42747C21.54 6.13879 20.2077 4.03416 18.1241 2.53465C16.0405 1.03514 13.3593 0.251331 10.6168 0.340037C7.87431 0.428742 5.27285 1.38342 3.33288 3.01307C1.39291 4.64273 0.257491 6.82717 0.153781 9.12938C0.0500707 11.4316 0.985718 13.6818 2.77353 15.4298C4.56135 17.1778 7.06948 18.2946 9.79615 18.5569C12.5228 18.8193 15.2669 18.2077 17.4795 16.8445H17.4778C17.5281 16.9008 17.5817 16.9542 17.642 17.0063L24.0923 22.4209C24.4064 22.6848 24.8326 22.8331 25.277 22.8333C25.7215 22.8334 26.1478 22.6853 26.4621 22.4216C26.7765 22.1579 26.9532 21.8001 26.9534 21.4271C26.9535 21.054 26.7771 20.6961 26.463 20.4323L20.0127 15.0176C19.9528 14.9667 19.8884 14.9197 19.82 14.877V14.8784ZM20.2523 9.47221C20.2523 10.488 20.0139 11.4939 19.5509 12.4323C19.0878 13.3708 18.409 14.2235 17.5534 14.9418C16.6977 15.6601 15.6819 16.2299 14.5639 16.6186C13.4459 17.0073 12.2477 17.2074 11.0376 17.2074C9.8275 17.2074 8.62926 17.0073 7.51128 16.6186C6.3933 16.2299 5.37748 15.6601 4.52182 14.9418C3.66616 14.2235 2.98741 13.3708 2.52433 12.4323C2.06124 11.4939 1.8229 10.488 1.8229 9.47221C1.8229 7.42072 2.79373 5.45325 4.52182 4.00262C6.24991 2.552 8.5937 1.73704 11.0376 1.73704C13.4815 1.73704 15.8253 2.552 17.5534 4.00262C19.2815 5.45325 20.2523 7.42072 20.2523 9.47221Z" fill="black" fill-opacity="0.89"/>
</svg>

        </div>

        <div className="flex items-center text-sm">
          <span className="mr-1">Show:</span>
          <select className="border text-sm px-1 py-0.5 rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="ml-1">Entries</span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-t  text-left">
            <th className="p-2"></th>
            <th className="p-2">Staff ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Speciality</th>
            <th className="p-2">Setting</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={user.id} className={idx % 2 === 0 ? "bg-[#C4C4C4]/30" : "bg-[#C4C4C4]/60"}>
              <td className="p-2"><input className="appearance-none w-5 h-5 bg-[#fff]" type="checkbox" /></td>
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.department}</td>
              <td className="p-2">{user.speciality}</td>
              <td className="p-2 flex gap-2">
                <Pencil className="w-4 h-4 cursor-pointer" />
                <Trash2 className="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="text-sm mt-2">Showing 1 to 3 of 3 entries</div>
      <div className="flex justify-end mt-1 text-sm">« <span className="mx-1">1</span> »</div>
    </div>
  );
};

export default Database;
