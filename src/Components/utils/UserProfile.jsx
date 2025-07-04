import React, { useState } from "react";

const UserProfile = ({setActiveItem}) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className=" bg-white w-full py-2 px-10 h-full">
      <h2 className="text-2xl font-serif mb-4">User Profile</h2>

      <div className="bg-[#55D6C2] p-18 w-full   flex flex-wrap gap-6 justify-start items-start ">
        {/* Profile Card */}
        <div className="bg-white w-72 px-6 rounded-xl py-6 shadow-md relative">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                width="179"
                height="162"
                viewBox="0 0 179 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="89.5" cy="81" rx="89.5" ry="81" fill="#C4C4C4" />
                <path
                  d="M50.8333 129C50.8333 129 43 129 43 121.083C43 113.167 50.8333 89.4167 90 89.4167C129.167 89.4167 137 113.167 137 121.083C137 129 129.167 129 129.167 129H50.8333ZM90 81.5C96.2326 81.5 102.21 78.9978 106.617 74.5438C111.024 70.0898 113.5 64.0489 113.5 57.75C113.5 51.4511 111.024 45.4102 106.617 40.9562C102.21 36.5022 96.2326 34 90 34C83.7674 34 77.7901 36.5022 73.383 40.9562C68.9759 45.4102 66.5 51.4511 66.5 57.75C66.5 64.0489 68.9759 70.0898 73.383 74.5438C77.7901 78.9978 83.7674 81.5 90 81.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="text-left space-y-1 text-sm font-[serif]">
            <div>Username</div>
            <div>Contact Number</div>
            <div>Email</div>
            <div>Department</div>
          </div>

          <button onClick={()=>setActiveItem('profile-setting')} className="absolute top-4 right-4 cursor-pointer text-gray-700">
           <svg width="23" height="24" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4515 15.1579L25.4045 13.0358C26.0865 12.2947 26.9545 11.8905 27.9 11.7895V10.1053L18.6 0H3.1C1.3795 0 0 1.49895 0 3.36842V26.9474C0 27.8407 0.326606 28.6975 0.907969 29.3292C1.48933 29.9609 2.27783 30.3158 3.1 30.3158H12.4V27.1663L12.6015 26.9474H3.1V3.36842H13.95V15.1579H23.4515ZM17.05 2.52632L25.575 11.7895H17.05V2.52632ZM25.0015 18.24L28.1635 21.6758L18.662 32H15.5V28.5642L25.0015 18.24ZM30.7675 18.8463L29.2485 20.4968L26.0865 17.0611L27.6055 15.4105C27.9 15.0737 28.4115 15.0737 28.7215 15.4105L30.7675 17.6337C31.0775 17.9705 31.0775 18.5263 30.7675 18.8463Z" fill="black"/>
</svg>

          </button>
        </div>

        {/* Feedback Card */}
        <div className="bg-white p-5 rounded-xl shadow-md w-80">
          <h3 className="text-center text-sm font-[serif] mb-2">
            Give Your Feedback
          </h3>
          <div className="bg-[#9C9C9C] p-1 mb-3 text-xs font-mono">
            [Lorem Ipsum]
          </div>

          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                className={`text-xl ${
                  star <= rating ? "text-yellow-500" : "text-[#9C9C9C]"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <button className="bg-[#55D6C2] w-full py-2 rounded shadow hover:bg-teal-500 transition">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
