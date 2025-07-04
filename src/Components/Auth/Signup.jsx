import { Link } from 'react-router-dom';

export default function HelpdeskSignup() {

  return (
    <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
      <div className="bg-[#EFEDED]/50 w-[700px] h-[500px] flex flex-col items-center justify-center gap-6 shadow-lg">
      <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-semibold italic text-black ">
          Helpdesk System
        </h1>

        <h1 className="text-xl  text-black mb-2">
         Sign up here
        </h1>
      </div>
       

        <input
          type="text"
          placeholder="Username"
          className="w-[400px] h-[50px] px-4 border placeholder-black/80 bg-[#fff] border-black text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[400px] h-[50px] px-4 border placeholder-black/80  bg-[#fff] border-black text-lg"
        />
         <input
          type="email"
          placeholder="Email"
          className="w-[400px] h-[50px] px-4 border placeholder-black/80  bg-[#fff] border-black text-lg"
        />

        <button className="bg-[#296EF2] text-white text-lg font-medium px-10 py-2 mt-2 rounded-lg ">
          Sign Up
        </button>

        <div className="w-[400px] flex justify-between mt-2 px-1">
          <Link to="/forgot-password">
          <a href="" className="text-[#EA0000] text-sm hover:underline">
            Forgot password
          </a>
          </Link>
          <Link to='/'>
          <a href="" className="text-black text-lg font-medium hover:underline">
            Sign In
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
