import { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

export default function HelpdeskLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
  

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    if (username === "admin") {
      console.log("admin logged in");
      navigate("/admin-dashboard");
      
    }else if(username==='operationTeam'){
   console.log("operation team logged in");
   navigate("/operation-dashboard");
    }else if(username==='technicalSupport'){
  console.log("technical support logged in");
  navigate("/technical-support-dashboard");
    }else{
      console.log("user logged in");
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
      <div className="bg-[#EFEDED]/50 w-[700px] h-[500px] flex flex-col items-center justify-center gap-6 shadow-lg">
        <h1 className="text-3xl font-semibold italic text-black mb-2">
          Helpdesk System
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-[400px] h-[50px] px-4 placeholder-black/80 border bg-[#fff] border-black text-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[400px] h-[50px] px-4 placeholder-black/80 border bg-[#fff] border-black text-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-[#03CC17] text-white text-lg font-medium px-8 py-2 mt-2 rounded-md hover:bg-green-600"
        >
          Sign In
        </button>

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <div className="w-[400px] flex justify-between mt-2 px-1">
         <Link to="/forgot-password">
          <a href="" className="text-[#EA0000] text-sm hover:underline">
            Forgot password
          </a>
          </Link>
          
<Link to={'/signup'}>
          <a href="#" className="text-black text-lg font-medium hover:underline">
            Sign Up
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
