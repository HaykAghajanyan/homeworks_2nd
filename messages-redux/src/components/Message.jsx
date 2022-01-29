import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Message({message}) {

  const user = useSelector( state => state.userDuck.user );

  const buttons = <div className="actions">
                    <button className="btn btn-outline-primary btn-sm">Edit</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                  </div>

  return ( 
      <div className="message" key={'m_' + message.id}>
          <div className="name" style={{color: message.nameColor}}>{message.name}</div>
          <div className="date">{message.date}</div>
          <div className="text" style={{color: message.textColor}}>{message.text}</div>
          {user.username && buttons}
      </div>
  );
}

export default Message;
