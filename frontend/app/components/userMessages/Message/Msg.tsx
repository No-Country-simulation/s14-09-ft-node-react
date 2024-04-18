
import { Image } from "@nextui-org/react";
import { IMessage } from "../interfaces";
import clsx from 'clsx'
export default function Msg({ message }: IMessage) {
  const status = message.sender.status
  console.log('status',status)
  console.log('message', message)
  return (
    <div className={clsx('msg', message.sender.status==='online'?'online':'')}>
      <Image
        className="msg-profile"
        src={message.sender.profile_picture || `https://picsum.photos/30/30?r=${Math.random()}`}
        alt={message.sender.name}
      />
      <div className="msg-detail">
        <div className="msg-username">{message.sender.name}</div>
        <div className="msg-content">
          <span className="msg-message">
            {message.content[message.content.length - 1].text}
          </span>
          <span className="msg-date">
            {message.content[message.content.length - 1].timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}