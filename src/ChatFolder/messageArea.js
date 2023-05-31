import { FaceSmileIcon } from "@heroicons/react/24/outline";
import profile from "./../images/profile.jpg";
import MessagePlate from "./messageplate";

const MessageArea = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen">
    
      <div className="profile w-full flex justify-start items-center bg-gray-300 px-4 py-2 gap-2">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
        <h3 className="text-base font-medium text-black">Subhrajit Behera</h3>
      </div>
      <MessagePlate/>
      <div className="w-full py-2 bg-slate-200 flex justify-center items-center gap-1">
        <FaceSmileIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        <input
          type="text"
          placeholder="type your message"
          className="w-11/12 rounded-md px-2 py-2 outline-none"
        />
      </div>
    </div>
  );
};

export default MessageArea;
