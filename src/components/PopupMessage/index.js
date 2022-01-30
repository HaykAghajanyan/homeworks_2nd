import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {messagesSelector} from "../../helpers/reduxSelctors";
import {useMemo} from "react";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useSelector(messagesSelector)

    // TODO: changed logic for current message. In case of deleting a message there was an error with wrong message opened in the popup
    const currentMessage = useMemo(() => messages.find(item => item.id === params.id), [messages, params.id])

    return (
        <MessageComp fromPopup item={currentMessage}/>
    )

}

export default PopupMessage
