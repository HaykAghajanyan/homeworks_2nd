import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";
import React from "react";

const PopupMessage = () => {
    const params = useParams();
    const {messages} = useMessagesData();

    const getMessageItem = () => {
        return messages.find(item => item.id === params.id);
    };

    return (
        <MessageComp item={getMessageItem()} openInPopup/>
    );
};

export default PopupMessage
