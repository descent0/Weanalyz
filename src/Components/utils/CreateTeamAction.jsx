import React from "react";

const CreateTeamAction = ({ onClose, isTechnicalSupport }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded shadow-lg p-6 w-[600px]">
        <h2 className="text-center text-xl font-serif mb-4">
          My Ticket - Team Creation
        </h2>

        <div className="bg-[#55D6C2] p-6 rounded-2xl">
          <div className="flex gap-4">
            {/* Left Side - 1/3 Width */}
            <div className="flex flex-col gap-4 w-1/2">
              <input
                type="text"
                placeholder="Ticket No."
                className="w-full p-2 text-sm italic placeholder-[#000000]  rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.2)] bg-[#ffffff]"
              />
              <input
                type="text"
                placeholder="Team name"
                className="w-full p-2 text-sm placeholder-[#000000]  rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.2)] bg-[#ffffff]"
              />
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Team Member"
                  className="w-full p-2 pr-10 text-sm placeholder-[#000000]  rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.2)] bg-[#ffffff]"
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 33 25"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15.625C16.995 15.625 9 17.7031 9 21.875V25H33V21.875C33 17.7031 25.005 15.625 21 15.625ZM7.5 9.375V4.6875H4.5V9.375H0V12.5H4.5V17.1875H7.5V12.5H12V9.375H7.5ZM21 12.5C22.5913 12.5 24.1174 11.8415 25.2426 10.6694C26.3679 9.49732 27 7.9076 27 6.25C27 4.5924 26.3679 3.00268 25.2426 1.83058C24.1174 0.65848 22.5913 0 21 0C19.4087 0 17.8826 0.65848 16.7574 1.83058C15.6321 3.00268 15 4.5924 15 6.25C15 7.9076 15.6321 9.49732 16.7574 10.6694C17.8826 11.8415 19.4087 12.5 21 12.5Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <textarea
                placeholder="Remark"
                className="w-full h-[140px] p-3 text-sm placeholder-[#000000]  rounded-lg bg-[#ffffff] shadow-[0_10px_15px_rgba(0,0,0,0.2)] resize-none"
              />
            </div>
          </div>

         {isTechnicalSupport?( <div className="flex justify-center ml-10"><svg width="20" height="18" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6263 13.6059L17.6259 24.5416C16.8223 25.518 15.4293 24.8345 15.4293 23.435V17.186H8.14326C7.43073 17.186 6.85748 16.4895 6.85748 15.6238V9.37483C6.85748 8.50909 7.43073 7.81259 8.14326 7.81259H15.4293V1.56362C15.4293 0.170627 16.8169 -0.519362 17.6259 0.457038L26.6263 11.3927C27.1246 12.0046 27.1246 12.994 26.6263 13.6059ZM10.2862 24.2161V21.6124C10.2862 21.1828 9.99692 20.8313 9.64334 20.8313H5.14311C4.19485 20.8313 3.42874 19.9004 3.42874 18.7483V6.25035C3.42874 5.09819 4.19485 4.16736 5.14311 4.16736H9.64334C9.99692 4.16736 10.2862 3.81585 10.2862 3.38624V0.782505C10.2862 0.352889 9.99692 0.00138444 9.64334 0.00138444H5.14311C2.30369 0.00138444 0 2.8004 0 6.25035V18.7483C0 22.1982 2.30369 24.9972 5.14311 24.9972H9.64334C9.99692 24.9972 10.2862 24.6457 10.2862 24.2161Z" fill="black"/>
</svg>
</div>):(<></>)
}

          <div className="flex justify-center items-center gap-2 mt-3">
            <div className="">
              <svg
                width="30"
                height="27"
                viewBox="0 0 36 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.475 8.73125C25.3648 7.70667 24.0444 6.89365 22.5899 6.33907C21.1353 5.78449 19.5754 5.49932 18 5.5C14.8174 5.5 11.7652 6.65893 9.51472 8.72183C7.26428 10.7847 6 13.5826 6 16.5C6 19.4174 7.26428 22.2153 9.51472 24.2782C11.7652 26.3411 14.8174 27.5 18 27.5C23.595 27.5 28.26 23.9938 29.595 19.25H26.475C25.8571 20.8581 24.71 22.2508 23.192 23.2359C21.674 24.221 19.8599 24.7501 18 24.75C15.6131 24.75 13.3239 23.8808 11.636 22.3336C9.94821 20.7865 9 18.688 9 16.5C9 14.312 9.94821 12.2135 11.636 10.6664C13.3239 9.1192 15.6131 8.25 18 8.25C20.49 8.25 22.71 9.19875 24.33 10.6975L19.5 15.125H30V5.5L26.475 8.73125Z"
                  fill="black"
                />
              </svg>
            </div>
            <button
              onClick={onClose}
              className="bg-[#B0ADAD] hover:bg-gray-500 shadow-[0_10px_15px_rgba(0,0,0,0.2)] text-black font-bold py-2 px-2 rounded flex items-center gap-2"
            >
              Create Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamAction;
