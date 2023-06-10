

const MessagePlate = ({messages}) => {
  return (
    <div className="overflow-y-scroll w-full h-full flex flex-col justify-start px-2 py-1">
      
      {messages.map((textline)=>
        <div key={textline.id} className={`flex ${textline.senderID ? "justify-start":"justify-end"} w-full py-1`}>
          <span className="text-sm py-3 px-2 rounded-md bg-slate-100">
            {textline.text}
          </span>
      </div>
      )
     }
    </div>
  );
};

export default MessagePlate;
