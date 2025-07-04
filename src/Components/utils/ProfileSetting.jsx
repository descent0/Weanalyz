import React, { useState } from "react";

const ProfileSettings = () => {
  const [user, setUser] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    realName: "",
    accessLevel: "",
    projectAccessLevel: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Updated:", user);
  };

  return (
    <div className="w-full text-[20px] font-serif">
      <div className="py-2 px-6">
        <h1 className="text-[24px] mb-2">User Profile</h1>
        <button className="bg-[#55D6C2] px-4 py-1 text-black ">
          Edit Account
        </button>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2  hover:ring-2 hover:ring-inset hover:ring-[#2B89F9] ">
            {[
              { label: "Username", name: "username" },
              { label: "Current Password", name: "currentPassword", type: "password" },
              { label: "New Password", name: "newPassword", type: "password" },
              { label: "Comfirm Password", name: "confirmPassword", type: "password" },
              { label: "Email", name: "email" },
              { label: "Real Name", name: "realName" },
              { label: "Access Level", name: "accessLevel" },
              { label: "Project Access Level", name: "projectAccessLevel" },
            ].map(({ label, name, type = "text" }, index) => (
              <React.Fragment key={name}>
                <div className="bg-[#8F8C8C] text-white pl-4 flex items-center h-[40px] border-b border-[#C4C4C4] border-4 hover:ring-2 hover:ring-inset hover:ring-[#2B89F9]">
                  {label}
                </div>
                <input
                  type={type}
                  name={name}
                  value={user[name]}
                  onChange={handleChange}
                  className={`h-[40px] px-2  focus:outline-none border-b border-[#C4C4C4] border-4 hover:ring-2 hover:ring-inset hover:ring-[#2B89F9]`}
                />
              </React.Fragment>
            ))}
            <div className="bg-[#D0D0D0] col-span-2 h-[60px] flex items-center pl-2">
              <button
                type="submit"
                className="bg-[#55D6C2] px-5 py-2 rounded"
              >
                Update User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
