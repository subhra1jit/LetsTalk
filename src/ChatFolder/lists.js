import profile from "./../images/profile.jpg";
import { contactList } from "./mockData";

const List =({setHolder})=>
{
    return(
        <div className="overflow-y-scroll w-full h-full flex flex-col justify-start gap-1">

         {contactList.map((contact,index)=>
         <div onClick={()=>setHolder(contact)} key={contact.id} className="flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 w-full cursor-pointer">
            <div className="profile-data flex justify-center items-center gap-2 py-2 px-2">
                 <img src={profile} alt="profile" className="w-10 h-10 rounded-full"/>
                 <div className="flex flex-col justify-start">
                    <h3 className="text-base font-medium text-black">{contact.name}</h3>
                    <p className="text-sm text-black">{contact.lastText}</p>
                 </div>
            </div>
            <div className="time px-2">
               <h3 className="text-sm text-black">{contact.lastTextTime}</h3>
            </div>
         </div> 
         )
        }    
      </div>
    )
}

export default List;