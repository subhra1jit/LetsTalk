import ContactList from "./contactList";
import MessageArea from "./messageArea";


const Chat =()=>
{
    return(
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-1/3 h-full">
            <ContactList/>
          </div>
          <div className="w-4/6 h-full">
            <MessageArea/>
          </div>
        </div>
    )
}

export default Chat;