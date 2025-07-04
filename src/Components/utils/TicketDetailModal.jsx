import React from "react";

const TicketDetailsModal = ({ ticket, onClose, isUser }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6  shadow-lg w-130">
        <h2 className="text-center text-xl mb-4">Ticket Details</h2>

        <div className="text-sm text-black space-y-0">
          <p>Ticket No: {ticket.ticketNo || "1234"}</p>
          <p>
            <strong>Date:</strong> {ticket.date || ""}
          </p>
          <p>
            <strong>Name:</strong> {ticket.name || ""}
          </p>
          <p>
            <strong>Dept:</strong> {ticket.department || ""}
          </p>
          <br />
          <p>
            <strong>Title:</strong> {ticket.title || ""}
          </p>
          <p>
            <strong>Description:</strong> {ticket.description || ""}
          </p>
          <p>
            <strong>Category:</strong> {ticket.category || ""}
          </p>
          <p>
            <strong>Type:</strong> {ticket.type || ""}
          </p>
          <p>
            <strong>Priority:</strong> {ticket.priority || ""}
          </p>
          <p>
            <strong>Status:</strong> {ticket.status || ""}
          </p>
          <p>
            <strong>Attachment:</strong> {ticket.attachment || ""}
          </p>
        </div>

        <div className="mt-6 flex justify-evenly">
          {!isUser ? (
            <button
              onClick={onClose}
              className="bg-[#8894FF] hover:[#8894FF] font-medium py-1 px-6 rounded"
            >
              Update
            </button>
          ) : (
            <></>
          )}

          <button
            onClick={onClose}
            className="bg-green-500 font-medium py-1 px-6 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
