import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Picker from "emoji-picker-react";
import { useState } from "react";
import profile from "./../images/profile.jpg";
import MessagePlate from "./messageplate";
import { messagesList } from "./mockData";

const MessageArea = ({ holder }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [emoji, setemoji] = useState(null);
  let [messages,setMessages] = useState(messagesList);

  const onEmojiClick = (event, emojiObject) => {
    setText(text+emojiObject.emoji);
    setShow(!show);
  };


  const onEnterpress=(event)=>
  {
     if(event.key === "Enter")
     {
          console.log("enter key is pressed");
           messages = [...messagesList];
           messages.push(
            {
              id: 0,
              messageType: "TEXT",
              text,
              senderID: 0,
              addedOn: "12:00 PM",
            }
           )
           setText("");
     }
  }

  return (
    <div className="flex flex-col justify-start items-center w-full h-screen">
      <div className="profile w-full flex justify-start items-center bg-gray-100 px-4 py-2 gap-2">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-8 h-8 cursor-pointer"
        />
        <h3 className="text-base font-medium text-black">{holder.name}</h3>
      </div>
      <MessagePlate messages={messages} />
      <div className="w-full py-2 bg-slate-200 flex justify-center items-center gap-1 relative">
        {show ?<Picker onEmojiClick={onEmojiClick} pickerStyle={{position:"absolute",bottom:"60px",left:"0px"}} />: ""}
        <FaceSmileIcon
          className="w-6 h-6 text-gray-500 cursor-pointer"
          onClick={() => setShow(!show)}
        />
        <input
          type="text"
          placeholder="type your message"
          className="w-11/12 rounded-md px-2 py-2 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onEnterpress}
        />
      </div>
    </div>
  );
};

export default MessageArea;
