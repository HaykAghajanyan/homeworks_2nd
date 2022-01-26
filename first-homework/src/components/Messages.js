import React from 'react';

function Messages({messages, color, field}) {
    return (
      <div className="container">
        {messages.map (({id, name, date, text}) => 
        <div className="content" key={id}>
        -{<span style = {{color: field === 'name' ? color : 'blueviolet'}}>{name}</span>}:
        {<span style={{color: field === 'text' ? color : 'blueviolet'}}>
        {text}</span>}. (date: {date})</div>)}
      </div>
    );
  }
  
export default Messages;