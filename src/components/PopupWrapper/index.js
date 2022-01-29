import React from "react";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";

const PopupWrapper = ({children, onClose}) => {
    return (
        <div className='message-item'>
            <button className='go-back-button'
                    onClick={onClose}>&laquo; Go Back
            </button>
            {children}
        </div>
    )
};

export default PopupWrapper
