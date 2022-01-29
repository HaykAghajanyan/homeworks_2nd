import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Editor from './Editor';
import {removeMessage} from '../redux/ducks/messageDuck'

function Message({message}) {

  const dispatch = useDispatch();
  const user = useSelector( state => state.userDuck.user );

  const [edit, setEdit] = useState(false);
  const handleSave = () => setEdit(false);
  const handleCancel = () => setEdit(false);

  const deleteMessage = "Are you sure you want to delete this message?";

  const buttons = <div className="actions">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => setEdit(true)}>Edit</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => { window.confirm(deleteMessage) && dispatch(removeMessage(message)) } }>Delete</button>
                  </div>

  return ( 
    <>
        <div className="message" key={'m_' + message.id}>
            <div className="name" style={{color: message.nameColor}}>{message.name}</div>
            <div className="date">{message.date}</div>
            <div className="text" style={{color: message.textColor}}>{message.text}</div>
            {user.username === message.name && buttons}
        </div>
        {edit && <Editor id={message.id} handleSave={handleSave} handleCancel={handleCancel} />}
      </>
  );
      
}

export default Message;
