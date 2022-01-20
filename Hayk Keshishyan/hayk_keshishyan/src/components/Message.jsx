import React from "react";

const Message = (props) => {
    const textColor= {
        color: props.textColor
    }
    const nameColor= {
        color: props.nameColor
    }

    return (
        <div className="message">
            <div style={nameColor}>
                {props.name}
            </div>
            <div style={textColor}>
                {props.text}
            </div>
            <div>
                {props.date}
            </div>
        </div>
    );
}

export default Message;