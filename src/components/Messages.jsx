import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  const messageData = messages.map(data => <Message
    key={data.id}
    text={data.text}
    name={data.name}
    date={data.date}
    textColor={data.textColor}
    nameColor={data.nameColor} />)


  return (
    <div className="message-page">
      <div className="about">
        <div>
          Name
        </div>
        <div>
          Text
        </div>
        <div>
          Date
        </div>
      </div>
      {messageData}
    </div>
  );
}

export default Messages;
