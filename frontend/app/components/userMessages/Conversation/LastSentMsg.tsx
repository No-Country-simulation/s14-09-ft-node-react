import { ILastSentMessage } from '../interfaces';
export default function LastSentMsg({ message }: ILastSentMessage) {
  return (
    <div className="msg-content">
      {message?.content.map((sent, index) => (
        <div key={index}>
          <span className="msg-message">{sent.text}</span>
          <span className="msg-date">{sent.timestamp}</span>
        </div>
      ))}
    </div>
  );
}