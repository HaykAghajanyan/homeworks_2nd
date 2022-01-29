import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const messageSelector = ({messageDuck}) => messageDuck

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useSelector(messageSelector)
    console.log('popup messages', messages)

    return (
        <MessageComp item={messages[params.id - 1]} />
    )

}

export default PopupMessage
