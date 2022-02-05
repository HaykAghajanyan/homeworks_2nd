import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {messagesSelector} from "../../helpers/reduxSelctors";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useSelector(messagesSelector)

    return (
        <MessageComp item={messages[params.id - 1]} />
    )

}

export default PopupMessage
