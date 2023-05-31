import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import profile from "./../images/profile.jpg";
import List from "./lists";

const ContactList = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center w-full h-screen">
      <div className="profile w-full flex justify-start items-center bg-gray-300 px-4 py-2 ">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
      </div>
      <div className="w-full p-2 bg-slate-200 flex justify-center items-center gap-1">
        <MagnifyingGlassIcon className="w-7 h-7 text-gray-500" />
        <input
          type="text"
          placeholder="search here"
          className="w-4/5 rounded-md px-2 py-2 outline-none"
        />
      </div>
      <List />
    </div>
  );
};

export default ContactList;
