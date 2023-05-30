import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo1 from "../images/logo1.png";
import { EyeClose, EyeIcon } from "../svgs";

const LogIn = () => {
  const [show, setShow] = useState(false);
  
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 px-5 py-5">
      <img src={logo1} className="w-44 h-28 rounded-md" alt="logo are there" />
      <p className="text-sm text-center ">Let's Talk more freeely</p>
      <h1 className="text-2xl text-left py-2">Please Login To Continue!!</h1>
      <form className="flex flex-col gap-3 px-5 w-full md:w-1/2 lg:w-2/5 rounded-md shadow-md shadow-neutral-400 py-8">
        <div className="email flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-bold text-slate-950">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-slate-100 rounded-md"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="password flex flex-col gap-2 relative">
          <label
            htmlFor="password"
            className="text-lg font-bold text-slate-950"
          >
            Password
          </label>
          <input
            type={`${show ? "text" : "password"}`}
            className="w-full px-3 py-2 bg-slate-100 rounded-md"
            placeholder="Enter Your Password"
          />
          {show ? (
            <div className="cursor-pointer absolute top-11 right-2" onClick={(e) =>setShow(!show)} >
            <EyeIcon/></div>
          ) : (
            <div className="cursor-pointer absolute top-11 right-2" onClick={(e) =>setShow(!show)}>
            <EyeClose/>
            </div>
          )}
        </div>
        <div className="pt-2">
          <button className="bg-gradient-to-r from-pink-500 to-indigo-500 font-bold text-center text-base py-2 px-3 w-full rounded-md hover:text-white">
            LogIn
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            Don't Have an Account ?{" "}
            <span className="text-purple-500 hover:text-black font-bold cursor-pointer" onClick={()=>navigate("/register")}>
              Sign Up
            </span>
          </p>
          <p className="text-xs text-purple-500 hover:text-black font-bold cursor-pointer" onClick={()=>navigate("/forget")}>
            Forget Password
          </p>
        </div>
        <p className="py-1 text-base text-purple-500 text-center font-bold">
          OR
        </p>
        <div>
          <button className="bg-gradient-to-r from-pink-500 to-indigo-500 font-bold text-center text-base py-2 px-3 w-full rounded-md hover:text-white">
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
