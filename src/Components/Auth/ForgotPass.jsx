import { Link } from 'react-router-dom';

export default function ForgotPass() {

  return (
    <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
      <div className="bg-[#EFEDED]/50 w-[700px] h-[500px] flex flex-col items-center justify-center gap-6 shadow-lg">
         <h1 className="text-sm w-80 text-center text-black ">
       Don’t worry, Enter your email below and we will 
send you a link to change password. 

        </h1>

       

        
         <input
          type="email"
          placeholder="Email"
          className="w-[400px] h-[50px] px-4 border placeholder-black/80  bg-[#fff] border-black text-lg"
        />
          <button className="bg-[#03CC17] text-white text-lg font-medium px-10 py-2 mt-2 rounded-lg ">
          Submit
        </button>
       <Link to={'/'}>
        <button className="bg-[#296EF2] text-white text-lg font-medium px-10 py-2 mt-2 rounded-lg ">
          Sign In
        </button>
        </Link>

        
      </div>
    </div>
  );
}
