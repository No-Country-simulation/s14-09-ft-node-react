import { Image } from "@nextui-org/react";
import { Key, ReactNode } from "react";
import { IMessages, Message } from "./interfaces";



export default function Contacts({messages}:IMessages){
  return(
    <div className="overflow-y-auto">
    {messages.map((message:Message, index:Key):ReactNode => (
      <div key={index} className="p-4 hover:bg-gray-700 cursor-pointer">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          src={message.sender.profile_picture || "https://via.placeholder.com/40"}
          alt={message.sender.name}
        />
        <div>
          <div className="font-bold">{message.sender.name}</div>
          <div className="text-sm">{message.content[message.content.length - 1].text}</div>
        </div>
      </div>
    ))}
  </div>
  )
}