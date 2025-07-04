import React, { useState } from "react";
import { Search, Star } from "lucide-react";
import TicketDetailsModal from "../utils/TicketDetailModal";
import MyTicketAction from "../utils/MyTicketAction";
import CreateTeamAction from "../utils/CreateTeamAction";

const TicketList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [myTicketAction, setMyTicketAction] = useState(false);
  const [createTeamAction, setCreateTeamAction] = useState(false);

  const tickets = [
    {
      id: 1234,
      subject: "Login issue",
      category: "Authentication",
      priority: "High",
      date: "13/08/21",
      status: "In Progress",
    },
    {
      id: 1124,
      subject: "New ticket issue",
      category: "General",
      priority: "Medium",
      date: "14/08/21",
      status: "On Hold",
    },
    {
      id: 1224,
      subject: "New request",
      category: "Service Request",
      priority: "Low",
      date: "13/08/21",
      status: "Closed",
    },
    {
      id: 1244,
      subject: "Ticket submission",
      category: "Form Issues",
      priority: "High",
      date: "14/08/21",
      status: "In Progress",
    },
    {
      id: 1114,
      subject: "Login issue",
      category: "Authentication",
      priority: "High",
      date: "03/08/21",
      status: "In Progress",
    },
    {
      id: 1324,
      subject: "Page crash",
      category: "UI Bug",
      priority: "Critical",
      date: "10/09/21",
      status: "Closed",
    },
    {
      id: 1444,
      subject: "Mobile app crash",
      category: "Mobile",
      priority: "Critical",
      date: "11/09/21",
      status: "On Hold",
    },
    {
      id: 1544,
      subject: "UI bug",
      category: "Frontend",
      priority: "Low",
      date: "12/09/21",
      status: "Closed",
    },
    {
      id: 1644,
      subject: "Backend error",
      category: "Backend",
      priority: "High",
      date: "13/09/21",
      status: "In Progress",
    },
    {
      id: 1744,
      subject: "Login redirect",
      category: "Authentication",
      priority: "Medium",
      date: "14/09/21",
      status: "In Progress",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-[#5CDB95] text-[#000000]";
      case "On Hold":
        return "bg-[#05386B] text-white";
      case "Closed":
        return "bg-[#000000] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredTickets.length / entriesPerPage);
  const startIdx = (currentPage - 1) * entriesPerPage;
  const paginatedTickets = filteredTickets.slice(
    startIdx,
    startIdx + entriesPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleEntriesChange = (value) => {
    setEntriesPerPage(value);
    setCurrentPage(1);
  };

  const handleRowClick = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl tracking-wide font-light text-black mb-8 text-center">
          List of Ticket
        </h1>

        <div className="mb-3 flex flex-col items-start gap-3">
          {/* Search Box */}
          <div className="relative w-74 h-10 bg-stone-300/60 rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-black/0">
            <input
              type="text"
              placeholder="Find ticket"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full pl-2 pr-10 text-xl font-normal font-[Sanchez] placeholder-black/70 text-black bg-transparent rounded-[10px] focus:outline-none"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <Search className="w-6 h-6 text-black/90" />
            </div>
          </div>

          {/* Show Entries Dropdown */}
          <div className="flex gap-182">
          <div className="flex items-center gap-1 font-sans">
            <span className="text-black text-base font-normal">Show:</span>

            <div className="relative">
              <select
                value={entriesPerPage}
                onChange={(e) => handleEntriesChange(Number(e.target.value))}
                className="w-10 h-7 justify-center text-start px-2 bg-[#C4C4C4] appearance-none cursor-pointer focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.293945 3.52383C0.293945 2.7004 0.560767 1.91069 1.03571 1.32843C1.51066 0.746176 2.15482 0.419067 2.8265 0.419067L18.0218 0.419067C18.6935 0.419067 19.3376 0.746176 19.8126 1.32843C20.2875 1.91069 20.5544 2.7004 20.5544 3.52383V22.1524C20.5544 22.9759 20.2875 23.7656 19.8126 24.3478C19.3376 24.9301 18.6935 25.2572 18.0218 25.2572H2.8265C2.15482 25.2572 1.51066 24.9301 1.03571 24.3478C0.560767 23.7656 0.293945 22.9759 0.293945 22.1524V3.52383ZM5.35905 9.73337C5.237 9.73333 5.11755 9.77653 5.01507 9.85778C4.91258 9.93903 4.83144 10.0549 4.7814 10.1913C4.73136 10.3278 4.71456 10.4791 4.73303 10.627C4.75149 10.7749 4.80442 10.9131 4.88546 11.025L9.95056 18.0107C10.01 18.0928 10.0829 18.1585 10.1645 18.2035C10.2462 18.2484 10.3346 18.2717 10.4241 18.2717C10.5137 18.2717 10.6021 18.2484 10.6838 18.2035C10.7654 18.1585 10.8383 18.0928 10.8977 18.0107L15.9628 11.025C16.0439 10.9131 16.0968 10.7749 16.1153 10.627C16.1337 10.4791 16.1169 10.3278 16.0669 10.1913C16.0169 10.0549 15.9357 9.93903 15.8332 9.85778C15.7307 9.77653 15.6113 9.73333 15.4893 9.73337H5.35905Z"
                    fill="black"
                    fill-opacity="0.66"
                  />
                </svg>
              </div>
            </div>

            <span className="text-black text-base font-normal">Entries</span>
          </div>
          <div className="self-end"><svg width="12" height="15" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19H14V16.7647H0V19ZM14 6.70588H10V0H4V6.70588H0L7 14.5294L14 6.70588Z" fill="black"/>
</svg>
</div>
          </div>

        </div>

        {/* Table */}
        <div>
          <table className="w-full text-xs border-t">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Ticket No.
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Subject
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Category
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Priority
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Date
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Status
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Person In Charge
                </th>
                <th className="px-3 py-2 text-left font-medium text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedTickets.map((ticket, index) => (
                <tr
                  key={ticket.id}
                  className={`cursor-pointer ${
                    index % 2 === 0 ? "bg-[#C4C4C4]/30" : "bg-[#C4C4C4]"
                  }`}
                >
                  <td
                    onClick={() => handleRowClick(ticket)}
                    className="px-3 py-2 font-medium text-blue-600"
                  >
                    {ticket.id}
                  </td>
                  <td className="px-3 py-2 text-black">{ticket.subject}</td>
                  <td className="px-3 py-2 text-black">{ticket.category}</td>
                  <td className="px-3 py-2 text-black">{ticket.priority}</td>
                  <td className="px-3 py-2 text-black">{ticket.date}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded-sm ${getStatusStyle(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td>{ticket.personInCharge}</td>
                  <td>
                    <div className="flex gap-1">
                      <span
                        onClick={() => {
                          setMyTicketAction(true);
                          setSelectedTicket(ticket);
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.13 9.47368L16.39 8.14737C16.83 7.68421 17.39 7.43158 18 7.36842V6.31579L12 0H2C0.89 0 0 0.936842 0 2.10526V16.8421C0 17.4005 0.210714 17.9359 0.585786 18.3308C0.960859 18.7256 1.46957 18.9474 2 18.9474H8V16.9789L8.13 16.8421H2V2.10526H9V9.47368H15.13ZM11 1.57895L16.5 7.36842H11V1.57895ZM16.13 11.4L18.17 13.5474L12.04 20H10V17.8526L16.13 11.4ZM19.85 11.7789L18.87 12.8105L16.83 10.6632L17.81 9.63158C18 9.42105 18.33 9.42105 18.53 9.63158L19.85 11.0211C20.05 11.2316 20.05 11.5789 19.85 11.7789Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span
                        onClick={() => {
                          setCreateTeamAction(true);
                          setSelectedTicket(ticket);
                        }}
                      >
                        <svg
                          width="25"
                          height="16"
                          viewBox="0 0 28 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.1667 15.4286V18H8.16667V15.4286C8.16667 15.4286 8.16667 10.2857 15.1667 10.2857C22.1667 10.2857 22.1667 15.4286 22.1667 15.4286ZM18.6667 3.85714C18.6667 3.09427 18.4614 2.34853 18.0768 1.71423C17.6922 1.07993 17.1456 0.585547 16.5061 0.293609C15.8665 0.00167125 15.1628 -0.0747131 14.4839 0.0741156C13.8049 0.222944 13.1813 0.590301 12.6918 1.12973C12.2023 1.66916 11.869 2.35644 11.7339 3.10465C11.5989 3.85287 11.6682 4.62841 11.9331 5.33321C12.198 6.03801 12.6466 6.64041 13.2222 7.06424C13.7977 7.48807 14.4744 7.71429 15.1667 7.71429C16.0949 7.71429 16.9852 7.30791 17.6415 6.58456C18.2979 5.8612 18.6667 4.88012 18.6667 3.85714ZM22.4 10.3629C23.0377 11.0112 23.5519 11.7931 23.9124 12.6629C24.273 13.5326 24.4727 14.4728 24.5 15.4286V18H28V15.4286C28 15.4286 28 10.9929 22.4 10.3629ZM21 1.46718e-06C20.6475 0.000233941 20.2972 0.0609614 19.9617 0.180001C20.6442 1.25868 21.0102 2.54209 21.0102 3.85714C21.0102 5.17219 20.6442 6.45561 19.9617 7.53429C20.2972 7.65333 20.6475 7.71405 21 7.71429C21.9283 7.71429 22.8185 7.30791 23.4749 6.58456C24.1313 5.8612 24.5 4.88012 24.5 3.85714C24.5 2.83417 24.1313 1.85309 23.4749 1.12973C22.8185 0.406378 21.9283 1.46718e-06 21 1.46718e-06ZM9.33333 6.42857H5.83333V2.57143H3.5V6.42857H0V9H3.5V12.8571H5.83333V9H9.33333V6.42857Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="12"
                          height="17"
                          viewBox="0 0 14 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 19H14V16.7647H0V19ZM14 6.70588H10V0H4V6.70588H0L7 14.5294L14 6.70588Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="text-black">
            Showing {startIdx + 1} to{" "}
            {Math.min(startIdx + entriesPerPage, filteredTickets.length)} of{" "}
            {filteredTickets.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-2 py-1 bg-gray-200 rounded disabled:opacity-40"
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7695 1.03083C14.7057 0.976597 14.63 0.93357 14.5466 0.904211C14.4632 0.874853 14.3738 0.859741 14.2835 0.859741C14.1932 0.859741 14.1038 0.874853 14.0204 0.904211C13.937 0.93357 13.8612 0.976597 13.7975 1.03083L5.55989 8.01908C5.49596 8.07318 5.44524 8.13744 5.41064 8.20819C5.37603 8.27894 5.35822 8.35479 5.35822 8.43139C5.35822 8.50799 5.37603 8.58384 5.41064 8.65459C5.44524 8.72534 5.49596 8.7896 5.55989 8.8437L13.7975 15.832C13.9264 15.9413 14.1012 16.0027 14.2835 16.0027C14.4658 16.0027 14.6406 15.9413 14.7695 15.832C14.8984 15.7226 14.9708 15.5743 14.9708 15.4196C14.9708 15.265 14.8984 15.1167 14.7695 15.0073L7.01657 8.43139L14.7695 1.85544C14.8334 1.80135 14.8842 1.73708 14.9188 1.66633C14.9534 1.59558 14.9712 1.51974 14.9712 1.44314C14.9712 1.36654 14.9534 1.29069 14.9188 1.21994C14.8842 1.14919 14.8334 1.08493 14.7695 1.03083Z"
                  fill="black"
                  fill-opacity="0.91"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.93724 1.03083C9.87347 0.976597 9.79772 0.93357 9.71432 0.904211C9.63092 0.874853 9.54152 0.859741 9.45122 0.859741C9.36093 0.859741 9.27152 0.874853 9.18812 0.904211C9.10473 0.93357 9.02897 0.976597 8.96521 1.03083L0.727616 8.01908C0.663689 8.07318 0.612969 8.13744 0.578362 8.20819C0.543756 8.27894 0.525942 8.35479 0.525942 8.43139C0.525942 8.50799 0.543756 8.58384 0.578362 8.65459C0.612969 8.72534 0.663689 8.7896 0.727616 8.8437L8.96521 15.832C9.09411 15.9413 9.26893 16.0027 9.45122 16.0027C9.63352 16.0027 9.80834 15.9413 9.93724 15.832C10.0661 15.7226 10.1386 15.5743 10.1386 15.4196C10.1386 15.265 10.0661 15.1167 9.93724 15.0073L2.1843 8.43139L9.93724 1.85544C10.0012 1.80135 10.0519 1.73708 10.0865 1.66633C10.1211 1.59558 10.1389 1.51974 10.1389 1.44314C10.1389 1.36654 10.1211 1.29069 10.0865 1.21994C10.0519 1.14919 10.0012 1.08493 9.93724 1.03083Z"
                  fill="black"
                  fill-opacity="0.91"
                />
              </svg>
            </button>
            <span>{currentPage}</span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-2 py-1 bg-gray-200 rounded disabled:opacity-40"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.918138 0.869514C0.985659 0.815281 1.06587 0.772254 1.15418 0.742895C1.24249 0.713537 1.33716 0.698425 1.43277 0.698425C1.52838 0.698425 1.62305 0.713537 1.71136 0.742895C1.79967 0.772254 1.87988 0.815281 1.9474 0.869514L10.67 7.85777C10.7377 7.91186 10.7914 7.97613 10.828 8.04688C10.8647 8.11763 10.8835 8.19348 10.8835 8.27008C10.8835 8.34667 10.8647 8.42252 10.828 8.49327C10.7914 8.56402 10.7377 8.62829 10.67 8.68238L1.9474 15.6706C1.81091 15.78 1.62579 15.8414 1.43277 15.8414C1.23975 15.8414 1.05463 15.78 0.918138 15.6706C0.78165 15.5613 0.704971 15.413 0.704971 15.2583C0.704971 15.1037 0.78165 14.9554 0.918138 14.846L9.12753 8.27008L0.918138 1.69413C0.850447 1.64003 0.796741 1.57577 0.760096 1.50502C0.723452 1.43427 0.70459 1.35842 0.70459 1.28182C0.70459 1.20522 0.723452 1.12937 0.760096 1.05862C0.796741 0.987873 0.850447 0.92361 0.918138 0.869514Z"
                  fill="black"
                  fill-opacity="0.91"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.03532 0.869514C6.10283 0.815281 6.18304 0.772254 6.27135 0.742895C6.35965 0.713537 6.45432 0.698425 6.54993 0.698425C6.64553 0.698425 6.7402 0.713537 6.8285 0.742895C6.91681 0.772254 6.99702 0.815281 7.06454 0.869514L15.7867 7.85777C15.8544 7.91186 15.9081 7.97613 15.9448 8.04688C15.9814 8.11763 16.0003 8.19348 16.0003 8.27008C16.0003 8.34667 15.9814 8.42252 15.9448 8.49327C15.9081 8.56402 15.8544 8.62829 15.7867 8.68238L7.06454 15.6706C6.92805 15.78 6.74294 15.8414 6.54993 15.8414C6.35691 15.8414 6.1718 15.78 6.03532 15.6706C5.89883 15.5613 5.82216 15.413 5.82216 15.2583C5.82216 15.1037 5.89883 14.9554 6.03532 14.846L14.2444 8.27008L6.03532 1.69413C5.96763 1.64003 5.91392 1.57577 5.87728 1.50502C5.84064 1.43427 5.82178 1.35842 5.82178 1.28182C5.82178 1.20522 5.84064 1.12937 5.87728 1.05862C5.91392 0.987873 5.96763 0.92361 6.03532 0.869514Z"
                  fill="black"
                  fill-opacity="0.91"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTicket && (
        <TicketDetailsModal
          ticket={selectedTicket}
          isUser={false}
          onClose={() => {
            setShowModal(false);
            setSelectedTicket(null);
          }}
        />
      )}

      {createTeamAction && selectedTicket && (
        <CreateTeamAction
        isTechnicalSupport={true}
          onClose={() => {
            setCreateTeamAction(false);
            setSelectedTicket(null);
          }}
        />
      )}

      {myTicketAction && selectedTicket && (
        <MyTicketAction
          onClose={() => {
            setMyTicketAction(false);
            setSelectedTicket(null);
          }}
        />
      )}
    </div>
  );
};

export default TicketList;
