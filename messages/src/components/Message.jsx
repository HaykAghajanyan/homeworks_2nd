import React from 'react';

function Message({message}) {
  return ( 
      <div className="message" key={'m_' + message.id}>
          <div className="name" style={{color: message.nameColor}}>{message.name}</div>
          <div className="date">{message.date}</div>
          <div className="text" style={{color: message.textColor}}>{message.text}</div>
      </div>
  );
}

export default Message;
