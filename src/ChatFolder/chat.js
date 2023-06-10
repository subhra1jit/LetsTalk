import { useState } from "react";
import ContactList from "./contactList";
import MessageArea from "./messageArea";



const HolderImage = ()=>
{
  return(
    <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-2xl text-black font-bold">welcome to Let'sTalk</h1>
        <p className="text-sm text-black font-medium">Now to continue click on the profile or search for the profile</p>
    </div>
  )
}

const Chat =()=>
{
   const [holder,setHolder] = useState();
    return(
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-1/3 h-full">
            <ContactList setHolder={setHolder}/>
          </div>
          <div className="w-4/6 h-full">
            {holder?<MessageArea holder={holder}/>:<HolderImage/>}
          </div>
        </div>
    )
}

export default Chat;