import React, { useState } from "react";
import { Star, StarOff } from "lucide-react";

const Performance = () => {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFilled = hoverRating >= star || (!hoverRating && rating >= star);
      return (
        <button
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="text-yellow-500"
        >
          {isFilled ? (
            <Star size={20} fill="currentColor" />
          ) : (
            <StarOff size={20} />
          )}
        </button>
      );
    });
  };

  return (
    <div className="w-full px-10 py-4">
      <h2 className="text-2xl font-serif mb-4">Performance</h2>

      <div className="flex gap-20 h-full">
        {/* Left Section */}
        <div className="flex flex-col gap-4 h-full">
          {/* Profile + Contact */}
          <div className="flex  gap-4 ">
            <div className="p-4 py-6 bg-[#000000]/10 rounded-lg flex items-center justify-center">
              <svg
                width="95"
                height="85"
                viewBox="0 0 103 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.5 0C58.3293 0 64.8789 2.58124 69.708 7.17588C74.5371 11.7705 77.25 18.0022 77.25 24.5C77.25 30.9978 74.5371 37.2295 69.708 41.8241C64.8789 46.4188 58.3293 49 51.5 49C44.6707 49 38.1211 46.4188 33.292 41.8241C28.4629 37.2295 25.75 30.9978 25.75 24.5C25.75 18.0022 28.4629 11.7705 33.292 7.17588C38.1211 2.58124 44.6707 0 51.5 0ZM51.5 61.25C79.9538 61.25 103 72.2138 103 85.75V98H0V85.75C0 72.2138 23.0462 61.25 51.5 61.25Z"
                  fill="black"
                />
              </svg>
            </div>
              <div className="flex flex-col w-full gap-10">
                 <div className="text-xl"> Operation Name</div>
            <div className="bg-[#000000]/10 rounded-lg px-10 py-4 flex flex-col">
              <div>Contact No: 0123456789</div>
              <div>Department: ABC</div>
            </div>
            </div>
          </div>

          {/* Ticket Stats */}
          <div className="bg-[#000000]/10  rounded-lg px-4 py-3 text-sm shadow-md space-y-1">
            <div className="flex justify-between">
              <span>Total Ticket Handle</span>
              <span>5</span>
            </div>
            <div className="flex justify-between">
              <span>Ticket Solved</span>
              <span>2</span>
            </div>
            <div className="flex justify-between">
              <span>Ticket Pending</span>
              <span>1</span>
            </div>
            <div className="flex justify-between">
              <span>Ticket in progress</span>
              <span>2</span>
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
              <span>Rating</span>
              <div className="flex">{renderStars()}</div>
            </div>
          </div>
        </div>

        {/* Right Section - Operation Cards */}
        <div className="flex flex-col gap-4 h-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 w-[250px]"
            >
              <div className=" p-5 bg-[#000000]/10 rounded-xl flex items-center justify-center">
              <svg width="65" height="58" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5 0C36.8098 0 40.943 1.52767 43.9905 4.24695C47.038 6.96623 48.75 10.6544 48.75 14.5C48.75 18.3456 47.038 22.0338 43.9905 24.753C40.943 27.4723 36.8098 29 32.5 29C28.1902 29 24.057 27.4723 21.0095 24.753C17.962 22.0338 16.25 18.3456 16.25 14.5C16.25 10.6544 17.962 6.96623 21.0095 4.24695C24.057 1.52767 28.1902 0 32.5 0ZM32.5 36.25C50.4562 36.25 65 42.7388 65 50.75V58H0V50.75C0 42.7388 14.5437 36.25 32.5 36.25Z" fill="black"/>
</svg>

              </div>
              <div className="flex flex-col">
                <span className="text-sm font-[serif]">Operation Name {i}</span>
                <button className="bg-[#55D6C2] rounded-lg px-4 py-2 text-xs mt-1 hover:bg-teal-500 transition">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
