import React, { useState } from 'react';

const NewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    date: '',
    name: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    description: ''
  });

  const [isRobot, setIsRobot] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!isRobot) {
      alert('Please verify that you are not a robot');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Ticket submitted successfully!');
  };

  return (
    <div className="px-6 py-6">
      <h1 className="text-[28px] text-center font-normal font-serif mb-4">Create New Ticket</h1>

      <div className="relative w-[984px] h-[490px] mx-auto">
        <label className="absolute top-[5px] left-0 text-[20px] font-serif">Ticket No.</label>
        <input name="ticketNo" value={formData.ticketNo} onChange={handleInputChange}
          className="absolute top-0 left-[140px] w-72 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[5px] left-[520px] text-[20px] font-serif">Date:</label>
        <input name="date" value={formData.date} onChange={handleInputChange}
          className="absolute top-0 left-[687px] w-72 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[55px] left-0 text-[20px] font-serif">Name:</label>
        <input name="name" value={formData.name} onChange={handleInputChange}
          className="absolute top-[55px] left-[139px] w-72 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[60px] left-[520px] text-[20px] font-serif">Department:</label>
        <input name="department" value={formData.department} onChange={handleInputChange}
          className="absolute top-[53px] left-[687px] w-72 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[110px] left-0 text-[20px] font-serif">Subject:</label>
        <input name="subject" value={formData.subject} onChange={handleInputChange}
          className="absolute top-[155px] left-0 w-[984px] h-10 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[205px] left-0 text-[20px] font-serif">Category:</label>
        <input name="category" value={formData.category} onChange={handleInputChange}
          className="absolute top-[248px] left-0 w-96 h-10 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[300px] left-0 text-[20px] font-serif">Type:</label>
        <input name="type" value={formData.type} onChange={handleInputChange}
          className="absolute top-[342px] left-0 w-96 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[395px] left-0 text-[20px] font-serif">Priority:</label>
        <input name="priority" value={formData.priority} onChange={handleInputChange}
          className="absolute top-[438px] left-0 w-96 h-11 bg-stone-300/60 rounded-[10px] shadow-md border border-black/0" />

        <label className="absolute top-[205px] left-[424px] text-[20px] font-serif">Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange}
          className="absolute top-[248px] left-[424px] w-[560px] h-64 resize-none bg-stone-300/60 rounded-[10px] shadow-md border border-black/0 p-2" />

        <div className="absolute top-[435px] left-[920px] w-12 h-10 bg-teal-300 rounded-[10px]">
          <svg width="auto" height="auto" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.609375" width="54.3948" height="47.5112" rx="10" fill="#55D6C2" />
            <path d="M19 14.7106C19 13.4613 19.6282 12.2631 20.7465 11.3797C21.8648 10.4963 23.3815 10 24.9629 10C26.5444 10 28.0611 10.4963 29.1794 11.3797C30.2977 12.2631 30.9259 13.4613 30.9259 14.7106V31.6689C30.9259 32.4185 30.5489 33.1374 29.878 33.6675C29.207 34.1975 28.297 34.4953 27.3481 34.4953C26.3992 34.4953 25.4892 34.1975 24.8183 33.6675C24.1473 33.1374 23.7704 32.4185 23.7704 31.6689V18.4791C23.7704 18.2293 23.896 17.9896 24.1197 17.813C24.3433 17.6363 24.6467 17.537 24.9629 17.537C25.2792 17.537 25.5826 17.6363 25.8062 17.813C26.0299 17.9896 26.1555 18.2293 26.1555 18.4791V31.6689C26.1555 31.9188 26.2812 32.1584 26.5048 32.3351C26.7285 32.5118 27.0318 32.611 27.3481 32.611C27.6644 32.611 27.9678 32.5118 28.1914 32.3351C28.4151 32.1584 28.5407 31.9188 28.5407 31.6689V14.7106C28.5407 14.3395 28.4482 13.9719 28.2684 13.629C28.0886 13.2861 27.825 12.9745 27.4928 12.7121C27.1606 12.4496 26.7662 12.2414 26.3321 12.0994C25.898 11.9574 25.4328 11.8843 24.9629 11.8843C24.4931 11.8843 24.0279 11.9574 23.5938 12.0994C23.1597 12.2414 22.7653 12.4496 22.4331 12.7121C22.1009 12.9745 21.8373 13.2861 21.6575 13.629C21.4777 13.9719 21.3852 14.3395 21.3852 14.7106V31.6689C21.3852 32.9182 22.0134 34.1164 23.1317 34.9998C24.25 35.8832 25.7667 36.3795 27.3481 36.3795C28.9296 36.3795 30.4463 35.8832 31.5646 34.9998C32.6828 34.1164 33.3111 32.9182 33.3111 31.6689V18.4791C33.3111 18.2293 33.4367 17.9896 33.6604 17.813C33.884 17.6363 34.1874 17.537 34.5037 17.537C34.82 17.537 35.1233 17.6363 35.3469 17.813C35.5706 17.9896 35.6962 18.2293 35.6962 18.4791V31.6689C35.6962 33.418 34.8167 35.0954 33.2511 36.3322C31.6856 37.569 29.5622 38.2638 27.3481 38.2638C25.1341 38.2638 23.0107 37.569 21.4451 36.3322C19.8795 35.0954 19 33.418 19 31.6689V14.7106Z" fill="black" />
          </svg>
        </div>
      </div>

      <div className="w-[984px] mx-auto flex justify-between items-center mt-6">
        <div className="flex items-center px-4 py-2 border border-gray-300 bg-gray-50 rounded-md">
          <input
            type="checkbox"
            checked={isRobot}
            onChange={(e) => setIsRobot(e.target.checked)}
            className="w-6 h-6 mr-3 border-gray-300"
          />
          <div>
            <label className="text-sm text-gray-700 font-medium">I'm not a robot</label>
            <div className="text-xs text-right text-blue-600 font-bold">reCAPTCHA</div>
            <div className="text-[10px] text-gray-400">Privacy - Terms</div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-teal-400 hover:bg-teal-500 text-white text-lg font-medium px-10 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewTicket;
